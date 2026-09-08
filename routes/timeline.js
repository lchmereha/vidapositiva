const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
  const userId = req.session.userId;

  const [gratitude] = await db.execute(
    'SELECT * FROM gratitude WHERE user_id = ? ORDER BY date DESC LIMIT 30', [userId]
  );
  const [focus] = await db.execute(
    'SELECT * FROM focus WHERE user_id = ? ORDER BY date DESC LIMIT 30', [userId]
  );
  const [tasks] = await db.execute(
    'SELECT * FROM tasks WHERE user_id = ? ORDER BY date DESC, sort_order LIMIT 100', [userId]
  );
  const [reflection] = await db.execute(
    'SELECT * FROM reflection WHERE user_id = ? ORDER BY date DESC LIMIT 30', [userId]
  );

  // Merge into timeline
  const events = [];
  gratitude.forEach(g => events.push({ type: 'gratidao', date: g.date, data: g }));
  focus.forEach(f => events.push({ type: 'foco', date: f.date, data: f }));
  reflection.forEach(r => events.push({ type: 'reflexao', date: r.date, data: r }));

  events.sort((a, b) => b.date.localeCompare(a.date));

  // Stats
  const [streakRow] = await db.execute(
    'SELECT COUNT(*) as streak FROM (SELECT DISTINCT date FROM gratitude WHERE user_id = ? ORDER BY date DESC) sub', [userId]
  );
  const [taskStats] = await db.execute(
    `SELECT
       COUNT(*) as total,
       SUM(done = 1) as completed
     FROM tasks WHERE user_id = ?`, [userId]
  );

  res.json({
    events,
    stats: {
      totalDays: streakRow[0].streak,
      totalTasks: taskStats[0].total || 0,
      completedTasks: Number(taskStats[0].completed) || 0
    }
  });
});

module.exports = router;
