import { HttpResponse } from './HttpResponse';
export interface Controller<T = any> {
    handle: (request: T, file?: any) => Promise<HttpResponse>
}