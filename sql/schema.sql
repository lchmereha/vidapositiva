-- Schema Vida Positiva

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS gratitude (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  date DATE NOT NULL,
  item1 VARCHAR(280),
  item2 VARCHAR(280),
  item3 VARCHAR(280),
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_gratitude (user_id, date)
);

CREATE TABLE IF NOT EXISTS focus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  date DATE NOT NULL,
  focus_text VARCHAR(280) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_focus (user_id, date)
);

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  date DATE NOT NULL,
  title VARCHAR(200) NOT NULL,
  done BOOLEAN DEFAULT FALSE,
  priority ENUM('baixa','media','alta') DEFAULT 'media',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_tasks_date (user_id, date)
);

CREATE TABLE IF NOT EXISTS reflection (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  date DATE NOT NULL,
  tasks_completed INT DEFAULT 0,
  tasks_total INT DEFAULT 0,
  extra_wins TEXT,
  reflection_text TEXT,
  mood ENUM('otimo','bom','neutro','ruim','pessimo') DEFAULT 'neutro',
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_reflection (user_id, date)
);

CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(500) NOT NULL,
  theme ENUM('foco','gratidao','abundancia','acao') DEFAULT 'foco',
  active BOOLEAN DEFAULT TRUE
);
