import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lehrer} from "../../model/lehrer";
import {Sprache} from "../../model/sprache";
import {Niveau} from "../../model/niveau";

@Injectable({
  providedIn: 'root'
})
export class LehrerService {
 constructor(private httpClient: HttpClient) { }

 public  saveLehrer(lehrer : Lehrer) : Observable<Lehrer> {
  let host=environment.host;
    return this.httpClient.post<Lehrer>(host+"/personne/lehrer/saveLehrer",lehrer, {responseType:'json'});
  }


getListLehrer(): Observable<Lehrer[]>{

    return this.httpClient.get<Lehrer[]>("http://localhost:8080/personne/lehrer/listLehrer");
  }
  updateLehrer(lehrer: Lehrer): Observable<Lehrer> {
        let host=environment.host;
        //const spracheData = { libelle: sprache.libelle, intensive: sprache.intensive };
        return this.httpClient.patch<Lehrer>(host+"/personne/lehrer/updateLehrer",lehrer );// retourne un objet ayant la structure de spracheData
      }

   deleteLehrer(username: string) : Observable<void> {
       let host=environment.host;
      return  this.httpClient.delete<void>(host+"/personne/lehrer/deleteLehrer/"+username);
    }

   getLehrerByUsername(username: string): Observable<Lehrer> {
       let host= environment.host;
      return this.httpClient.get<Lehrer>(host+"/lehrer/getLehrerByUsername/"+username );
    }


  getAllNiveauByUsernameLehrer(username : string) : Observable<Niveau[]>{
    let host= environment.host;
      return this.httpClient.get<Niveau[]>(host+"/student/listNiveausUsernameLehrer/"+username );
  }
  getAllSprachenByCodeSprache(listeUUID: string[] ) : Observable<Sprache[]>{
    let host= environment.host;

      return this.httpClient.get<Sprache[]>(host+"/sprachen/getListeSpracheByCodeSprachen" );

  }


}
