const Cars = require('./cars-model');

const vinValidator = require('vin-validator');

const checkCarId = async (request, response, next) => {
  try {
    const car = await Cars.getById(request.params.id);
    if (!car) {
      next({ status: 404, message: `car with id ${request.params.id} is not found` });
    } else {
      request.car = car;
      next();
    }
  } catch (error) {
    next(error);
  }
};

const checkCarPayload = (request, response, next) => {
  const { vin, make, model, mileage } = request.body;
  if (!vin) {
    next({ status: 400, message: 'vin is missing' });
  } else if (!make) {
    next({ status: 400, message: 'make is missing' });
  } else if (!model) {
    next({ status: 400, message: 'model is missing' });
  } else if (!mileage) {
    next({ status: 400, message: 'mileage is missing' });
  } else {
    next();
  }
};

const checkVinNumberValid = (request, response, next) => {
  const { vin } = request.body;
  const isValidVin = vinValidator.validate(vin);
  if (!isValidVin) {
    next({ status: 400, message: `vin ${vin} is invalid` });
  } else {
    next();
  }
};

const checkVinNumberUnique = async (request, response, next) => {
  try {
    const { vin } = request.body;
    const existingCar = await Cars.getByVin(vin);
    if (existingCar) {
      next({ status: 400, message: `vin ${vin} already exists` });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { 
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};