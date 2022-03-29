import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Betreuer} from "../../model/betreuer";
import {Sprache} from "../../model/sprache";
import {Niveau} from "../../model/niveau";

@Injectable({
  providedIn: 'root'
})
export class BetreuerService {

 constructor(private httpClient: HttpClient) { }

 public  saveBetreuer(betreuer : Betreuer) : Observable<Betreuer> {
  let host=environment.host;
    return this.httpClient.post<Betreuer>(host+"/betreuer/saveBetreuer",betreuer);
  }


getListBetreuer(): Observable<Betreuer[]>{

    return this.httpClient.get<Betreuer[]>(`http://localhost:8080/betreuer/listBetreuer`);
  }
  updateBetreuer(betreuer: Betreuer): Observable<Betreuer> {
        let host=environment.host;
        //const spracheData = { libelle: sprache.libelle, intensive: sprache.intensive };
        return this.httpClient.patch<Betreuer>(host+"/betreuer/updateBetreuer",betreuer );// retourne un objet ayant la structure de spracheData
      }

   deleteBetreuer(username: string) : Observable<void> {
       let host=environment.host;
      return  this.httpClient.delete<void>(host+"/betreuer/deleteBetreuer/"+username);
    }

   getBetreuerByUsername(username: string): Observable<Betreuer> {
       let host= environment.host;
      return this.httpClient.get<Betreuer>(host+"/betreuer/getBetreuerByUsername/"+username );
    }


  getAllNiveauByUsernameBetreuer(username : string) : Observable<Niveau[]>{
    let host= environment.host;
      return this.httpClient.get<Niveau[]>(host+"/student/listNiveausUsernameBetreuer/"+username );
  }
  getAllSprachenByCodeSprache(listeUUID: string[] ) : Observable<Sprache[]>{
    let host= environment.host;

      return this.httpClient.get<Sprache[]>(host+"/sprachen/getListeSpracheByCodeSprachen" );

  }



  }
