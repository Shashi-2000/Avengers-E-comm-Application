import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  constructor(
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  onClickLogin(){
    this.dialog.open(LoginComponent, {
      height : '65%',
      width : '35%'
    })
  }

  onClickOpenRegister(){
    this.dialog.open(RegisterComponent, {
      height : '98%',
      width : '45%'
    })
  }

}
