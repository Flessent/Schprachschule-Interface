import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {Roles} from "../../model/roles";
export interface RolesState extends EntityState<Roles>{

listRoles: Roles[];
}
export const rolesAdapter : EntityAdapter<Roles>= createEntityAdapter<Roles>({

selectId : (roles:Roles)=> roles.codeRole,
sortComparer : false

});

export const initState: RolesState = rolesAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState

  listRoles:[],
  });



