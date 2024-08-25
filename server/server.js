const express = require('express');
const cors = require('corse');
const mongoose = require('mongoose');

const port = 5000;

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect()





app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
