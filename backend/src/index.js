require('dotenv').config();
const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3005;
app.use(express.json());

app.use(cors({
    origin:'http://localhost:3003'
}));

app.use('/api/auth', require('./routes/authRt'));

app.get('/health', (req,res)=> {
    res.json({
        status: 'ok',
        timestamp: new Date()
    });
});

app.listen(port, ()=> {
    console.log(`Leave request system API running at http://localhost:${port}`);
});