import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  fullName: string;
  email: string;
  password: string;
  mobile: string;
  dob: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // registerUser(user: User): Observable<User> {
  //   return this.http.post<User>(`${this.apiUrl}/register`, user);
  // }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  registerUser(user: User) {
  return this.http.post<User>('http://localhost:3000/api/register', user);
}
}
