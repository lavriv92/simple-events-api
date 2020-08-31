//TODO: Remove conde duplication

export const Post = (path: string = "") => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  if(!target.actions) {
    target.actions = new Map();
  }

  if(!target.actions.has('POST')) {
    target.actions.set('POST', []);
  }

  target.actions.get('POST').push({
    path,
    name: propertyKey
  });
}

export const Get = (path: string = "") => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  if(!target.actions) {
    target.actions = new Map();
  }

  if(!target.actions.has('GET')) {
    target.actions.set('GET', []);
  }

  target.actions.get('GET').push({
    path,
    name: propertyKey
  });
}