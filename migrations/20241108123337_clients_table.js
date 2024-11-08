export const up = (knex) =>
  knex.schema.createTable('clients', (table) => {
    table.increments('id').primary();
    table.bigInteger('telegram_id').unique().notNullable();
    table.string('name').notNullable();
    table.string('phone').notNullable();
    table.boolean('is_notify').defaultTo(true);
    table.timestamps(true, true);
  });

export const down = (knex) => knex.schema.dropTable('users');
