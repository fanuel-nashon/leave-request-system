const express = require('express');
const router = express.Router();
const { loginLimiter, registerLimiter, forgotPasswordLimiter } = require('../middleware/rateLimiter');

const authController = require('../controllers/authController');

// login route
router.post('/login', loginLimiter, authController.login);
router.post('/register', registerLimiter, authController.register );

// forgot password route
router.post('/forgot-password', forgotPasswordLimiter, authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);
module.exports = router;

