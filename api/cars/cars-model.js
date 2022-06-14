const database = require('../../data/db-config');

const getAll = () => {
  return database('cars');
};

const getById = () => {
  // DO YOUR MAGIC
};

const create = () => {
  // DO YOUR MAGIC
};

module.exports = { getAll, getById, create };