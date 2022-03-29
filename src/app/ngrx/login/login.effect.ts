import {createEffect,ofType, Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {map,exhaustMap,tap,catchError} from 'rxjs/operators';
import {Users} from '../../model/user';
import {Router} from '@angular/router';
import{Store} from '@ngrx/store';
import {AppState} from '../../Appstore/app.state'
import {Observable,of} from 'rxjs';
import {loginActionSuccess,loginActionStart,loginActionError,logoutAction,gemeinsameInfosVerbundenePersonAction,gemeinsameInfosVerbundenePersonActionSuccess}
 from './login.actions';
import {
  setLoadingSpinner,
  setErrorMessage,
} from '../../Appstore/shared/shared.actions';
@Injectable()

export class LoginEffect{
constructor(private effectActions$:Actions,private loginService:LoginService , private store : Store<AppState>, private router:Router){}

/*
// ces deux versions fonctionnent egalement
login$=createEffect( ()=> {
return this.effectActions$.pipe(
ofType(loginActionStart),
exhaustMap( (action) =>  {// on recupere l'action de type Observable  grace au pipe
return this.loginService.authenticationService(action.username,action.password).pipe(// on combine cette action Observable ä l'Observable retourne par authenticationService
map( (user) =>   { return loginActionSuccess({user}   ) ;  } ),
         // catchError((error:string) =>  loginActionError({error}))
)}) )});
  login$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(loginActionStart),
      exhaustMap((action) => {
        return this.loginService.authenticationService(action.username, action.password).pipe(// dans l'action loginActionStart, il ya le username et le password
          map((data) => {
//            this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.loginService.formatUser(data);
            this.loginService.registerSuccessfulLogin(data.username,data.password);
            return loginActionSuccess({ user});
          }),

        );
      })
    );
  });*/
   login$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(loginActionStart),
        exhaustMap((action) => {
          return this.loginService.authenticationService(action.username, action.password).pipe(
            map((data) => {
              this.store.dispatch(setLoadingSpinner({ status: true }));
              this.store.dispatch(setErrorMessage({ message: '' }));
              const user = this.loginService.formatUser(data);
              return loginActionSuccess({ user:user, redirect: true });
            }),
            catchError((errResp) => {
              this.store.dispatch(setLoadingSpinner({ status: false }));
              const errorMessage = this.loginService.getErrorMessage(
                errResp.error.message
              );
              return of(setErrorMessage({ message: errorMessage }));
            })
          );
        })
      );
    });
    loadingInfosVerbundenePerson$ =createEffect( ()=> {
return this.effectActions$.pipe(
ofType(loginActionSuccess),
exhaustMap((action) => {
return this.loginService.getInfosVerbundenePerson(action.user.username).pipe(
map( (data) => {
              const personne = this.loginService.formatPersonne(data);
               this.store.dispatch( gemeinsameInfosVerbundenePersonAction({ personne:personne }) );
return gemeinsameInfosVerbundenePersonActionSuccess();
})
)
})
)
    });


loginRedirect$ = createEffect(
    () => {
      return this.effectActions$.pipe(
        ofType(...[loginActionSuccess]),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));
          if (action.redirect) {
            this.router.navigate(['/willkommen']);
          }
        })
      );
    },
    { dispatch: false }
  );

 logout$ = createEffect(
    () => {
      return this.effectActions$.pipe(
        ofType(logoutAction),
        map((action) => {
          this.loginService.logout();
          this.router.navigate(['login']);
        })
      );
    },
    { dispatch: false }
  );
}







