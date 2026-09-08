const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/today', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const [rows] = await db.execute(
    'SELECT * FROM tasks WHERE user_id = ? AND date = ? ORDER BY sort_order, id',
    [req.session.userId, today]
  );
  res.json(rows);
});

router.post('/', async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const { title, priority } = req.body;
  if (!title) return res.status(400).json({ error: 'Título obrigatório' });
  const [max] = await db.execute(
    'SELECT MAX(sort_order) as m FROM tasks WHERE user_id = ? AND date = ?',
    [req.session.userId, today]
  );
  const order = (max[0].m || 0) + 1;
  const [result] = await db.execute(
    'INSERT INTO tasks (user_id, date, title, priority, sort_order) VALUES (?, ?, ?, ?, ?)',
    [req.session.userId, today, title, priority || 'media', order]
  );
  res.json({ id: result.insertId, title, done: false, priority: priority || 'media' });
});

router.patch('/:id/toggle', async (req, res) => {
  await db.execute(
    'UPDATE tasks SET done = NOT done WHERE id = ? AND user_id = ?',
    [req.params.id, req.session.userId]
  );
  res.json({ ok: true });
});

router.delete('/:id', async (req, res) => {
  await db.execute(
    'DELETE FROM tasks WHERE id = ? AND user_id = ?',
    [req.params.id, req.session.userId]
  );
  res.json({ ok: true });
});

module.exports = router;
