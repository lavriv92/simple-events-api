import { GenericClassDecorator, Type } from "../../interfaces/di";

const Service = (): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {};
};

export default Service;