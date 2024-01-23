
// Import the express module
const express = require('express');
const cors = require('cors');
// Create an instance of the express application
const app = express();

// Define a route
app.get('/', cors(), (req, res) => {
    let jsonResponse = { message: 'Hello, Express!' };
    jsonResponse = JSON.stringify(jsonResponse)
    res.json(jsonResponse);
});

// Set the port for the server to listen on
const port = process.env.PORT || 3001;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});