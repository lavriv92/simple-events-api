import * as path from 'path';
import * as fs from 'fs';

import config from '.';

export const resolveRoutes = async() => {
  const controllersPath = path.resolve(config.app.rootPath, 'controllers');

  const controllers = fs.readdirSync(controllersPath).filter(c => !c.endsWith('.map'));

  controllers.forEach(async (controllerName: string) => {
    const controllerPath = path.join(controllersPath, controllerName);
    const controllerImport = require(controllerPath);

    const Controller = controllerImport.default;


    console.log('controller', Controller);
  });
};