const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const ticketId = await db.bugQueries.insertBug(req.body);
    await db.forumQueries.createForum(req.body, ticketId);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await db.bugQueries.updateBug(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.put('/api/bug/:id', async (req, res) => {
  try {
    await db.bugQueries.resolveBug(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

module.exports = router;
