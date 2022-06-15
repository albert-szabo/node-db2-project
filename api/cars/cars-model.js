const database = require('../../data/db-config');

const getAll = () => {
  return database('cars');
};

const getById = (id) => {
  return database('cars').where('id', id).first();
};

const getByVin = (vin) => {
  return database('cars').where('vin', vin).first();
};

const create = async (newCar) => {
  const [id] = await database('cars').insert(newCar);
  return getById(id);
};

module.exports = { getAll, getById, getByVin, create };