import {Injectable} from "@angular/core";
import {StudentService} from "../../services/student/student.service";
import {Actions, createEffect,Effect, ofType} from "@ngrx/effects";
import {Observable, of, asyncScheduler} from "rxjs";
import {Action} from "@ngrx/store";
import { Store } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {SaveNewStudentActions,SaveNewStudentActionsSuccess,SaveNewStudentActionsError,
GetAllStudentenActions,GetAllStudentenActionsSuccess,GetAllStudentenActionsError,GetAllStudentenByUsernameActions,GetAllStudentenByUsernameActionsSuccess,
GetAllStudentenByUsernameActionsError,GetOneStudentActions,GetOneStudentActionsSuccess,GetOneStudentActionsError,UpdateStudentActions,UpdateStudentActionsSuccess,
DeleteStudentActions,DeleteStudentActionsSuccess

} from "./student.actions";
import {getStudenten} from './student.selector'

import {catchError, map,exhaustMap, concatMap,mergeMap,tap,withLatestFrom,switchMap,filter} from "rxjs/operators";
import {Student} from "../../model/student";
import {dummyAction} from '../login/login.actions';
import {AppState} from '../../Appstore/app.state'
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class  StudentenEffects{

  constructor(private  effectActions$:Actions,private studentService:StudentService, private store : Store<AppState>) {}
 /*Das Lesen des Zustands erfolgt mit der selectMethode, die einen Projektor benötigt, der beschreibt, WIE der Zustand abgerufen und/oder transformiert wird.
  Selektoren geben neue Werte aus, wenn sich diese Werte "ändern" - der neue Wert unterscheidet sich durch den Vergleich nicht mehr vom vorherigen Wert.*/

 getAllStudentenEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllStudentenActions),
      withLatestFrom(this.store.select(getStudenten)),
      mergeMap(([action, listStudenten]) => {
        if (!listStudenten.length || listStudenten.length === 1) {
          return this.studentService.getListStudenten().pipe(
            map((listStudenten) => {
              return GetAllStudentenActionsSuccess({ listStudent: listStudenten });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
/*
  newSpracheEffect$ =createEffect(
     ()=>this.effectActions$.pipe(
       ofType(NewSpracheActions),//on verifie le type de l´action
       map( ()=> NewSpracheActionsSuccess() ),
       catchError( (err) =>of(NewSpracheActionsError(err.message)))
        ) );
*/

// Save new Sprache

   saveNewStudentEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewStudentActions),
        mergeMap((action) => {
          return this.studentService.saveStudent(action.newStudent).pipe(
            map((data) => {
              return SaveNewStudentActionsSuccess({ newStudent: data });
            })
          );
        })
      );
    });

// Abholung einer einzelnen Sprache

getOneStudent$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-student/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['username'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getStudenten)),
      switchMap(([username, studenten]) => {
        if (!studenten.length) {
          return this.studentService.getStudentByUsername(username).pipe(
            map((student) => {
              const studentData = [{ ...student, username }];
              return GetAllStudentenActionsSuccess({ listStudent: studentData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  // get one Sprache By codeSprache
  getOneStudentByUsername$ = createEffect(() => {
       return this.effectActions$.pipe(
         ofType(GetOneStudentActions),
         switchMap((username) => {
             return this.studentService.getStudentByUsername(username.username).pipe(
               map((student : Student) => {
                 const studentData = student;
                 return GetOneStudentActionsSuccess({ student: studentData });
               })
             );

           return of(dummyAction());
         })
       );
     });










  updateStudent$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateStudentActions),
      switchMap((action) => {
        return this.studentService.updateStudent(action.student).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedStudent: Update<Student> = {
              id: action.student.username as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.student,
              },
            };
            return UpdateStudentActionsSuccess({ student: updatedStudent });
          })
        );
      })
    );
  });

  deleteStudent$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteStudentActions),
      switchMap((action) => {
        return this.studentService.deleteStudent(action.username).pipe(
          map((data) => {
            return DeleteStudentActionsSuccess({ username: action.username });
          })
        );
      })
    );
  });
/*
// Search Products

searchProductsEffect:Observable<SprachenActions>=createEffect(
  ()=>this.effectActions.pipe(
    ofType(SprachenActionsTypes.SEARCH_SPRACHEN),//on verifie le type de l´action
    mergeMap((action:SprachenActions)=>{//on prend l´action qu´on q recu et on fait appel au service
      return this.spracheServices.getListSprache()//appel de la methode getProducts du backend et on attend les resultats
        .pipe(
          map((products)=>new SearchSprachenActionsSuccess(products) ),//retourne la liste des produits dans le tableau products en cas de succes
  catchError((err )=> of(new SearchSprachenActionsError(err.message)))//en cas d´erreur, on dispache une nouvelle action disant que la requette n´a pas abouti
        )
    } ) ));
*/
























}
