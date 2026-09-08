const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/today', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const [rows] = await db.execute(
    'SELECT * FROM focus WHERE user_id = ? AND date = ?',
    [req.session.userId, today]
  );
  res.json(rows[0] || null);
});

router.post('/', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { focus_text } = req.body;
  await db.execute(
    `INSERT INTO focus (user_id, date, focus_text)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE focus_text=VALUES(focus_text)`,
    [req.session.userId, today, focus_text]
  );
  res.json({ ok: true });
});

module.exports = router;
