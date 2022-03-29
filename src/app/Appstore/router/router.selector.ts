import { RouterStateUrl } from './custom-serializer';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
// creation du FeatureSelector router qui prend en parametres un BaseRouterStoreState oü se trouvent les parametres de la route : url, params,...
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl> >('router');// 'router' c'est le nom du FeatureSelector
//cree un Selector dont le parametre est un type any selon la doc et ici notre parametre est getRouterState de type createFeatureSelector
export const getCurrentRoute = createSelector(getRouterState, (router) => {
  return router.state;// state est une property de l'interface RouterReducerState lui-meme qui l'as prit du store-devtools
}); // router ici est de type RouterReducerState

