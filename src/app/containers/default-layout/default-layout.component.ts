import { Component ,OnInit,HostListener } from '@angular/core';
import {Store} from '@ngrx/store';
import { navItems } from './_nav';
import {isAuthenticated} from '../../ngrx/login/login.selector';
import {AppState} from '../../Appstore/app.state';
import {Observable,of} from 'rxjs';
import {getNiveaus} from '../../ngrx/niveau/niveau.selector';
import {getRaume} from '../../ngrx/raum/raume.selector';
import {getInitSprachen}  from '../../ngrx/sprache/sprachen.selector';
import {Sprache}  from '../../model/sprache';
import {Roles}  from '../../model/roles';
import {GetAllSprachenActions} from '../../ngrx/sprache/sprachen.actions';
import {GetAllKurseActions} from '../../ngrx/kurs/kurs.actions';
import {GetAllNiveausActions} from '../../ngrx/niveau/niveau.actions';
import {GetAllRaumeActions} from '../../ngrx/raum/raume.actions';
import {getSprachen} from '../../ngrx/sprache/sprachen.selector';
import { INavData } from '@coreui/angular';
import {Personne} from "../../model/personne";
import {getVerbundenePerson} from "../../ngrx/login/login.selector";
import {getRoles} from '../../ngrx/roles/roles.selector';
import {BerechtigungService} from '../../services/berechtigung/berechtigung.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {
listeRoles! : Roles[];
listSprache !: Sprache[];
  public    personne ! : Personne;
isAuthenticated : Observable<boolean>= of(false);
public menuTest1 : INavData[]=[];
  public navItems:any;
 // role  : Roles;
 public sehen : boolean = false;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  constructor(private store : Store<AppState>, private rolesServices : BerechtigungService) {
 //this.getBestimmteMenuByVerbundenePerson();
 this.store.select(getSprachen).subscribe(roles =>
              {this.listSprache = roles;
              //console.log("default layout encore"+this.listSprache);
              });

     }


  // @HostListener('window: mousemove', ['$event'])
     getBestimmteMenuByVerbundenePerson(){

for(let i=0; i<=4;i++){
this.navItems=this.menuTest1.push(navItems[i]);
}
this.sehen=false;
     }

@HostListener('document: mousemove', ['$event'])
loadErforderlicheInfos(){
this.store.select(getSprachen);
 this.store.dispatch(GetAllSprachenActions());
this.store.select(getNiveaus);
   this.store.dispatch(GetAllNiveausActions() );
//console.log('loading list of Language');
}
  ngOnInit(): void {
      this.isAuthenticated = this.store.select(isAuthenticated);
      this.loadErforderlicheInfos();

         this.store.select(getVerbundenePerson).subscribe((person: any) => {
           this.personne = person;
        // console.log("infos roles"+person.roles);
       //  debugger;
       if(person.roles ==null){
       console.log("valeur null")
       }
       else{


      this.rolesServices.getRolesByCodeRole(person.roles).subscribe((role:Roles) => {
      //debugger;
     // console.log("die von Services zurückgegebene Rolle"+role.role)
      //debugger;
       //console.log("taille generale"+navItems.length);
      for(let i=0; i<navItems.length; i++){
      //console.log("Valeur de i"+i);
      //debugger;
      if(navItems[i].roles!.includes(role.role)){

      this.menuTest1.push(navItems[i]);
      }


      if(i==8){this.sehen=true; console.log("Valeur de sehen"+this.sehen);}
/*
for(let j=0; j<navItems.length; j++){
if( ( navItems[i].children[j].roles)!.includes(role.role) ){

}

} */

    }
//this.sehen=true;
console.log("role recupere"+role.role);



      }); }
           });

                //this.store.dispatch(GetAllKurseActions());
                this.store.dispatch(GetAllRaumeActions() );

               // listRoles.forEach(raum => listRoles.push(role.codeRole));
              // console.log('voici la valeur du role'+this.personne.nom)

    }
}
