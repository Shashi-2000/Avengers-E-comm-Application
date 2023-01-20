import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dist-navbar',
  templateUrl: './dist-navbar.component.html',
  styleUrls: ['./dist-navbar.component.scss']
})
export class DistNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onClickLogout(){
    this.router.navigate([''])
    localStorage.clear()
    sessionStorage.clear()
  }
}
