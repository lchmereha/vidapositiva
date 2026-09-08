require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/auth');
const gratitudeRoutes = require('./routes/gratitude');
const focusRoutes = require('./routes/focus');
const tasksRoutes = require('./routes/tasks');
const reflectionRoutes = require('./routes/reflection');
const timelineRoutes = require('./routes/timeline');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 7 dias
}));

// Auth middleware
function requireAuth(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/');
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gratitude', requireAuth, gratitudeRoutes);
app.use('/api/focus', requireAuth, focusRoutes);
app.use('/api/tasks', requireAuth, tasksRoutes);
app.use('/api/reflection', requireAuth, reflectionRoutes);
app.use('/api/timeline', requireAuth, timelineRoutes);

// Protected pages
app.get('/app', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});
app.get('/timeline', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'timeline.html'));
});

// Session info
app.get('/api/me', requireAuth, (req, res) => {
  res.json({ id: req.session.userId, name: req.session.userName });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Vida Positiva rodando na porta ${PORT}`);
});
