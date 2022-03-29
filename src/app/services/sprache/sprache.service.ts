import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, from} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Injectable} from "@angular/core";
import {Sprache} from "../../model/sprache";
import {Niveau} from "../../model/niveau";
@Injectable({providedIn:"root"})
export class SpracheService {
  constructor(private httpClient: HttpClient) { }
  private host=environment.host;

     httpOptionsPlain = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    }),
    'responseType': 'text'
  };

getListSprache(): Observable<Sprache[]>{ //retourne un tableau de type Product (voir model)
    //let host= (Math.random()>0.2)?environment.host:environment.unrechargeableHost;// Ici on donne les probalites a l´app de tomber sur joignable ou pas
    //si les chances sont <20% on tombe sur injoignable en cas de pb reseau par exemple
    return this.httpClient.get<Sprache[]>(`http://localhost:8082/Sprachschule-Projekt/sprachen/listSprachen`);
  }


  public saveSprache(sprache:Sprache) : Observable<Sprache>{
    let host=environment.host;
    return this.httpClient.post<Sprache>(host+"/sprachen/saveSprache",sprache);
  }

/*PUT und PATCH sind zwei HTTP-Methoden. PUT wird generell verwerdet, wenn man eine vollständige Ersetzung der vorhandenen Ressourcen umsetzen muss ,
während PATCH für Teilaktualisierung wervendet wird */
  updateSprache(sprache: Sprache): Observable<Sprache> {
      let host=environment.host;
      //const spracheData = { libelle: sprache.libelle, intensive: sprache.intensive };
      return this.httpClient.patch<Sprache>(host+"/sprachen/updateSprache",sprache );// retourne un objet ayant la structure de spracheData
    }

 deleteSprache(codeSprache: string) : Observable<void> {
     let host=environment.host;
    return  this.httpClient.delete<void>(host+"/sprachen/deleteSprache/"+codeSprache);
  }

 getSpracheByCodeSprache(codeSprache: string): Observable<Sprache> {
     let host= environment.host;
    return this.httpClient.get<Sprache>(host+"/sprachen/getSpracheByCodeSprache/"+codeSprache );
  }


getAllNiveauByLibelleSprache(libelleSprache : string) : Observable<Niveau[]>{
  let host= environment.host;
    return this.httpClient.get<Niveau[]>(host+"/sprachen/listNiveausLibelleSprache/"+libelleSprache );
}
getAllSprachenByCodeSprache(listeUUID: string[] ) : Observable<Sprache[]>{
  let host= environment.host;

    return this.httpClient.get<Sprache[]>(host+"/sprachen/getListeSpracheByCodeSprachen" );

}

}
