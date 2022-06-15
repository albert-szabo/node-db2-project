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

router.post('/', (request, response, next) => {

});

module.exports = router;