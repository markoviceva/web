import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../../../../models/blog';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Object {
  success: boolean;
  message: string;
  token;
  user;
  blogs;
  blog;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();
    this.options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.authToken
      })
    }
    
  }

  newBlog(blog: Blog): Observable<Object>{
    this.createAuthenticationHeaders();

    return <Observable<Object>> <unknown> this.http.post(this.domain + 'blogs/newBlogPost', blog, this.options)
      .pipe(
        map(res => res)
      );

  }

  getAllBlogs(): Observable<Object> {
    this.createAuthenticationHeaders();
    return <Observable<Object>> <unknown> this.http.get(this.domain + 'blogs/allBlogs', this.options)
      .pipe(
        map(res => res)
      );
  }

  getSingleBlog(id){
    this.createAuthenticationHeaders();
    return <Observable<Object>> <unknown> this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options)
      .pipe(
        map(res => res)
      );
  }

  editBlog(blog: Blog): Observable<Object>{
    this.createAuthenticationHeaders();
    return <Observable<Object>> <unknown> this.http.put(this.domain + 'blogs/updateBlog', blog, this.options)
      .pipe(
        map(res => res)
      );
  }

  deleteBlog(id) {
    this.createAuthenticationHeaders();
    return <Observable<Object>> <unknown> this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options)
      .pipe(
        map(res => res)
      );
  }
}
