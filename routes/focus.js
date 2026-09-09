const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/today', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const row = db.prepare(
    'SELECT * FROM focus WHERE user_id = ? AND date = ?'
  ).get(req.session.userId, today);
  res.json(row || null);
});

router.post('/', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { focus_text } = req.body;
  db.prepare(
    `INSERT INTO focus (user_id, date, focus_text)
     VALUES (?, ?, ?)
     ON CONFLICT(user_id, date) DO UPDATE SET focus_text=excluded.focus_text`
  ).run(req.session.userId, today, focus_text);
  res.json({ ok: true });
});

module.exports = router;
