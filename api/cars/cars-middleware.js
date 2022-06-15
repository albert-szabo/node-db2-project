const Cars = require('./cars-model');

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
}

const checkCarPayload = (request, response, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (request, response, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (request, response, next) => {
  // DO YOUR MAGIC
}

module.exports = { 
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};