import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-wh-navbar',
  templateUrl: './wh-navbar.component.html',
  styleUrls: ['./wh-navbar.component.scss']
})
export class WhNavbarComponent implements OnInit {

  constructor(
    private router : Router,
    private apiService : ApiServiceService
  ) { }

  ngOnInit(): void {
  }

  onClickLogout(){
    this.router.navigate([''])
    localStorage.clear()
    sessionStorage.clear()
  }
}
