import { HttpResponse } from './HttpResponse';

export interface Middleware<T = any, U = any> {
  handler: (httpRequest: T, httpBody?: U) => Promise<HttpResponse | false>
}
