const express = require('express');
const db = require('../db');
const router = express.Router();

// GET /today — compat: retorna tasks de hoje
router.get('/today', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const rows = db.prepare(
    'SELECT * FROM tasks WHERE user_id = ? AND date = ? ORDER BY sort_order, id'
  ).all(req.session.userId, today);
  res.json(rows);
});

// GET /:date — tasks de uma data específica
router.get('/:date', (req, res) => {
  const { date } = req.params;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: 'Formato de data inválido' });
  }
  const rows = db.prepare(
    'SELECT * FROM tasks WHERE user_id = ? AND date = ? ORDER BY sort_order, id'
  ).all(req.session.userId, date);
  res.json(rows);
});

// POST / — criar task, aceita campo "date" (default: hoje)
router.post('/', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { title, priority, date: bodyDate, time } = req.body;
  const taskDate = bodyDate || today;
  if (!title) return res.status(400).json({ error: 'Título obrigatório' });
  const max = db.prepare(
    'SELECT MAX(sort_order) as m FROM tasks WHERE user_id = ? AND date = ?'
  ).get(req.session.userId, taskDate);
  const order = (max.m || 0) + 1;
  const result = db.prepare(
    'INSERT INTO tasks (user_id, date, title, priority, sort_order) VALUES (?, ?, ?, ?, ?)'
  ).run(req.session.userId, taskDate, title, priority || 'media', order);
  res.json({ id: result.lastInsertRowid, title, done: false, priority: priority || 'media', date: taskDate });
});

router.patch('/:id/toggle', (req, res) => {
  db.prepare(
    'UPDATE tasks SET done = CASE WHEN done = 0 THEN 1 ELSE 0 END WHERE id = ? AND user_id = ?'
  ).run(req.params.id, req.session.userId);
  res.json({ ok: true });
});

router.delete('/:id', (req, res) => {
  db.prepare(
    'DELETE FROM tasks WHERE id = ? AND user_id = ?'
  ).run(req.params.id, req.session.userId);
  res.json({ ok: true });
});

module.exports = router;
