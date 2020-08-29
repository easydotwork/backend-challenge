'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const consign       = require('consign');

const app = express();

require("dotenv-safe").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign()
    .include('controllers')
    .into(app);

module.exports = app;