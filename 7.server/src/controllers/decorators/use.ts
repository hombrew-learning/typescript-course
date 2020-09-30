import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';

export function use<T>(middleware: RequestHandler) {
  return function (target: T, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [middleware, ...middlewares],
      target,
      key
    );
  };
}
