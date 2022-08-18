import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserAction } from './user-action';
import { Crud } from './crud';
import { CustomResponse } from './custom-response';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserActionService implements Crud<UserAction> {

  private resourceUrl = environment.apiUrl + "/UserAction"
  constructor(private http: HttpClient) { }

  create(item: UserAction): Observable<CustomResponse<UserAction>> {
    // return this.http.post<CustomResponse<UserAction>>(this.resourceUrl + '/UserAction.php', data);
    return this.http.request<CustomResponse<UserAction>>(
      'post',
      this.resourceUrl + '/UserAction.php',
      {
        body: `name=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.description)}&idAgency=1`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      });
  }
  list(): Observable<CustomResponse<UserAction[]>> {
    return this.http.get<CustomResponse<UserAction[]>>(this.resourceUrl + '/List.php');
  }
  get(id: number): Observable<CustomResponse<UserAction>> {
    const params = new HttpParams();
		params.append("id", id.toString());
    return this.http.get<CustomResponse<UserAction>>(this.resourceUrl + '/UserAction.php', { params: params });
  }
  update(item: UserAction): Observable<CustomResponse<UserAction>> {
    // return this.http.put<CustomResponse<UserAction>>(this.resourceUrl + '/UserAction.php', data);
    return this.http.request<CustomResponse<UserAction>>(
      'put',
      this.resourceUrl + '/UserAction.php',
      {
        body: `id=${item.idUserAction}&name=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.description)}&idAgency=1`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      });
  }
  delete(item: UserAction): Observable<CustomResponse<UserAction>> {
    return this.http.request<CustomResponse<UserAction>>(
      'delete',
      this.resourceUrl + '/UserAction.php',
      {
        body: `id=${item.idUserAction}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      });
  }

}
