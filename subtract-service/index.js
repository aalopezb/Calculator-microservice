const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.post('/subtract', (req, res) => {
  const { a, b } = req.body;
  const result = a - b;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Subtract service listening at http://localhost:${port}`);
});
