
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Home page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps CI/CD Project</title>
            <style>
                body {
                    background: #111827;
                    color: white;
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding-top: 100px;
                }

                .container {
                    background: #1f2937;
                    display: inline-block;
                    padding: 40px;
                    border-radius: 15px;
                }

                h1 {
                    color: #38bdf8;
                }

                p {
                    color: #d1d5db;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to My DevOps Project!</h1>
                <p>Node.js Application Running Successfully</p>
                <p>Server: AWS EC2 Ubuntu</p>
                <p>Deployment: Jenkins CI/CD</p>
                <p>Process Manager: PM2</p>
                <p>Status: Running</p>
            </div>
        </body>
        </html>
    `);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Node.js application is healthy',
        uptime: process.uptime()
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

