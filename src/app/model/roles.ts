import {v1 as uuid} from 'uuid';

export class Roles {
 role: string;
 description: string;
 codeRole : string = uuid();

constructor(role: string, description: string){

this.role = role;
this.description = description;
}

}
