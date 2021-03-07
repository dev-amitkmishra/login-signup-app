const express = require('express');
const routes = express.Router();
const bcrypt = require('bcryptjs');
let User = require('./schema/User');
let { RouteNames } = require("./constants");
// Registration route
routes.route(RouteNames.register).post(function(req, res) {
    let register = new User(req.body);
    register.save()
        .then(reg => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.status(400).send("Inerstion Error");
        });
});

// Login Router
routes.route(RouteNames.login).post(function(req, res) {
    const { userName, password } = req.body;
    User.findOne({ userName: userName })
        .then(user => {
            if (!user) res.sendStatus(204);
            else {
                bcrypt.compare(password, user.password)
                    .then(isPasswordMatch => isPasswordMatch ? res.status(200).send(user) : res.sendStatus(204))
            }
        });
});

// Username validation Router
routes.route(RouteNames.validate)
    .post(function(req, res) {
        const { userName } = req.body;
        User.findOne({ userName: userName })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    });

// Get data
routes.route(RouteNames.data).get(function(req, res) {
    User.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = routes;