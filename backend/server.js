const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = 4000;

app.listen(PORT, function() {
  console.log('Server running on port: ' + PORT)
})
