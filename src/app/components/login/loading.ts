import {SpracheService} from '../../services/sprache/sprache.service';
import {RaumeService} from '../../services/raume/raume.service';
import {NiveauService} from '../../services/niveau/niveau.service';
import {KursService} from '../../services/kurs/kurs.service';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from '@angular/common/http';
import {AppState} from '../../Appstore/app.state';
import {Sprache} from '../../model/sprache';

import {Store} from '@ngrx/store';
@Injectable({providedIn:'root'})
export class LoadingAllListeService {
constructor(private httpClient : HttpClient, private store : Store<AppState> , private spracheService : SpracheService,
private raume: RaumeService,private niveau : NiveauService, private kurs : KursService){}
  private host=environment.host;
  //listeSprache : Sprache[]=[];
/*loadingAllListe() : Sprache[]{
//liste Sprache
this.spracheService.getListSprache().pipe(
map( sprachen=> )
)
}*/



}


