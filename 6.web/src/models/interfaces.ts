import { AxiosPromise } from 'axios';

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(update: T): void;
}

export interface ModelSync<T> {
  fetch(id: number): AxiosPromise;
  fetchAll(): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface ModelEvents {
  on(eventName: string, callback: () => void): void;
  emit(eventName: string): void;
}

export interface HasId {
  id?: number;
}
