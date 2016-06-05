import dotenv from 'dotenv';
import getenv from 'getenv';

// load .env file
dotenv.config();

const Env = getenv.multi({
  env: 'NODE_ENV',
  browsersync: {
    host: 'BROWSERSYNC_HOST',
    port: 'BROWSERSYNC_PORT',
  },
  web: {
    host: 'WEB_HOST',
    port: 'WEB_PORT',
  },
  api: {
    host: 'API_HOST',
    port: 'API_PORT',
  },
});

export { Env };
