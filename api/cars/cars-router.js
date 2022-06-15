const express = require('express');

const Cars = require('./cars-model');

const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require('./cars-middleware');

const router = express.Router();

router.get('/', async (request, response, next) => {
    try {
        const cars = await Cars.getAll();
        response.json(cars);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', checkCarId, (request, response, next) => {
    response.json(request.car);
});

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (request, response, next) => {
    try {
        const newCar = await Cars.create(request.body);
        response.status(201).json(newCar);
    } catch (error) {
        next(error);
    }
});

module.exports = router;