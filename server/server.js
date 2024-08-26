const express = require('express');
const cors = require('cors');
let USER = [];  // Initially empty
let isSignedIn = false;

const app = express();
const port = 8099;

app.use(express.json());
app.use(cors());

// Serve user data on root route
app.get("/", (req, res) => {
    res.json({ user: USER, signedIn: isSignedIn });
});

// Handle sign-up POST request
app.post("/signup", (req, res) => {
    const { username, email, password } = req.body;

    USER = [{ username, email, password }];
    isSignedIn = true;

    res.status(201).json({ user: USER, signedIn: isSignedIn }); 
});

// Route to clear the user data
app.post("/clear", (req, res) => {
    USER = [];
    isSignedIn = false;
    res.status(200).json({ message: "User data cleared", signedIn: isSignedIn });
});

// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});