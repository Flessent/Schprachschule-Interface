import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sekretaer} from "../../model/sekretaer";
@Injectable({
  providedIn: 'root'
})
export class SekretaerService {

constructor(private httpClient: HttpClient) { }

 public  saveSekretaer(sekretaer : Sekretaer) : Observable<Sekretaer> {
  let host=environment.host;
    return this.httpClient.post<Sekretaer>(host+"/sekretaer/saveSekretaer",sekretaer);
  }


getListSekretaer(): Observable<Sekretaer[]>{

    return this.httpClient.get<Sekretaer[]>(`http://localhost:8080/sekretaer/listSekretaer`);
  }
  updateSekretaer(sekretaer: Sekretaer): Observable<Sekretaer> {
        let host=environment.host;
        //const spracheData = { libelle: sprache.libelle, intensive: sprache.intensive };
        return this.httpClient.patch<Sekretaer>(host+"/sekretaer/updateSekretaer",sekretaer );// retourne un objet ayant la structure de spracheData
      }

   deleteSekretaer(username: string) : Observable<void> {
       let host=environment.host;
      return  this.httpClient.delete<void>(host+"/sekretaer/deleteSekretaer/"+username);
    }

   getSekretaerByUsername(username: string): Observable<Sekretaer> {
       let host= environment.host;
      return this.httpClient.get<Sekretaer>(host+"/sekretaer/getSekretaerByUsername/"+username );
    }



}
