import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule, AbstractControl} from "@angular/forms";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router ,Routes, ActivatedRoute} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {Store} from '@ngrx/store';
import {loginActionSuccess,loginActionStart,loginActionError} from '../../ngrx/login/login.actions';
import {Users} from '../../model/user';
import {AppState} from '../../Appstore/app.state';
import {setLoadingSpinner} from '../../Appstore/shared/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent  implements OnInit{


 username: string='';
  password : string='';
  errorMessage = 'Invalid Credentials';
  successMessage: string='';
  invalidLogin = false;
  loginSuccess = false;
userFormGroup!: FormGroup;
submitted:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService, private formbuilder: FormBuilder, private store: Store<AppState>) {   }

ngOnInit()  {
/*
    this.store.dispatch(GetAllSprachenActions());
this.store.dispatch(GetAllNiveausActions() );
this.store.dispatch(GetAllKurseActions());
this.store.dispatch(GetAllRaumeActions() );
*/

 this.userFormGroup =this.formbuilder.group({
username : new FormControl("flexe@merkel", [Validators.required, Validators.minLength(7)]),
password : new FormControl("merkel007",[Validators.required,Validators.minLength(8)] )

 }) }

 get form(): { [key: string]: AbstractControl } {
    return this.userFormGroup.controls;
  }


/*login(){
this.store.dispatch(loginActionSuccess({username: this.username,password: this.password}));
} */

  handleLogin() {
  const username = this.userFormGroup.value.username;
     const password = this.userFormGroup.value.password;
         this.store.dispatch(setLoadingSpinner({ status: true }));

     this.store.dispatch(loginActionStart({ username, password }));

  }








}
