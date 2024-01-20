// Import required modules
const express = require("express");

// Create an Express application
const app = express();
const port = 5000; // You can change this port number to any valid port you prefer

// Define a route for the homepage
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Define additional routes if needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
