import { Collection } from "../models/Collection";

export abstract class ViewCollection {
  constructor(private parent: Element, private collection: Collection) {}
}