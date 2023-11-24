import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create();
  }

  async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.http.get(url, config);
  }

  async post<T>(
    url: string,
    data: any,
    config: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T>> {
    return this.http.post(url, data, config);
  }

  async put<T>(url: string, data: any, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.http.put(url, data, config);
  }

  async delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<T>> {
    return this.http.delete(url, config);
  }
}

export default HttpService;
