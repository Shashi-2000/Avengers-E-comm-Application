import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-au-navbar',
  templateUrl: './au-navbar.component.html',
  styleUrls: ['./au-navbar.component.scss']
})
export class AuNavbarComponent implements OnInit {

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
