import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ROLES_LIST } from 'src/app/core/constants/app.constant';
import { LoginApiResponseModel } from 'src/app/core/models/app.model';
import { AuthService } from 'src/app/core/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  readonly roles = ROLES_LIST;
  loginForm!:FormGroup;

  constructor(private _fb:FormBuilder, private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this._fb.group({
      username:[''],
      roles: ['']
    })
  }
  onSubmit(){
    this.authService.login(this.loginForm.value['roles']).subscribe((data:LoginApiResponseModel)=>{
      if(data.response.success){
        localStorage.setItem('user',JSON.stringify(this.loginForm.value))
        this.router.navigate(['/dashboard']);
      }
    })
  }
}
