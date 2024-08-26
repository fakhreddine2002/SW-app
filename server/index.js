const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 3000; // Change this port if needed

// Load components data from JSON file
const dataPath = path.join(__dirname, 'data.json');
const components = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Middleware to handle JSON requests
app.use(express.json());

// Use CORS middleware to allow requests from different origins
app.use(cors());

// Route to get components
app.get('/api/components', (req, res) => {
  res.json(components);
});

// Route for the root URL to display the data from data.json
app.get('/', (req, res) => {
  res.json(components); // Send the contents of data.json as a JSON response
});

// Route to get a specific component by name
app.get('/:name', (req, res) => {
  const componentName = req.params.name;
  const component = components.find(comp => comp.name === componentName);

  if (component) {
    res.json(component);
  } else {
    res.status(404).json({ error: 'Component not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
