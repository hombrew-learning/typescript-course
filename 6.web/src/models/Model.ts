import { AxiosResponse } from 'axios';
import { ModelAttributes, ModelEvents, ModelSync, HasId } from './interfaces';

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: ModelEvents,
    private sync: ModelSync<T>
  ) {}

  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.emit('change');
  }

  on = this.events.on;

  emit = this.events.emit;

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((): void => {
        this.emit('save');
      })
      .catch(() => {
        this.emit('error');
      });
  }
}
