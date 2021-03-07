const express = require('express');
const routes = express.Router();
const bcrypt = require('bcryptjs');
let User = require('./schema/User');
let { Routes } = require("./constants");

routes.route(Routes.signup).post(function(req, res) {
    let signup = new User(req.body);
    signup.save()
        .then(req => {
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(400);
        });
});

routes.route(Routes.login).post(function(req, res) {
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

routes.route(Routes.validate)
    .post(function(req, res) {
        const { userName } = req.body;
        User.findOne({ userName: userName })
            .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
    });

routes.route(Routes.data).get(function(req, res) {
    User.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
});

module.exports = routes;