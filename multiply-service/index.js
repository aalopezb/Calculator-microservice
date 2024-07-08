const express = require('express');
const cors = require('cors');
const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  const result = a * b;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Multiply service listening at http://localhost:${port}`);
});
