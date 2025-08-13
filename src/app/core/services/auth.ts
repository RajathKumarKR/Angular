import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private url = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }  
  
  login(credentials: { email: string, password: string }) {
    return this.http.post(`${this.url}/login`, credentials);
  }
}
