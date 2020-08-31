import * as Hapi from '@hapi/hapi';
import mongoose from 'mongoose';

import config from './config';
import Application from './application';

import UsersController from "./controllers/users.controller";
import EventsController from './controllers/events.controller';

export async function bootstrap() {
  const server = new Hapi.Server({
    host: config.server.host,
    port: config.server.port
  });

  mongoose.connect(config.database.uri, config.database.options);
  
  const app = new Application(server);

  app.setupConfig({
    controllers: [
      UsersController,
      EventsController
    ]
  });

  await app.start();
}