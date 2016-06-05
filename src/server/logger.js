import log from 'winston';
import { Config } from '~/config';

// set log as cli mode
log.cli();

function logServerConfig(type = null) {
  const port = type === 'API' ? Config.api.port : Config.web.port;
  const host = type === 'API' ? Config.api.host : Config.web.host;

  const url = ['http://', host, ':', port].join('');

  if (type === 'API') {
    log.info('------------------------------------------');
    log.info('API Listening at:', url);
    log.info('------------------------------------------');
    log.info('Database Host:', Config.db.host);
    log.info('Database Name:', Config.db.name);
    log.info('Database Port:', Config.db.port);
    log.info('------------------------------------------');
  }

  if (type !== 'API') {
    log.info('WEB Listening at:', url);
    log.info('Environment:', Config.env);
  }
}

export { log, logServerConfig };
