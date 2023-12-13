import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient, private route:Router) {}

  private posts:string = 'http://localhost:3000/posts';
  private comments:string = 'http://localhost:3000/comments';

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.posts);
  }

  getComments(): Observable<any[]> {
    return this.http.get<any[]>(this.comments);
  }

}
