const express = require('express');

import emailController from './email-controller';
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req,res) => {
    try{
        const {name, email} = req.body;

        const user = await User.create(req.body);

        emailController.welcomeEmail(name, email);

        return res.send({ user });

    } catch (err) {
        return res.status(400).send({ error: 'Registratiton failed' });
    }
});

module.exports = (app) => app.use('/auth', router);