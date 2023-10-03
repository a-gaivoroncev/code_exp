const dialect = 'postgres';

{
  module.exports = {
    development: {
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      dialect,
    },
    test: {
      username: 'root',
      password: 'root',
      database: 'database_test',
      host: '127.0.0.1',
      dialect,
    },
    production: {
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      host: process.env.POSTGRES_HOST,
      dialect,
    },
  };
}

/**
 * POSTGRES_HOST=code_exp_db
POSTGRES_PORT=5432
POSTGRES_USER=root
POSTGRES_PASSWORD=root
POSTGRES_DB=code_exp
PGADMIN_DEFAULT_PASSWORD=root
PGADMIN_DEFAULT_EMAIL=admin@admin.com

 */
