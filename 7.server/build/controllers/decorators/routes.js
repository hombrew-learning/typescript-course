"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routeDecotatorFactoryCreator(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeDecotatorFactoryCreator(Methods_1.Methods.get);
exports.post = routeDecotatorFactoryCreator(Methods_1.Methods.post);
exports.put = routeDecotatorFactoryCreator(Methods_1.Methods.put);
exports.patch = routeDecotatorFactoryCreator(Methods_1.Methods.patch);
exports.del = routeDecotatorFactoryCreator(Methods_1.Methods.del);
