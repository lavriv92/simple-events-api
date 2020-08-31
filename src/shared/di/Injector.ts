import { Type } from '../../interfaces/di';

const Injector = new class {
  resolve<T>(target: Type<any>): T {
    const tokens = Reflect.getMetadata('design:paramtypes', target) || [];

    const dependencies = tokens.map(token => {
      return Injector.resolve<any>(token);
    });

    return new target(...dependencies);
  }
};

export default Injector;