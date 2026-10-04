const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

transporter.verify()
    .then(()=>{
        console.log('Mail server connection successful');
    })
    .catch((err)=>{
        console.error('Mail server connection failed: ' + err.message);
    });

module.exports = transporter;