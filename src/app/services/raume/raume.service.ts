import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Raum} from '../../model/raum';
import {environment} from "../../../environments/environment";
import {Observable, from} from "rxjs";
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RaumeService {

  constructor(private httpClient: HttpClient) { }
getListRaume(): Observable<Raum[]> {
    return this.httpClient.get<Raum[]>(`http://localhost:8080/raum/listRaume`);

  }
  public saveRaum(raum:Raum) : Observable<Raum>{
    let host=environment.host;
    return this.httpClient.post<Raum>(host+"/raum/saveRaum",raum);
  }
 updateRaum(raum:Raum) : Observable<Raum> {
      let host=environment.host;
      return this.httpClient.patch<Raum>(host+"/raum/updateRaum",raum );
    }

 deleteRaum(codeRaum: string) : Observable<void> {
     let host=environment.host;
    return  this.httpClient.delete<void>(host+"/raum/deleteRaum/"+codeRaum);
  }

 getRaumByCodeRaum(codeRaum: string): Observable<Raum> {
     let host= environment.host;
    return this.httpClient.get<Raum>(host+"/kurs/getRaumByCodeRaum/"+codeRaum );
  }




}
