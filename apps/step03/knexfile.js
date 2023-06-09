// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 5432,
      database: "dev_db",
      user: "postgres",
      password: "pg_password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/dev/v1",
    },
    seeds: {
      directory: "./migrations/dev/v1/seeds",
    },
  },

  test: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 5433,
      database: "test_db",
      user: "postgres",
      password: "pg_password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations/dev/v1",
    },
    seeds: {
      directory: "./migrations/test/v1/seeds",
    },
  },
};
