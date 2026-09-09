const express = require('express');
const db = require('../db');
const router = express.Router();

// GET /today — compat
router.get('/today', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const row = db.prepare(
    'SELECT * FROM focus WHERE user_id = ? AND date = ?'
  ).get(req.session.userId, today);
  res.json(row || null);
});

// GET /:date — foco de data específica
router.get('/:date', (req, res) => {
  const { date } = req.params;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: 'Formato de data inválido' });
  }
  const row = db.prepare(
    'SELECT * FROM focus WHERE user_id = ? AND date = ?'
  ).get(req.session.userId, date);
  res.json(row || null);
});

// POST / — aceita campo "date" (default: hoje)
router.post('/', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { focus_text, date: bodyDate } = req.body;
  const d = bodyDate || today;
  db.prepare(
    `INSERT INTO focus (user_id, date, focus_text)
     VALUES (?, ?, ?)
     ON CONFLICT(user_id, date) DO UPDATE SET focus_text=excluded.focus_text`
  ).run(req.session.userId, d, focus_text || '');
  res.json({ ok: true });
});

module.exports = router;
