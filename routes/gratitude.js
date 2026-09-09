const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/today', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const row = db.prepare(
    'SELECT * FROM gratitude WHERE user_id = ? AND date = ?'
  ).get(req.session.userId, today);
  res.json(row || null);
});

router.post('/', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { item1, item2, item3 } = req.body;
  db.prepare(
    `INSERT INTO gratitude (user_id, date, item1, item2, item3)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(user_id, date) DO UPDATE SET item1=excluded.item1, item2=excluded.item2, item3=excluded.item3`
  ).run(req.session.userId, today, item1, item2, item3);
  res.json({ ok: true });
});

router.get('/streak', (req, res) => {
  const rows = db.prepare(
    'SELECT date FROM gratitude WHERE user_id = ? ORDER BY date DESC'
  ).all(req.session.userId);
  let streak = 0;
  let expected = new Date();
  for (const row of rows) {
    const rowDate = new Date(row.date);
    rowDate.setHours(0, 0, 0, 0);
    expected.setHours(0, 0, 0, 0);
    if (rowDate.getTime() === expected.getTime()) {
      streak++;
      expected.setDate(expected.getDate() - 1);
    } else {
      break;
    }
  }
  res.json({ streak });
});

module.exports = router;
