import {getSprachen} from "../../../ngrx/sprache/sprachen.selector";
import {getNiveaus} from "../../../ngrx/niveau/niveau.selector";
import {Niveau} from "../../../model/niveau";
import {Sprache} from "../../../model/sprache";
import {AppState} from "../../../Appstore/app.state";
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core'
@Injectable({providedIn:"root"})
export class LibelleSprache{
listeLibelleSpr: string[  ]=[];
libelleSprach!: Sprache[];
choiceSprach: [ Sprache[] ] =[ [] ];
listSprachen!: Sprache[];
newListNiveau : Niveau[]=[];
newListNiveauOne : Niveau[]=[];
constructor(private store : Store<AppState>){}

getSpracheByCodeSprache():Niveau[]{

this.store.select(getNiveaus).subscribe(listNiveau => {
this.newListNiveauOne=[...listNiveau];
this.newListNiveauOne=JSON.parse(JSON.stringify(listNiveau));//on enleve la dependance au Store afin de pouvoir modifier
for (let i = 0; i < this.newListNiveauOne.length; i++) {
this.store.select(getSprachen).subscribe(listSprachs => {this.listSprachen=[...listSprachs];
this.listSprachen=JSON.parse(JSON.stringify(listSprachs));
})
this.choiceSprach[i]=this.listSprachen.filter(sprache =>this.newListNiveauOne[i].sprache.includes(sprache.codeSprache ) )
this.newListNiveauOne[i].sprache=[];

for(let j=0; j<this.choiceSprach[i].length; j++){
this.newListNiveauOne[i].sprache.push(this.choiceSprach[i][j].libelle)

}
this.newListNiveau.push(this.newListNiveauOne[i]);
[...new Set(this.newListNiveau)]
}
}
)
return this.newListNiveau;
}

}
