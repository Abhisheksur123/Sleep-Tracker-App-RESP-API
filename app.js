const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

const sleepData = [];

// POST /sleep
app.post('/sleep', (req, res) => {
    const { userId, hours, timestamp } = req.body;
    if (!userId || !hours || !timestamp) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const record = { id: uuidv4(), userId, hours, timestamp };
    sleepData.push(record);
    res.status(201).json(record);
});

// GET /sleep/:userId
app.get('/sleep/:userId', (req, res) => {
    const { userId } = req.params;
    const userRecords = sleepData.filter(record => record.userId === userId);
    userRecords.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    res.json(userRecords);
});

// DELETE /sleep/:recordId
app.delete('/sleep/:recordId', (req, res) => {
    const { recordId } = req.params;
    const recordIndex = sleepData.findIndex(record => record.id === recordId);
    if (recordIndex === -1) {
        return res.status(404).json({ error: 'Record not found' });
    }
    sleepData.splice(recordIndex, 1);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
