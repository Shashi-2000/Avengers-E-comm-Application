import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  baseUrltoRegister : string = `https://localhost:44321/api/Warehouse/register`;
  hidePassword : boolean = true;
  hideConfirm : boolean = true;
  registerForm !: FormGroup;

  constructor(
    private dialogRef : MatDialogRef<RegisterComponent>,
    private fb : FormBuilder,
    private apiService : ApiServiceService,
    private spinnerService : NgxSpinnerService
  ) { }

  ngOnInit(): void {


    this.registerForm = this.fb.group({
      firstName : ['', [Validators.required, Validators.maxLength(12)]],
      lastName : ['', [Validators.required, Validators.maxLength(12)]],
      userName : ['', [Validators.required]],
      firmName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      phoneNumer : ['', [Validators.required, Validators.minLength(10)]],
      password : ['', [Validators.required]],
      confirmPassword : ['', [Validators.required]],
      securityAnswer : ['', [Validators.required]],
    })
  }

  onClickRegister(){
    let jsonRegister = {
      DateInserted : new Date(),
      ID : Math.floor(Math.random() * 1000) + 1,
      UserTypeID : 986126,
      MemberID : Math.floor(Math.random() * 100) + 1,
      FirstName : this.registerForm.value.firstName,
      LastName : this.registerForm.value.lastName,
      LoginID : this.registerForm.value.userName,
      FirmName : this.registerForm.value.firmName,
      EmailID : this.registerForm.value.email,
      PhoneNumber : this.registerForm.value.phoneNumer,
      Password : this.registerForm.value.password,
      SecurityAnswer : this.registerForm.value.securityAnswer
    }
    this.spinnerService.show();
    setTimeout(() => {
      this.apiService.postMethod(this.baseUrltoRegister, jsonRegister).subscribe(e => {
        console.log(e);
        this.dialogRef.close()
        this.spinnerService.hide();
      })
    }, 1000)
  }

  onClickClose(){
    this.dialogRef.close();
  }

}
