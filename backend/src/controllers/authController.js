const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyPassword, hashPassword } = require('../services/hash');
const { validatePasswordStrength } = require('../services/passwordValidator');

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
    }
};

module.exports = authController;


