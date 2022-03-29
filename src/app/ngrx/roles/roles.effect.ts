import {Injectable} from "@angular/core";
import {SaveNewRolesActions,SaveNewRolesActionsSuccess,GetAllRolesActions,GetAllRolesActionsSuccess,
DeleteRolesActions,DeleteRolesActionsSuccess,UpdateRolesActions,UpdateRolesActionsSuccess
} from './roles.actions';
import {mergeMap,map,withLatestFrom,switchMap,tap,filter} from 'rxjs/operators';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {BerechtigungService} from '../../services/berechtigung/berechtigung.service';
import {Store} from '@ngrx/store';
import {dummyAction} from '../login/login.actions';
import {getRoles} from './roles.selector'
import {AppState} from '../../Appstore/app.state'
import {of} from 'rxjs';
import {Update} from '@ngrx/entity';
import {Roles} from "../../model/roles";
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class RolesEffects{
constructor(private effectActions$: Actions, private rolesService: BerechtigungService,private store: Store<AppState>){}
// Abholung der Liste der Roless
 getAllRolesEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllRolesActions),
      withLatestFrom(this.store.select(getRoles)),/* recupere la derniere valeur de getSprachen chaque fois que GetAllSprachenActions est appele.
      Il retourne donc un Observable qui contient les deux Observable combines : l'action et le resultat.
      */
      mergeMap(([action, listRoles]) => {
        if (!listRoles.length || listRoles.length === 1) {
          return this.rolesService.getListRoles().pipe(
            map((listRoles) => {
              return GetAllRolesActionsSuccess({ listRoles: listRoles });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Abholung einer einzelnen Sprache
getOneRoles$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-benachrichtungen/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['codeRole'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getRoles)),
      switchMap(([codeRole, roles]) => {
        if (!roles.length) {
          return this.rolesService.getRolesByCodeRole(codeRole).pipe(
            map((role) => {
              const rolesData = [{ ...role, codeRole }];
              return GetAllRolesActionsSuccess({ listRoles: rolesData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Save new Roles

   saveNewRolesEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewRolesActions),
        mergeMap((action) => {
          return this.rolesService.saveRoles(action.newRoles).pipe(
            map((data) => {
              return SaveNewRolesActionsSuccess({ newRoles: data });
            })
          );
        })
      );
    });
// Update ein Roles
updateRoles$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateRolesActions),
      switchMap((action) => {
        return this.rolesService.updateRoles(action.roles).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedRoles: Update<Roles> = {
              id: action.roles.codeRole as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.roles,
              },
            };
            return UpdateRolesActionsSuccess({ roles: updatedRoles });
          })
        );
      })
    );
  });
// Ein Roles Löschen
  deleteRoles$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteRolesActions),
      switchMap((action) => {
        return this.rolesService.deleteRoles(action.codeRole).pipe(
          map((data) => {
            return DeleteRolesActionsSuccess({ codeRole: action.codeRole });
          })
        );
      })
    );
  });

}
