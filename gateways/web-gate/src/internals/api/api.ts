import { AxiosInstance, AxiosResponse } from 'axios';
import { JSONData } from './json-types';

const axios = require('axios').default;

type HttpResponseType = {
  get: JSONData;
  update: JSONData;
  delete: JSONData;
  create: JSONData;
};

class ApiAdapter<T extends HttpResponseType> {
  url: string;
  api: AxiosInstance;

  constructor(url: string, headers?: { [name: string]: string }) {
    this.url = url;
    this.api = axios.create({ baseURL: url, headers: headers || {} });
  }

  setJwt(token: string): void {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async get(
    uri: string,
    headers?: { [name: string]: string },
  ): Promise<AxiosResponse<T['get']>> {
    try {
      return await this.api.get<T['get']>(uri, headers);
    } catch (error) {
      return error;
    }
  }

  async post(
    uri: string,
    data: T['create'],
    headers?: { [name: string]: string },
  ): Promise<AxiosResponse<T['create']>> {
    try {
      return await this.api.post<T['create']>(uri, data, headers);
    } catch (error) {
      return error;
    }
  }

  async put(
    uri: string,
    data: T['update'],
    headers?: { [name: string]: string },
  ): Promise<AxiosResponse<T['update']>> {
    try {
      return await this.api.put<T['update']>(uri, data, headers);
    } catch (error) {
      return error;
    }
  }

  async delete(
    uri: string,
    data: T['delete'],
    headers?: { [name: string]: string },
  ): Promise<T['delete']> {
    try {
      return await this.api.delete<T['delete'], T['delete']>(uri, headers);
    } catch (error) {
      return error;
    }
  }
}

let api: ApiAdapter<any>;
export default function getInstance<HRT extends HttpResponseType>(
  url = process.env.API_URL as string,
) {
  if (!api || api.url !== url) api = new ApiAdapter<HRT>(url);
  return api;
}
