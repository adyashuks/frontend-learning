import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateServiceService } from '../authenticate-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userinfo = {};
  username;
  password;
  role;
  phone;
  age;
  bloodgroup;
  hobbies;

  router: Router;
  auth:AuthenticateServiceService
  
  constructor(router: Router,auth: AuthenticateServiceService) {
    this.auth=auth;
    this.router = router;
  }

  ngOnInit() {
    if(this.auth.authenticate){

      let storedValues = JSON.parse(localStorage.getItem('userdetails'));
      this.username = storedValues.username;
      this.bloodgroup = storedValues.bloodgroup;
      this.age = storedValues.age;
      this.password = storedValues.password;
      this.role = storedValues.role;
      this.hobbies = storedValues.hobbies;
    }
  }

  store() {
    // let username = this.username;
    // let password = document.getElementById('password');
    // let role = document.getElementById('role');
    // let phone = document.getElementById('phone');
    // let age = document.getElementById('age');
    // let bloodgroup = document.getElementById("bloodgrp");
    // let hobbies = document.getElementById('hobbies');

    this.userinfo = {
      username: this.username,
      bloodgroup: this.bloodgroup,
      role: this.role,
      phone: this.phone,
      age: this.age,
      password: this.password,
      hobbies: this.hobbies
    }

    localStorage.setItem('userdetails', JSON.stringify(this.userinfo));
    console.log('info saved');
    console.log(this.username);
    // if(this.username === )
    this.router.navigateByUrl('/login')
  }
}
