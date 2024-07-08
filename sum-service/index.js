const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  const result = a + b;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Sum service listening at http://localhost:${port}`);
});
