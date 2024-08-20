const express = require('express');
const app = express();
const bodyParser = require('body-parser') ;
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const port = process.env.NODE_PORT;
const sequelize = require('./connect/config');

app.get('/', async(req, res) => {
    try {
        await sequelize.authenticate();
        res.status(200).json('Connection has been established successfully.');
      } catch (error) {
        res.status(500).json('Unable to connect to the database:', error);
      }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})