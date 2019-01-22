import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../authenticate-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router : Router;
  auth : AuthenticateServiceService;
  constructor(router :Router, auth : AuthenticateServiceService) {
    this.router = router;
    this.auth = auth;
   }

ngOnInit() {
  this.auth.authenticate = false;
}

logincheck() {
  let username = document.getElementById('uname');
  let password = document.getElementById('pw');
  let objdetails = JSON.parse(localStorage.getItem('userdetails'));
  if(username['value'] === objdetails['username'] && password['value'] === objdetails['password']) {
    this.router.navigate(['/signup']);
    console.log(objdetails.username);
    console.log('Hello Adya');
    this.auth.authenticate = true;
  } else {
    alert("User id or Password didn't match. Please Signup first");
  }
}

}

