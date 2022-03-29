import { exhaustMap, map } from 'rxjs/operators';
import { AppState } from '../../Appstore/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { isAuthenticated } from './login.selector';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(isAuthenticated).pipe(
      map((authenticate) => {
        if (!authenticate) {
              console.log('Nein ! Sie dürfen nicht eintreten');

       return this.router.createUrlTree(['login']);


        }
console.log('Sie sind erlaubt')
        return true;
      })
    );
  }
}
