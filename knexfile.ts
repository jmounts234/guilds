import 'dotenv/config';
import { Knex } from 'knex';
import { knexSnakeCaseMappers } from 'objection';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: 'localhost',
      database: 'GuildsDb',
      user: 'guildsCon',
      password: 'GuildiesOnly',
    },
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      directory: './db//migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      port: 5432,
      host: 'localhost',
      database: 'GuildsDb',
      user: 'guildsCon',
      password: 'GuildiesOnly',
    },
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      directory: './db//migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  ...knexSnakeCaseMappers(),
} as Knex.Config;
