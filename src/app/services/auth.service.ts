import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserLoginDto } from '../models/dto/userLoginDto';
import { environment } from 'src/environments/environment';
import { saveToken } from 'src/app/utils/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  loggedIn = false;
  url = `${environment.API_URL}/api/users/`;

  constructor(private httpClient: HttpClient) {
    this.token = '';
  }

  private getOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      })
    };
  }

  createUser(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${environment.API_URL}/api/users`,
    user).pipe(tap(
      (res: JwtResponse) => {
        if (res) {
          saveToken(res.token, res.expiresIn);
        }
      }
    ))
  }

  login(user: UserLoginDto): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${environment.API_URL}/api/auth`,
    user).pipe(tap(
      (res: JwtResponse) => {
        if (res) {
          saveToken(res.token, res.expiresIn);
          this.loggedIn = true;
          console.log(this.loggedIn)
        }
      }
    ))
  }

  getAuthenticatedUser(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}/api/auth`, this.getOptions());
  }
}
