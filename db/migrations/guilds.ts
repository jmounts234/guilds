import { Knex } from 'knex';

const tableName = 'Guilds';

exports.up = function (knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.increments();
    t.text('name');
    t.text('owner');
    t.text('address');
    t.text('email');
    t.datetime('created_at');
  });
};

exports.down = function (knex: Knex) {
  return knex.schema.dropTable(tableName);
};
