import { ModelEvents } from './interfaces';

type Callback = () => void;

export class Eventing implements ModelEvents {
  private events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    if (!Array.isArray(this.events[eventName])) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  };

  emit = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => callback());
  };
}
