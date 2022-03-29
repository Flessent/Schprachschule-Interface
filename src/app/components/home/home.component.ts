import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../../services/home/hello-world.service';
import {User} from '../../model/user';
import {LoginService} from '../../services/login/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService, private helloWorldService: HelloWorldService) { }

  ngOnInit() {

    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }





dogetListeUser() {
//let Liste :User[];
this.helloWorldService.getUser().subscribe((res:any) => {
console.log(res);
})


}



}
