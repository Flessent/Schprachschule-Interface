import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../model/student";
import {Sprache} from "../../model/sprache";
import {Niveau} from "../../model/niveau";


@Injectable({ providedIn: 'root'})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

 public  saveStudent(student : Student) : Observable<Student> {
  let host=environment.host;
    return this.httpClient.post<Student>(host+"/student/saveStudent",student);
  }
getListStudenten(): Observable<Student[]>{ //retourne un tableau de type Product (voir model)
    //let host= (Math.random()>0.2)?environment.host:environment.unrechargeableHost;// Ici on donne les probalites a l´app de tomber sur joignable ou pas
    //si les chances sont <20% on tombe sur injoignable en cas de pb reseau par exemple
    return this.httpClient.get<Student[]>(`http://localhost:8080/student/listStudenten`);
  }
 updateStudent(student: Student): Observable<Student> {
      let host=environment.host;
      //const spracheData = { libelle: sprache.libelle, intensive: sprache.intensive };
      return this.httpClient.patch<Student>(host+"/student/updateStudent",student );// retourne un objet ayant la structure de spracheData
    }

 deleteStudent(username: string) : Observable<void> {
     let host=environment.host;
    return  this.httpClient.delete<void>(host+"/student/deleteStudent/"+username);
  }

 getStudentByUsername(username: string): Observable<Student> {
     let host= environment.host;
    return this.httpClient.get<Student>(host+"/student/getStudentByUsername/"+username );
  }


getAllNiveauByUsernameStudent(username : string) : Observable<Niveau[]>{
  let host= environment.host;
    return this.httpClient.get<Niveau[]>(host+"/student/listNiveausUsernameStudent/"+username );
}
getAllSprachenByCodeSprache(listeUUID: string[] ) : Observable<Sprache[]>{
  let host= environment.host;

    return this.httpClient.get<Sprache[]>(host+"/sprachen/getListeSpracheByCodeSprachen" );

}



}

