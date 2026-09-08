const express = require('express');
const db = require('../db');
const router = express.Router();

// GET gratidão de hoje
router.get('/today', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const [rows] = await db.execute(
    'SELECT * FROM gratitude WHERE user_id = ? AND date = ?',
    [req.session.userId, today]
  );
  res.json(rows[0] || null);
});

// UPSERT gratidão
router.post('/', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { item1, item2, item3 } = req.body;
  await db.execute(
    `INSERT INTO gratitude (user_id, date, item1, item2, item3)
     VALUES (?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE item1=VALUES(item1), item2=VALUES(item2), item3=VALUES(item3)`,
    [req.session.userId, today, item1, item2, item3]
  );
  res.json({ ok: true });
});

// GET streak de gratidão
router.get('/streak', async (req, res) => {
  const [rows] = await db.execute(
    `SELECT date FROM gratitude WHERE user_id = ? ORDER BY date DESC`,
    [req.session.userId]
  );
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
