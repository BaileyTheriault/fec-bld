const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allBugs = await db.bugQueries.fetchAll();
    res.json(allBugs);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.post('/', async (req, res) => {
  try {
    const ticketId = await db.bugQueries.insertBug(req.body);
    await db.forumQueries.createForum(req.body, ticketId);
    res.send(`${ticketId}`);
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

router.put('/:id', async (req, res) => {
  try {
    await db.bugQueries.resolveBug(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

module.exports = router;
