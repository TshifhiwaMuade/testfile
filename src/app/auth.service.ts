import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
      id: 1,
      userName: 'David',
      passWord: '1234' 
    }
  ];
  session: any;
  constructor() {}

  login(userName: string, passWord: string) {
    
    let user = this.users.find((u) => u.userName === userName && u.passWord === passWord);
    if (user) {
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
      
    }
    return user;
  }
}
