const express = require('express');
const db = require('../db');
const router = express.Router();

// GET /?month=YYYY-MM — retorna dias com dados no mês
router.get('/', (req, res) => {
  const userId = req.session.userId;
  const month = req.query.month; // YYYY-MM ou undefined (retorna últimos 90 dias)

  let dateFilter = '';
  const params = [userId];

  if (month && /^\d{4}-\d{2}$/.test(month)) {
    dateFilter = `AND date LIKE '${month}-%'`;
  } else {
    // últimos 90 dias para dots no calendário
    dateFilter = `AND date >= date('now', '-90 days')`;
  }

  const tasks = db.prepare(
    `SELECT DISTINCT date FROM tasks WHERE user_id = ? ${dateFilter}`
  ).all(...params);
  const grat = db.prepare(
    `SELECT DISTINCT date FROM gratitude WHERE user_id = ? ${dateFilter}`
  ).all(...params);
  const refl = db.prepare(
    `SELECT DISTINCT date FROM reflection WHERE user_id = ? ${dateFilter}`
  ).all(...params);

  // Merge em mapa { date: { tasks, gratitude, reflection } }
  const map = {};
  tasks.forEach(r => {
    if (!map[r.date]) map[r.date] = {};
    map[r.date].tasks = true;
  });
  grat.forEach(r => {
    if (!map[r.date]) map[r.date] = {};
    map[r.date].gratitude = true;
  });
  refl.forEach(r => {
    if (!map[r.date]) map[r.date] = {};
    map[r.date].reflection = true;
  });

  const days = Object.entries(map).map(([date, data]) => ({
    date,
    has_tasks: !!data.tasks,
    has_gratitude: !!data.gratitude,
    has_reflection: !!data.reflection
  }));

  res.json({ days });
});

module.exports = router;
