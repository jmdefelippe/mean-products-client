import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLoginDto } from '../models/dto/userLoginDto';
import { environment } from 'src/environments/environment';
import { saveToken } from 'src/app/utils/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient) {
    this.token = '';
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
        }
      }
    ))
  }
}
