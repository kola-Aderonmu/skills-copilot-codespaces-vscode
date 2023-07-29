
// Create web server

//Synthesizing 9/10 solutions (Duplicate hidden)

// Create a web server
//================================================

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Set up middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sample array to store comments (replace this with a database in a real application)
let comments = [];

// API endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// API endpoint to add a new comment
app.post('/comments', (req, res) => {
  const { name, text } = req.body;
  if (!name || !text) {
    return res.status(400).json({ error: 'Name and text are required fields.' });
  }

  const newComment = { name, text };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


