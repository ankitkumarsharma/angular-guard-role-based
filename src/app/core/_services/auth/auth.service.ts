import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { LoginApiResponseModel } from '../../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin:boolean = false;
  roleAs!:string;

  constructor() { }

  login(value:string){
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE','true');
    localStorage.setItem('ROLE', this.roleAs);
    /*
    Here I am using static data, if we are using API from backend
    then we can use HTTP CLIENT MODULE and it's methods
    like GET,POST,DELETE,UPDATE
    */
    return of<LoginApiResponseModel>({
      response: {
        success: this.isLogin,
        role: this.roleAs
      },
      server: 200
    })
  }

  logout(){
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE','false');
    localStorage.setItem('ROLE', '');
    return of<LoginApiResponseModel>({
      response: {
        success: this.isLogin,
        role: this.roleAs
      },
      server: 200
    })
  }

  isLoggedIn(){
    const loggedIn = localStorage.getItem('STATE');
    if(loggedIn === 'true') {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    return this.isLogin;
  }

  getRole(){
    this.roleAs = JSON.stringify(localStorage.getItem('ROLE'));
    return this.roleAs;
  }
}
