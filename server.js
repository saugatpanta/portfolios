const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required!');
    }

    // Save to a local file (or database)
    const logMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n---\n`;
    fs.appendFileSync('messages.txt', logMessage);

    res.status(200).send('Message received!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
