// Create web server with express
const express = require('express');
const app = express();

// Use body-parser middleware to parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Define an array to store comments
const comments = [];

// Define a route to handle GET requests
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Define a route to handle POST requests
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the server on port 4001
app.listen(4001, () => {
  console.log('Server listening on 4001');
});

