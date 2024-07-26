const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const dotenv = require('dotenv');
dotenv.config();
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});


const aylien = require("aylien_textapi");
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
