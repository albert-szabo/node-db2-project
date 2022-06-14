exports.up = function (knex) {
  return knex.schema.createTable('cars', table => {
    table.increments('id');
    table.string('vin', 17).notNullable().unique();
    table.string('make', 32).notNullable();
    table.string('model', 32).notNullable();
    table.integer('mileage').unsigned().notNullable();
    table.string('title', 32);
    table.string('transmission', 32);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
