import { v1 as uuid } from 'uuid';
import {Sprache} from './sprache';
import {Raum} from './raum';
import {Niveau} from './niveau';

export class Kurs{
id?: string;
codeKurs : string=uuid();
langue : string ;
au_programme : string;
heure_debut : Date;
heure_fin : Date;
professeur: string;
raum : string[];
niveau : string[];

constructor(niveau : string[],raum: string[],langue : string, au_programme :string, heure_debut : Date,heure_fin: Date, professeur : string){
this.niveau = niveau;
this.raum = raum;
this.langue = langue;
this.au_programme = au_programme;
this.heure_debut = heure_debut;
this.heure_fin = heure_fin;
this.professeur = professeur;

}
}
