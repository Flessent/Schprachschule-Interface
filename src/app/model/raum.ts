import {v1 as uuid} from 'uuid';

export class Raum {
id?: string;
codeRaum : string = uuid();
nom_raume : string;
nbre_places : number;
standort : string;
constructor(nom_raume : string, nbre_places : number, standort:string){
this.nom_raume = nom_raume;
this.nbre_places = nbre_places;
this.standort = standort;
}

}
