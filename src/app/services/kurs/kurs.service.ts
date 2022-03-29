import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Kurs} from '../../model/kurs';
import {environment} from "../../../environments/environment";
import {Observable, from} from "rxjs";
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class KursService {

  constructor(private httpClient: HttpClient) { }
  getListKurse(): Observable<Kurs[]> {
    return this.httpClient.get<Kurs[]>(`http://localhost:8080/kurs/listeKurs`);

  }



  public saveKurs(kurs:Kurs) : Observable<Kurs>{
    let host=environment.host;
    return this.httpClient.post<Kurs>(host+"/kurs/saveKurs",kurs);
  }
 updateKurs(kurs:Kurs) : Observable<Kurs> {
      let host=environment.host;
      return this.httpClient.patch<Kurs>(host+"/kurs/updateKurs",kurs );
    }

 deleteKurs(codeKurs: string) : Observable<void> {
     let host=environment.host;
    return  this.httpClient.delete<void>(host+"/kurs/deleteKurs/"+codeKurs);
  }

 getKursByCodeKurs(codeKurs: string): Observable<Kurs> {
     let host= environment.host;
    return this.httpClient.get<Kurs>(host+"/kurs/getKursByCodeKurs/"+codeKurs );
  }




}
