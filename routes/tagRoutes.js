const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tags = await db.tagQueries.fetchAll();
    res.json(tags);
  } catch (err) {
    res.send(404);
  }
});

router.post('/', async (req, res) => {
  try {
    await db.tagQueries.addTag(req.body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
});

module.exports = router;
