import { v1 as uuid } from 'uuid';
import {Niveau} from './niveau';
export class Sprache{
id?: string;
codeSprache: string = uuid();
libelle :string;
  intensive:boolean;
constructor(libelle:string,intensive:boolean){
this.libelle = libelle; this.intensive =intensive;

}

}



