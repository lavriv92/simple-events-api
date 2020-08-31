import * as path from 'path';
import * as Hapi from '@hapi/hapi';

import Injector from "./shared/di/Injector";
import { IAppConfig } from "./interfaces/application";

export default class Application {
  private config: IAppConfig

  constructor(private readonly server: Hapi.Server) {
  }

  public setupConfig(config) {
    this.config = config;
  }

  public setupRoutes() {
    //TODO: Optimize this code

    this.config.controllers.forEach(controller => {
      const controllerInstance = Injector.resolve<typeof controller>(controller);
      const controllerActions = controllerInstance.actions as Map<string, Array<any>>;

      for(let [method, actions] of controllerActions.entries()) {
        actions.forEach((action) => {
          const actionPath = path.join(controller.path, action.path);

          console.log(method, actionPath);

          this.server.route({
            path: actionPath,
            method,
            handler: async (request) => {
              const result = await controllerInstance[action.name].bind(controllerInstance)(request);

              return result;
            }
          });
        });
      }
    });
  }

  public start = async() => {
    this.setupRoutes();
    await this.server.start();
    console.log('Server start on %s', this.server.info.uri);
  }
}