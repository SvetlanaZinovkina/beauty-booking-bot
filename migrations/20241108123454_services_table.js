export const up = (knex) =>
  knex.schema.createTable('clients', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.number('price').notNullable();
    table.number('duration').notNullable();
    table.timestamps(true, true);
  });

export const down = (knex) => knex.schema.dropTable('users');
