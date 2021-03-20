module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DB_HOST', 'localhost'),
        port: env.int('DB_PORT', 5432),
        database: env('DB_NAME', 'db_name'),
        username: env('DB_USERNAME', 'db_user'),
        password: env('DB_PASSWORD', 'password'),
        schema: 'public',
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
