const express = require('express');

const Cars = require('./cars-model');

const router = express.Router();

router.get('/', async (request, response, next) => {
    try {
        const cars = await Cars.getAll();
        response.json(cars);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', (request, response, next) => {

});

router.post('/', (request, response, next) => {

});

module.exports = router;