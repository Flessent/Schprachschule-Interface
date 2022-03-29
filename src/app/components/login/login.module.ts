import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule,StoreRootModule} from '@ngrx/store';
import {LoginReducer} from '../../ngrx/login/login.reducer';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffect} from '../../ngrx/login/login.effect';
import {HttpClientModule} from  '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {LoginService} from '../../services/login/login.service';
import { HttpInterceptorService } from '../../services/interceptor/http-interceptor.service';
import {  HttpClient , HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginGuard} from '../../ngrx/login/login.guard';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  // FormBuilder,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forFeature(),
    //FormControl
       EffectsModule.forRoot([LoginEffect]),
     //  StoreModule.forRoot(LoginReducer),

  ],
    providers: [LoginService,
            { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
            LoginGuard

    ],


})
export class LoginModule { }
