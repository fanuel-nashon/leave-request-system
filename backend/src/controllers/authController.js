const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyPassword, hashPassword } = require('../helpers/hash');
const { validatePasswordStrength } = require('../helpers/passwordValidator');

const authController = {
    async login(req, res){
        try{
            const { email, password } = req.body;
            if(!email || !password){
                return res.status(400).json({success:false, message:'Empty fields'});
            }
            const user = await User.findByEmail(email);
            if(!user){
                return res.status(401).json({success:false, message:'Invalid credentials'});
            }

            const passwordMatch = await verifyPassword(password, user.password);

            if(!passwordMatch){
                return res.status(401).json({success:false, message:'Invalid credentials'});
            }

            const token = jwt.sign(
                { id:user.id, email:user.email },
                process.env.JWT_SECRET,
                { expiresIn:process.env.JWT_EXPIRES_IN }
            );

            delete user.password;

            res.json({success:true, message:'Login successful', data:{ user,token }});
        } catch (err){
            console.error(err);
            res.status(500).json({success:false, message:'Something went wrong, please try later'});
        }
    },
    
    async register(req, res){
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({success:false, message:"Fill all required fields"});
        }
        try{
            const existing = await User.findByEmail(email);
            if(existing){
                return res.status(409).json({success:false, message:"Email already exists"});
            }

            const passwordErrors = validatePasswordStrength(password);

            if(passwordErrors.length > 0) {
                return res.status(409).json({success:false, message:`Password must contain ${passwordErrors.join(',  ')}`});
            }

            const hashedPassword = await hashPassword(password);
            const user = await User.create(email,hashedPassword);

            const token = jwt.sign(
                { id:user.id, email:user.email, password:user.password },process.env.JWT_SECRET, 
                { expiresIn:process.env.JWT_EXPIRES_IN }
            );

            delete user.password;

            res.status(201).json({success:true, message:{ user,token }});
        } catch (err) {
            console.error(err);
            res.status(500).json({success:false, message:"Something went wrong please try again later"})
        }
    },
    
    async forgotPassword(req,res){
        const email = req.body;
        if(!email){
            return res.status(400).json({success:false, message:"Email is required"});
        }
        try{
            const user = await User.findByEmail(email);
            if(user){
                const rawToken = generateResetToken();
                const tokenHash = hashResetToken(rawToken);
                const expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes from now
                await User.setResetToken(user.id, tokenHash, expiresAt);

                const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${rawToken}`;

                await transporter.sendMail({
                    from: process.env.EMAIL_FROM,
                    to: user.email,
                    subject: 'Password Reset Request',
                    html: `<p> You requested a password reset. This link expires in 30 minutes. </p>
                            <p> Click <a href="${resetLink}">here</a> to reset your password. </p>
                            <p>If you did not request this, please ignore this email. </p>`
                });
            }

            res.json({success:true, message:'If that email is registered, a reset link has been sent'});
        } catch(err){
            console.error(err);
            res.status(500).json({success:false, message:'Something went wrong, please try later'});
        }

    },

    async resetPassword(req, res){
        const { token, newPassword } = req.body;
        if(!token || !newPassword){
            return res.status(400).json({success:false, message:"Token and new password are required"});
        }
        try {
            const tokenHash = hashResetToken(token);
            const user =  await User.findByResetToken(tokenHash);

            if(!user){
                return res.status(400).json({success:false, message:'Invalid or expired token'});
            }

            const passwordErrord = validatePasswordStrength(newPassword);

            if(passwordErrord.length > 0) {
                return res.status(409).json({success:false, message:`Password must contain ${passwordErrord.join(',  ')}`});
            }

            const hashedPassword = await hashPassword(newPassword);
            await User.updatePassword(user.id, hashedPassword);

            res.json({success:true, message:'Password has been reset successfully'});
        }
        catch (err){
            console.error(err);
            res.status(500).json({success:false, message:'Something went wrong, please try later'});
        }
    }
};

module.exports = authController;


