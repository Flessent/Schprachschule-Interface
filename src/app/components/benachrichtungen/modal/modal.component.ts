import { Component, OnInit, ViewChild } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modal: ModalDirective) { }

  ngOnInit(): void {
  }



}

