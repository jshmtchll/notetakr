const express = require('express');
const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// initial express app //
const PORT = process.env.PORT || 3030;
const app = express();


//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));


//requires routes //

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);









// listener //
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}` +  " ¯\\_(ツ)_/¯");
});