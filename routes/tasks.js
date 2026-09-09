const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/today', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const rows = db.prepare(
    'SELECT * FROM tasks WHERE user_id = ? AND date = ? ORDER BY sort_order, id'
  ).all(req.session.userId, today);
  res.json(rows);
});

router.post('/', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { title, priority } = req.body;
  if (!title) return res.status(400).json({ error: 'Título obrigatório' });
  const max = db.prepare(
    'SELECT MAX(sort_order) as m FROM tasks WHERE user_id = ? AND date = ?'
  ).get(req.session.userId, today);
  const order = (max.m || 0) + 1;
  const result = db.prepare(
    'INSERT INTO tasks (user_id, date, title, priority, sort_order) VALUES (?, ?, ?, ?, ?)'
  ).run(req.session.userId, today, title, priority || 'media', order);
  res.json({ id: result.lastInsertRowid, title, done: false, priority: priority || 'media' });
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
