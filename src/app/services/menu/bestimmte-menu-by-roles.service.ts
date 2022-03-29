import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {INavData} from '@coreui/angular';
import {navigation} from '@app/_nav';
@Injectable({
  providedIn: 'root'
})
export class BestimmteMenuByRolesService {
items$: Observable<INavData[]>;
navItems =navigation;

  constructor() { }
}
