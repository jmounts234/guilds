//example: https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556
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
};
