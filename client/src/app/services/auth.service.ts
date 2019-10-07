import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user';

export interface Object {
  success: boolean;
  message: string;
  token;
  user;
}
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:8080/";
  authToken;
  user;
  options;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authToken
    })
  };


  constructor(
    private http: HttpClient
  ) { }
/*
  createAuthenticationHeaders() {
    this.loadToken();
    this.options = this.httpOptions;
  }
  
  loadToken(){
    this.authToken = localStorage.getItem('token');
  }
*/
  registerUser(user: User): Observable<Object> {
    return this.http.post<Object>(this.domain + 'authentication/register', user)
      .pipe(
        map(res => res)
      );
  }

  /* checkEmail(email: String): Observable<Object>{
     return this.http.get<Object>(this.domain +'authentication/checkEmail')
     .pipe(
       map(res => res)
     );
   }
 
   checkUsername(username: String): Observable<Object>{
     return this.http.get<Object>(this.domain +'authentication/checkUsername')
     .pipe(
       map(res => res)
     );
   }*/

  login(user: User): Observable<Object> {
    return this.http.post<Object>(this.domain + 'authentication/login', user)
      .pipe(
        map(res => res)
      );
  }

  storeUserData(token, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
/*
  getProfile() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'authentication/ptofile', this.options)
      .pipe(
        map(res => res)
      );

  }*/
}
