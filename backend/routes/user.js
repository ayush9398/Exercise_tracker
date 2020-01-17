const express = require('express');
const router = express.Router();

let User = require('../models/user.model');

router.get('/', (req, res, next) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res, next) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;