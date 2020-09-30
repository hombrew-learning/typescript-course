import axios, { AxiosPromise } from 'axios';
import { ModelSync, HasId } from './interfaces';

export class ApiSync<T extends HasId> implements ModelSync<T> {
  constructor(private rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  fetchAll(): AxiosPromise {
    return axios.get(this.rootUrl);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    let url = this.rootUrl;
    let method = 'post';

    if (id) {
      method = 'put';
      url += `/${id}`;
    }

    return axios[method](url, data);
  }
}
