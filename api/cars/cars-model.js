const database = require('../../data/db-config');

const getAll = () => {
  return database('cars');
};

const getById = (id) => {
  return database('cars').where('id', id).first();
};

const create = () => {
  // DO YOUR MAGIC
};

module.exports = { getAll, getById, create };