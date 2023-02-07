import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/_services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  isLogin:boolean = false;
  constructor(private authService:AuthService, private router:Router){}
  ngOnInit(): void {
    this.checkIsLogin();
  }
  ngAfterContentChecked(): void {
    this.checkIsLogin();
  }
  checkIsLogin(){
    if(this.authService.isLoggedIn()){
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
  onLogout(){
    this.authService.logout().subscribe((data:any)=>{
      if(data.server){
        this.router.navigate(['/']);
        this.isLogin = false;
      }
    });
  }
}
