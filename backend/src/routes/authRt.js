const express = require('express');
const router = express.Router();
const { loginLimiter, registerLimiter } = require('../middleware/rateLimiter');
const authController = require('../controllers/authController');

// login route
router.post('/login', loginLimiter, authController.login);
router.post('/register', registerLimiter, authController.register );

module.exports = router;