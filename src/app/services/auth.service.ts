import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserLoginDto } from '../models/dto/userLoginDto';
import { environment } from 'src/environments/environment';

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
          this.saveToken(res.token, res.expiresIn);
        }
      }
    ))
  }

  login(user: UserLoginDto): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${environment.API_URL}/api/auth`,
    user).pipe(tap(
      (res: JwtResponse) => {
        if (res) {
          this.saveToken(res.token, res.expiresIn);
        }
      }
    ))
  }

  logout() {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN") ?? '';
    }
    return this.token;
  }
}
