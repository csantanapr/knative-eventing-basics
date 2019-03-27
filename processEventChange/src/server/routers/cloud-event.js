const express = require('express');

module.exports = function (app) {
    const router = express.Router();
    app.use(express.json());

    router.post('/', function (req, res, next) {
        console.log(req.headers)
        console.log(req.body);
        //res.set(req.headers)
        /*
        res.set('ce-specversion', req.headers['ce-specversion'])
        res.set('ce-id', req.headers['ce-id'])
        res.set('ce-time', req.headers['ce-time'])
        res.set('ce-source', req.headers['ce-source'])
        res.set('ce-type', req.headers['ce-type'])
        */
        res.set('ce-specversion', '0.2')
        res.set('ce-id', 'ABC-123')
        res.set('ce-type', 'com.example.test')
        res.send(req.body)
    });

    app.use(router);
}