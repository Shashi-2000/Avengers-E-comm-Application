import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onClickLogout(){
    this.router.navigate([''])
    localStorage.clear()
    sessionStorage.clear()
  }
}
