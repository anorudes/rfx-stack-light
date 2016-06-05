import feathers from 'feathers';
import compression from 'compression';

import { serveStaticMiddleware } from './middleware/serveStatic';
import { hotMiddleware } from './middleware/hot';
import { isoMiddleware } from './middleware/iso';
import { startWebServer as start } from './start';

const app = feathers();

app
  .use(compression())
  .configure(serveStaticMiddleware)
  .use(hotMiddleware)
  .use(isoMiddleware)
  .configure(start);
