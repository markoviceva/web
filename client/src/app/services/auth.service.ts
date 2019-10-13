import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user';
import {JwtHelperService} from '@auth0/angular-jwt';

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
  jwtHelperService;
  

  constructor(
    private http: HttpClient
  ) {
    this.jwtHelperService = new JwtHelperService();
   }

  createAuthenticationHeaders() {
    this.loadToken();
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authToken
      })
    }
    
  }
  
  loadToken(){
    this.authToken = localStorage.getItem('token');
  }

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

  logout() {
    this.authToken = null; 
    this.user = null; 
    localStorage.clear(); 
  }

  storeUserData(token, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile(): Observable<Object> {
    this.createAuthenticationHeaders();
    return <Observable<Object>> <unknown>this.http.get(this.domain + 'authentication/profile', this.options)
      .pipe(map(res => res));

  }

  tokenNotExpired() {
    const token: string = localStorage.getItem('token');

    return token != null && !this.jwtHelperService.isTokenExpired(token);
  }

  loggedIn() {
    return this.tokenNotExpired();
  }

  getPublicProfile(username){
    this.createAuthenticationHeaders();
    return <Observable<Object>> <unknown>this.http.get(this.domain + 'authentication/publicProfile/' + username, this.options)
      .pipe(map(res => res));
  }

  
}
