const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/today', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const [rows] = await db.execute(
    'SELECT * FROM reflection WHERE user_id = ? AND date = ?',
    [req.session.userId, today]
  );
  res.json(rows[0] || null);
});

router.post('/', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { tasks_completed, tasks_total, extra_wins, reflection_text, mood } = req.body;
  await db.execute(
    `INSERT INTO reflection (user_id, date, tasks_completed, tasks_total, extra_wins, reflection_text, mood)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       tasks_completed=VALUES(tasks_completed), tasks_total=VALUES(tasks_total),
       extra_wins=VALUES(extra_wins), reflection_text=VALUES(reflection_text), mood=VALUES(mood)`,
    [req.session.userId, today, tasks_completed || 0, tasks_total || 0,
     extra_wins || '', reflection_text || '', mood || 'neutro']
  );
  res.json({ ok: true });
});

module.exports = router;
