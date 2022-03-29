import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Roles} from '../../model/roles';
import {environment} from "../../../environments/environment";
import {Observable, from} from "rxjs";
import {map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BerechtigungService {

  constructor(private httpClient: HttpClient) { }
getListRoles(): Observable<Roles[]> {
    return this.httpClient.get<Roles[]>(`http://localhost:8080/roles/listRoles`);

  }
  public saveRoles(roles:Roles) : Observable<Roles>{
    let host=environment.host;
    return this.httpClient.post<Roles>(host+"/roles/saveRoles",roles);
  }
 updateRoles(roles:Roles) : Observable<Roles> {
      let host=environment.host;
      return this.httpClient.patch<Roles>(host+"/roles/updateRoles",roles );
    }

 deleteRoles(codeRole: string) : Observable<void> {
     let host=environment.host;
    return  this.httpClient.delete<void>(host+"/roles/deleteRoles/"+codeRole);
  }

 getRolesByCodeRole(codeRole: string): Observable<Roles> {
     let host= environment.host;
    return this.httpClient.get<Roles>("http://localhost:8082/Sprachschule-Projekt/roles/getRolesByCodeRole/"+codeRole );
  }



}
