import { Observable } from "rxjs";
import { CustomResponse } from "./custom-response";

export interface Crud<T> {
  create(item:T): Observable<CustomResponse<T>>,
  list(item:T): Observable<CustomResponse<T[]>>,
  get(id:number): Observable<CustomResponse<T>>,
  update(item:T): Observable<CustomResponse<T>>,
  delete(item:T): Observable<CustomResponse<T>>,

}
