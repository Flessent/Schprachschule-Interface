import { Injectable } from '@angular/core';
import {HttpHandler,HttpHeaders, HttpEvent, HttpRequest, HttpResponse,HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../login/login.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../Appstore/app.state';
import {getUsername} from '../../ngrx/login/login.selector';
import {take,exhaustMap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {

         if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
         //let pwd:string =sessionStorage.getItem('basicauth') as string;
            httpRequest = httpRequest.clone({
             setHeaders: {
               Authorization:sessionStorage.getItem('basicauth') as string
             }

           })
         }

         return next.handle(httpRequest);


      }















}
