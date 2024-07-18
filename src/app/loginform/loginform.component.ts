import { Component } from '@angular/core';

import { Router } from '@angular/router'; // Correct import statement for Router

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  isSignDivVisiable: boolean  = true;

  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  onRegister(){
    // debugger;
    const localUser = localStorage.getItem('portalusers');
    if(localUser != null) {
      const users =  JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('portalusers', JSON.stringify(users))
    } else {
      const users = [];
      users.push(this.signUpObj);
      localStorage.setItem('portalusers', JSON.stringify(users))
    }
    alert('Registration Success')
  }



  constructor( private router: Router) {}

  onLogin() {
    // debugger;
    const localUsers = localStorage.getItem('portalusers');
    if(localUsers != null) {
      const users = JSON.parse(localUsers);

      const isUserPresent = users.find((user:SignUpModel)=> user.email== this.loginObj.email && user.password == this.loginObj.password);
      if(isUserPresent != undefined){
        alert("User found...");
        localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/sidenav');
      }
      else{
        alert("No user found")
      }
    }

  }
  
}
export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
