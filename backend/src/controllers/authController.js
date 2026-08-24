const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { verifyPassword } = require('../services/hash');

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
    }
};

module.exports = authController;


