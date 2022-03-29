import { v1 as uuid } from 'uuid';
export class Niveau{
id?: string;
codeNiveau: string = uuid();
libelle : string;
prix : number;
date_debut : Date;
date_fin : Date;
sprache : string[];
constructor( libelle: string, prix : number,date_debut:Date, date_fin:Date, sprache: string[]){
this.libelle = libelle;
this.prix = prix;
this.date_debut =date_debut;
this.date_fin = date_fin;
this.sprache = sprache;
//this.listeSprache = listeSprache;
}

}
