const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (_, res) => res.send('Server is running!'));

app.get('/api/message', (_, res) => res.json({
  message: 'My first API works!',
  course: 'Browser Programming',
  year: 2026,
  time: new Date()
}));

app.get('/api/student', (_, res) => res.json({
  name: 'Your Name',
  role: 'Student'
}));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
