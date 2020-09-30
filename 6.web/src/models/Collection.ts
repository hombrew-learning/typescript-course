import { Eventing } from './Eventing';
import { AxiosResponse } from 'axios';
import { ModelSync } from './interfaces';
import { Model } from './Model';

export class Collection<K> {
  private models: Model<K>[] = [];
  private events: Eventing = new Eventing();

  constructor(
    private sync: ModelSync<K>,
    private deserialize: (json: K) => Model<K>
  ) {}

  get on() {
    return this.events.on;
  }

  get emit() {
    return this.events.emit;
  }

  fetchAll(): void {
    this.sync.fetchAll().then((response: AxiosResponse): void => {
      response.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.emit('change');
    });
  }
}
