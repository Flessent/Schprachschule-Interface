import { Component, OnInit,Output,EventEmitter ,HostListener,Input} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import { Personne} from "../../../model/personne";

@Component({
  selector: 'app-gemeinsame-infos',
  templateUrl: './gemeinsame-infos.component.html',
  styleUrls: ['./gemeinsame-infos.component.scss']
})
export class GemeinsameInfosComponent implements OnInit {
constructor(){}
ngOnInit() {}

}
