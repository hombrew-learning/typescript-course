import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function validation(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validation, keys, target, key);
  };
}
