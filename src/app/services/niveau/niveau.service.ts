import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Niveau} from '../../model/niveau';
import {environment} from "../../../environments/environment";
import {Observable, from} from "rxjs";
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NiveauService {
   httpOptionsPlain = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };
  constructor(private httpClient: HttpClient) { }
getListNiveaus(): Observable<Niveau[]> {
    return this.httpClient.get<Niveau[]>(`http://localhost:8082/Sprachschule-Projekt/niveau/listeNiveau`);

  }
  public saveNiveau(niveau:Niveau) : Observable<Niveau>{
    let host=environment.host;
    return this.httpClient.post<Niveau>("http://localhost:8082/Sprachschule-Projekt/niveau/saveNiveau",niveau);
  }
 updateNiveau(niveau:Niveau) : Observable<Niveau> {
      let host=environment.host;
      return this.httpClient.patch<Niveau>(host+"/niveau/updateNiveau",niveau );
    }

 deleteNiveau(codeNiveau: string) : Observable<void> {
     let host=environment.host;
    return  this.httpClient.delete<void>(host+"/niveau/deleteNiveau/"+codeNiveau);
  }

 getNiveauByCodeNiveau(codeNiveau: string): Observable<Niveau> {
     let host= environment.host;
    return this.httpClient.get<Niveau>(host+"/sprachen/getSpracheByCodeSprache/"+codeNiveau );
  }




}
