import 'dotenv/config'

const express = require('express');
const cors = require('corse');
const mongoose = require('mongoose');

const port = 5000;

const app = express();
app.use(express.json())

mongoose.connect(process.env.DB_LOCATION,{
  autoIndex: true,
})

app.post('/login', (req,res) => {
  console.log(res.body);

  res.json(req.body);
})





app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
