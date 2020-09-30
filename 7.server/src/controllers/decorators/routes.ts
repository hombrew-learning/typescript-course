import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeDecotatorFactoryCreator(method: string) {
  return function <T>(path: string) {
    return function (target: T, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeDecotatorFactoryCreator(Methods.get);
export const post = routeDecotatorFactoryCreator(Methods.post);
export const put = routeDecotatorFactoryCreator(Methods.put);
export const patch = routeDecotatorFactoryCreator(Methods.patch);
export const del = routeDecotatorFactoryCreator(Methods.del);
