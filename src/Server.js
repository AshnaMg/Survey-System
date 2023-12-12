const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for surveys (replace this with a database in a real application)
const surveys = [];

// API endpoint to submit a survey
app.post('/api/surveys', (req, res) => {
    const surveyData = req.body;
    surveys.push(surveyData);
    res.status(201).json({ message: 'Survey submitted successfully' });
});

// API endpoint to list all surveys
app.get('/api/surveys', (req, res) => {
    res.json(surveys);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});