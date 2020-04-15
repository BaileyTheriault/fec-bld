const express = require('express');
const db = require('../db/index');

const router = express.Router();

router.patch('/:id', async (req, res) => {
  try {
    await db.forumQueries.addForumPost(req.body, req.params.id);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
  }
});

module.exports = router;
