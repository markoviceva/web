import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {User} from '../../../../models/user';

export interface Object{
  success: boolean;
  message: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:8080";
  

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user:User): Observable<Object>{
    return this.http.post<Object>(this.domain + '/authentication/register', user, httpOptions)
    .pipe(
      map(res => res)
    );
  }

 /* checkEmail(email: String): Observable<Object>{
    return this.http.get<Object>(this.domain +'/authentication/checkEmail')
    .pipe(
      map(res => res)
    );
  }

  checkUsername(username: String): Observable<Object>{
    return this.http.get<Object>(this.domain +'/authentication/checkUsername')
    .pipe(
      map(res => res)
    );
  }*/
}
