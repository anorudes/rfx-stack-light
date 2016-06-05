import { Config } from '~/config';
import { logServerConfig } from './logger';

class Start {

  constructor(app, type = null) {
    this.app = app;
    this.type = type;
  }

  init() {
    this.app
      .listen(
        this.type === 'API' ? Config.api.port : Config.web.port,
        this.type === 'API' ? Config.api.host : Config.web.host,
      )
      .on('listening', () => logServerConfig(this.type));
  }
}

export function startApiServer() {
  new Start(this, 'API').init();
}

export function startWebServer() {
  new Start(this).init();
}
