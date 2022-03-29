import {Personne} from './personne';

export class Sekretaer extends Personne{
nbreMoisExperiences: number;
salaire: number;
languesSekretaer: string[];
constructor(
username: string,nom: string,prenom: string,dateNaissance :Date,nationalite:string,profession: string,quartier: string,numTel : string,email: string,numCni:string,password: string,
				diplomeEleve: string,dateDebutActiviteOuCours : Date,activiteEnParalelle:string,accountActivated: boolean,
				dateInscription : Date,languesSekretaer: string[], nbreMoisExperiences: number,salaire: number ,roles:string[]){
super(username,nom,prenom,dateNaissance,  nationalite, profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,
 accountActivated,dateInscription,roles);
this.languesSekretaer=languesSekretaer;
this.nbreMoisExperiences=nbreMoisExperiences;
this.salaire=salaire;

}


}
