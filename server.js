const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the Backend Server!' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
