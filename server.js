const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// initialize express
const app = express();
// set parsing middleware for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// serve files from server
app.use(express.static(path.join(__dirname, './')));

// route for input from html
app.post('/login', (req, res) => {
  console.log(`received login request 
  user: ${req.body.username}
  password: ${req.body.password}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
