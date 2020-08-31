const Controller = (path: string) => (controller) => {
  controller.path = path;
  return controller;
};

export default Controller