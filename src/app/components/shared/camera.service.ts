import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Camera } from './camera';
import { Crud } from './crud';
import { environment } from '../../environments/environment';
import { CustomResponse } from './custom-response';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CameraService implements Crud<Camera> {

  private resourceUrl = environment.apiUrl + "/Camera"
  constructor(private http: HttpClient) { }

  create(item: Camera): Observable<CustomResponse<Camera>> {
    // return this.http.post<CustomResponse<Camera>>(this.resourceUrl + '/Camera.php', data);
    let data = `name=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.description)}&idAgency=1&idCaptureSource=${item.idCaptureSource}&archived=${encodeURIComponent(item.archived)}`;
    if (item.lat) {
      data += `lat=${encodeURIComponent(item.lat)}`;
    }
    if (item.lon) {
      data += `lon=${encodeURIComponent(item.lon)}`;
    }
    return this.http.request<CustomResponse<Camera>>(
      'post',
      this.resourceUrl + '/Camera.php',
      {
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      });
  }
  list(): Observable<CustomResponse<Camera[]>> {
    return this.http.get<CustomResponse<Camera[]>>(this.resourceUrl + '/List.php');
  }
  get(id: number): Observable<CustomResponse<Camera>> {
    const params = new HttpParams();
		params.append("id", id.toString());
    return this.http.get<CustomResponse<Camera>>(this.resourceUrl + '/Camera.php', { params: params });
  }
  update(item: Camera): Observable<CustomResponse<Camera>> {
    // return this.http.put<CustomResponse<Camera>>(this.resourceUrl + '/Camera.php', data);
    let data = `id=${item.idCamera}&name=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.description)}&idAgency=1&idCaptureSource=${item.idCaptureSource}&archived=${encodeURIComponent(item.archived)}`;
    if (item.lat) {
      data += `lat=${encodeURIComponent(item.lat)}`;
    }
    if (item.lon) {
      data += `lon=${encodeURIComponent(item.lon)}`;
    }
    return this.http.request<CustomResponse<Camera>>(
      'put',
      this.resourceUrl + '/Camera.php',
      {
        body: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      });
  }
  delete(item: Camera): Observable<CustomResponse<Camera>> {
    return this.http.request<CustomResponse<Camera>>(
      'delete',
      this.resourceUrl + '/Camera.php',
      {
        body: `id=${item.idCamera}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      });
  }
}
