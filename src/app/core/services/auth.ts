
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private url = 'http://localhost:3000/api/auth';
  private http = inject(HttpClient);

  login(credentials: { email: string; password: string }): any {
    return this.http.post(`${this.url}/login`, credentials);
  }
}
