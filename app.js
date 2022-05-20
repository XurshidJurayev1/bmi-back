const express = require('express');
const errorHandling = require('./middleware/ErrorHandlingMiddleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./helper/db')()
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path = require('path');
const router = require('./routes/index');
const dotenv = require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());


app.use('/api', router);
app.use('/', function (req, res, next) {
  return res.send('hello');
});

// error Handler
app.use(errorHandling);
app.listen(process.env.PORT, () => console.log(`App successfuly started on...`));








