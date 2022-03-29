import { Component, OnInit } from '@angular/core';
import {AppState} from "../../../Appstore/app.state";
import {getStudenten} from '../../../ngrx/student/student.selector';
import {Observable} from 'rxjs';
import {Student} from "../../../model/student";
import {GetAllStudentenActions, GetAllStudentenActionsSuccess} from "../../../ngrx/student/student.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

   constructor(private store : Store<AppState>) { }

  studenten: Observable<Student[]> | null = null;
    ngOnInit(): void {
    this.studenten = this.store.select(getStudenten);// recupere l'etat du selecteur getSprachen dans le store
      this.store.dispatch(GetAllStudentenActions());
    }

}
