import { AxiosInstance, AxiosResponse } from 'axios';
import { JSONData } from './json-types';

const axios = require('axios').default;

type HttpResponseType = {
  [name: string]: JSONData;
};

export default class ApiAdapter {
  api: AxiosInstance;

  constructor(
    url = process.env.API_URL as string,
    headers?: { [name: string]: string },
  ) {
    this.api = axios.create({ baseURL: url, headers: headers || {} });
  }

  url(url: string): void {
    this.api.defaults.baseURL = url;
  }

  setJwt(token: string): void {
    this.api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async get(
    uri: string,
    headers?: { [name: string]: string },
  ): Promise<AxiosResponse<HttpResponseType>> {
    try {
      return await this.api.get<HttpResponseType>(uri, headers);
    } catch (error) {
      return error;
    }
  }

  async post(
    uri: string,
    data: HttpResponseType,
    headers?: { [name: string]: string },
  ): Promise<AxiosResponse<HttpResponseType>> {
    try {
      return await this.api.post<HttpResponseType>(uri, data, headers);
    } catch (error) {
      return error;
    }
  }

  async put(
    uri: string,
    data: HttpResponseType,
    headers?: { [name: string]: string },
  ): Promise<AxiosResponse<HttpResponseType>> {
    try {
      return await this.api.put<HttpResponseType>(uri, data, headers);
    } catch (error) {
      return error;
    }
  }

  async delete(
    uri: string,
    data: HttpResponseType,
    headers?: { [name: string]: string },
  ): Promise<HttpResponseType> {
    try {
      return await this.api.delete<HttpResponseType, HttpResponseType>(
        uri,
        headers,
      );
    } catch (error) {
      return error;
    }
  }
}
