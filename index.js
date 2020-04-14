const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const db = require('./db/index');

const app = express();

app.use(cors());
app.use(bp.json());

app.post('/api/bug', async (req, res) => {
  try {
    await db.bugQueries.insertBug(req.body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
});

app.patch('/api/bug/:id', async (req, res) => {
  try {
    await db.bugQueries.updateBug(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

app.listen(3000, () => console.log('Server is up on port 3000.'));
