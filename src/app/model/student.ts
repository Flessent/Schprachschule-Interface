import { v1 as uuid } from 'uuid';
import {Betreuer} from './betreuer';
export class Student extends Betreuer{
// sprache : string[];
 //niveau : string[];
numTelFinanceurCours: string;
numTelMereOuTutrice: string;
numTelPereOuTuteur: string;
nomFinanceurCours : string;
nomPereOuTuteur: string;
nomMereOuTutrice :string;

constructor(
  username: string,nom: string,prenom: string,dateNaissance:Date,nationalite:string,profession: string,quartier: string,numTel : string,email: string,numCni:string,password: string,
  				diplomeEleve: string,dateDebutActiviteOuCours : Date,activiteEnParalelle:string,accountActivated: boolean,dateInscription : Date,
  numTelFinanceurCours: string, numTelMereOuTutrice:string,numTelPereOuTuteur:string,nomFinanceurCours:string,nomPereOuTuteur:string,nomMereOuTutrice:string,
sprache : string[], niveau: string[],roles: string[],  nbreMoisExperiences? : number,  salaire? : number){

super(username,nom,prenom,dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours, activiteEnParalelle,accountActivated,
dateInscription , sprache,niveau,nbreMoisExperiences!,salaire!,roles);
//this.niveau=niveau;
//this.sprache=sprache;
this.numTelFinanceurCours=numTelFinanceurCours;

this.numTelMereOuTutrice=numTelMereOuTutrice;
this.numTelPereOuTuteur=numTelPereOuTuteur;
this.nomFinanceurCours=nomFinanceurCours;
this.nomPereOuTuteur=nomPereOuTuteur;
this.nomMereOuTutrice=nomMereOuTutrice;



}



/*
toStrings(student :Student){
console.log(student.nom, student.prenom, student.dateNaissance,student.quartier,student.nomMereOuTutrice,student.niveau,student.sprache,
student.numTelFinanceurCours,student.nomPereOuTuteur,student.numTelPereOuTuteur,student.email,student.diplomeEleve,student.numTel,student.profession,student.password,
student.dateDebutActiviteOuCours)
} */

}
