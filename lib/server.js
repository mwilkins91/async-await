const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();
const PORT = 8080;

const uri = 'mongodb://localhost:27017/pokemon';
mongoose.connect(uri);

app.use(bodyParser.json());
app.use(router);
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
