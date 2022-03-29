import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user'
import {Observable} from 'rxjs/';
@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

 constructor(private http: HttpClient) {
    }
    executeHelloWorldService() {
        return this.http.get('http://localhost:8080/api/v1/greeting');
    }


getUser() :Observable<User[]>{
  return this.http.get<User[]>('http://localhost:8080/api/v1/getUsers');
  }



}
