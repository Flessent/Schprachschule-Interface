import {Personne} from './personne';

export class Lehrer extends Personne{
nbreMoisExperiences: number;
salaire: number;
sprache: string[];
niveau: string[];
constructor(
username: string,nom: string,prenom: string,dateNaissance :Date,nationalite:string,profession: string,quartier: string,numTel : string,email: string,numCni:string,password: string,
				diplomeEleve: string,dateDebutActiviteOuCours : Date,activiteEnParalelle:string,
				accountActivated: boolean,dateInscription : Date,sprache: string[],niveau:string[], nbreMoisExperiences: number,salaire: number,roles: string[]){
super(username,nom,prenom,dateNaissance,  nationalite, profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,
accountActivated,dateInscription,roles);
this.sprache=sprache;
this.niveau=niveau;
this.nbreMoisExperiences=nbreMoisExperiences;
this.salaire=salaire;

}


}
