const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/today', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const row = db.prepare(
    'SELECT * FROM reflection WHERE user_id = ? AND date = ?'
  ).get(req.session.userId, today);
  res.json(row || null);
});

router.post('/', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { tasks_completed, tasks_total, extra_wins, reflection_text, mood } = req.body;
  db.prepare(
    `INSERT INTO reflection (user_id, date, tasks_completed, tasks_total, extra_wins, reflection_text, mood)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(user_id, date) DO UPDATE SET
       tasks_completed=excluded.tasks_completed, tasks_total=excluded.tasks_total,
       extra_wins=excluded.extra_wins, reflection_text=excluded.reflection_text, mood=excluded.mood`
  ).run(req.session.userId, today, tasks_completed || 0, tasks_total || 0,
        extra_wins || '', reflection_text || '', mood || 'neutro');
  res.json({ ok: true });
});

module.exports = router;
