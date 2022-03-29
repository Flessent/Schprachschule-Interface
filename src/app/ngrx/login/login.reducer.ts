import {createReducer,on} from "@ngrx/store";
import {initialState} from "./login.state"
import {loginActionSuccess,loginActionStart,loginActionError,gemeinsameInfosVerbundenePersonAction} from './login.actions';

//    (state, { updatedValue }) => ({ ...state, prop: updatedValue })




export  const LoginReducer = createReducer(
  initialState,
  on(loginActionSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }) ,

  on(gemeinsameInfosVerbundenePersonAction, (state,action)=>{

  return {
  ...state,
  personne : action.personne
  }

  }  )



  );

