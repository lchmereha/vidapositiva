const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
  const userId = req.session.userId;

  const gratitude = db.prepare(
    'SELECT * FROM gratitude WHERE user_id = ? ORDER BY date DESC LIMIT 30'
  ).all(userId);
  const focus = db.prepare(
    'SELECT * FROM focus WHERE user_id = ? ORDER BY date DESC LIMIT 30'
  ).all(userId);
  const tasks = db.prepare(
    'SELECT * FROM tasks WHERE user_id = ? ORDER BY date DESC, sort_order LIMIT 100'
  ).all(userId);
  const reflection = db.prepare(
    'SELECT * FROM reflection WHERE user_id = ? ORDER BY date DESC LIMIT 30'
  ).all(userId);

  const events = [];
  gratitude.forEach(g => events.push({ type: 'gratidao', date: g.date, data: g }));
  focus.forEach(f => events.push({ type: 'foco', date: f.date, data: f }));
  reflection.forEach(r => events.push({ type: 'reflexao', date: r.date, data: r }));
  events.sort((a, b) => b.date.localeCompare(a.date));

  const streakRow = db.prepare(
    'SELECT COUNT(*) as streak FROM (SELECT DISTINCT date FROM gratitude WHERE user_id = ? ORDER BY date DESC)'
  ).get(userId);
  const taskStats = db.prepare(
    `SELECT COUNT(*) as total, SUM(CASE WHEN done = 1 THEN 1 ELSE 0 END) as completed
     FROM tasks WHERE user_id = ?`
  ).get(userId);

  res.json({
    events,
    stats: {
      totalDays: streakRow.streak,
      totalTasks: taskStats.total || 0,
      completedTasks: Number(taskStats.completed) || 0
    }
  });
});

module.exports = router;
