import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from "rxjs";
import { map } from 'rxjs/operators';
import {Users} from '../../model/user';
import {Personne} from '../../model/personne';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {
  }

// BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'username'
public username: string='';
  public password: string='';

user2 =new Users(this.username, this.password);

    authenticationService(username: string, password: string) : Observable<Users>{

      return this.http.get<Users>(`http://localhost:8080/api/v1/basicauth`,
        { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((user) => {
          this.username = username;
          this.password = password;
          sessionStorage.setItem('username', username);
          let authString = this.createBasicAuthToken(username , password);
          sessionStorage.setItem('basicauth', authString);
         // this.setUserInSessionLocal(username, password);
         let  users =new Users(this.username, this.password);
          user=users;
         return user;
        }));

    }


getInfosVerbundenePerson(username: any) : Observable<Personne>{
let host=environment.host;

  /*   if(sessionStorage.getItem('username') !=null){
     username= sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
     } */

    return this.http.get<Personne>("http://localhost:8082/Sprachschule-Projekt/personne/getPersonneInfo/"+username);

}



  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occurred. Please try again';
    }
  }


  createBasicAuthToken(username: string, password: string)  {
    return 'Basic ' + window.btoa(username + ":" + password)
  }
 formatUser(data: Users) {

    const user = new Users(
      data.username,
      data.password);
    return user;
  }

formatPersonne(data : Personne) {
const personne  =new Personne(
  data.username,
  data.nom,
  data.prenom,
  data.dateNaissance,data.nationalite,data.profession,data.quartier,data.numTel,data.email,data.numCni,data.password,
  data.diplomeEleve,data.dateDebutActiviteOuCours,data.activiteEnParalelle,data.accountActivated,data.dateInscription,
  data.roles

  );
  return personne;
}


  setUserInSessionLocal(username: string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = '';
    this.password = '';
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }




}
