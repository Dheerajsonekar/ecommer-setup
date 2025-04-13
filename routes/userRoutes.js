const express = require('express');
const router = express.Router();

// GET /users - Fetch all users
router.get('/', (req, res) => {
    res.send("Fetching all users");
});

// POST /users - Add a new user
router.post('/', (req, res) => {
    res.send("Adding a new user");
});

// GET /users/:id - Fetch a user by their ID
router.get('/:id', (req, res) => {
    res.send(`Fetching user with ID: ${req.params.id}`);
});

module.exports = router;
