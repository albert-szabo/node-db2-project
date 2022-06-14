const express = require("express")

const carsRouter = require('./cars/cars-router');

const server = express()

server.use(express.json());

server.use('/api/cars', carsRouter);

server.use('*', (request, response, next) => {
    next({ status: 404, message: 'That URL was not found.' });
});

server.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        message: error.message || 'An internal server error occurred.'
    });
});

module.exports = server
