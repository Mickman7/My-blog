const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.json({ users: ['user1', 'user2', 'user3', 'user4'] });
});

app.listen(path, () => {
  console.log(`server started on port ${port}`);
});
