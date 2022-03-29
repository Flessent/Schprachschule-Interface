export class Personne {
username : string;
nom : string;
prenom:  string;
dateNaissance : Date;
nationalite : string;
profession: string;
quartier: string;
numTel : string;
email: string;
numCni : string;
password: string;
diplomeEleve: string;
dateDebutActiviteOuCours: Date;
activiteEnParalelle:  string;
accountActivated:boolean;
dateInscription : Date;
roles: string[];
				constructor(username: string,nom: string,prenom: string,dateNaissance: Date,nationalite:string,profession: string,quartier: string,numTel : string,email: string,numCni:string,password: string,
				diplomeEleve: string,dateDebutActiviteOuCours : Date,activiteEnParalelle:string, accountActivated: boolean, dateInscription : Date,roles:string[]){
        this.activiteEnParalelle=activiteEnParalelle;
				this.username=username;
				this.nom=nom;
				this.prenom=prenom;
				this.dateNaissance=dateNaissance;
				this.nationalite=nationalite;
				this.profession=profession;
				this.dateDebutActiviteOuCours=dateDebutActiviteOuCours;
				this.numCni=numCni;
				this.numTel=numTel;
				this.quartier=quartier;
				this.email=email;
				this.password=password;
				this.diplomeEleve=diplomeEleve;
				this.accountActivated=accountActivated;
				this.dateInscription=dateInscription;
this.roles=roles;


				}



}
