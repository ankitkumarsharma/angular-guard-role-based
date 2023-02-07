import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userDetails:any;
  ngOnInit(): void {
    let user:any = localStorage.getItem('user');
    this.userDetails = JSON.parse(user);
  }
}
