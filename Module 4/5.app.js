const express = require('express');
require('./setup.js');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const { db } = require('./db.js');

app.get('/data', async(req, res) => {
    try {
        const result = await db.query('SELECT * FROM data');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
app.post('/data', async(req, res) => {
    try {
        const {
            value
        } = req.body;
        await db.query('INSERT INTO data (value) VALUES ($1)', [value]);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
app.get('/health', (req, res) => {
    res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});