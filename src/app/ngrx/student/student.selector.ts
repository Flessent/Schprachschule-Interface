import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { studentenAdapter, StudentenState } from './student.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const STUDENT_STATE_NAME = 'studenten';
const getStudentenState = createFeatureSelector<StudentenState>(STUDENT_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const studentenSelectors = studentenAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getStudenten = createSelector(getStudentenState, studentenSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getStudentEntities = createSelector(
  getStudentenState,
  studentenSelectors.selectEntities // selectEntities retourne un selector de la forme :   selectEntities: Selector<EntityCollection<T>, T[]>
  //selectEntities gibt die totale Entität-Dictionary zurück
);

export const getStudentByUsername = createSelector(// on recupere un item-sprache grace a son libelle
  getStudentEntities,// wir zeigen zuerst die Liste/Dictionary von allen studenten an,die von getStudentEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (studenten, route: RouterStateUrl) => {
    return studenten ? studenten[route.params['username']] : null;// dans la route, on met le parametre codeSprache : http:localhost// listeSprache/codeSprache
  }
);





//export const getCount = createSelector(getStudentEntities, (state) => state.count);// wir zählen die in State vorhandenen Sprachen
