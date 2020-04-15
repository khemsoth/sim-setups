const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = 4000;
const Sequelize = require('sequelize');
const path = require ('path');
const fs = require('fs');
const db = require('./Models');
const cors = require('cors');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

require('./Routes/apiRoutes')(app);

const sequelize = new Sequelize('sim_setups', process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql'
})

db.sequelize.sync({force: false})

sequelize.authenticate().then(() => {console.log('Connected to the database successfully')})
  .catch(err => {
    console.error('Unable to connect to database', err);
  })

app.listen(PORT, function() {
  console.log('Server running on port: ' + PORT)
})
