import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-up-password',
  templateUrl: './up-password.component.html',
  styleUrls: ['./up-password.component.scss']
})
export class UpPasswordComponent implements OnInit {

  verifyEmailUrl : string = `https://localhost:44321/api/Admin/verifyEmail`;
  resetPassUrl : string = `https://localhost:44321/api/Admin/passReset`
  verifyPasswordView : boolean = true
  verifyEmailForm !: FormGroup;
  newPasswordForm !: FormGroup;
  hide : boolean = true;
  hideConfirm : boolean = true;
  verifyFailMsg : string = '';

  constructor(
    private apiService : ApiServiceService,
    private fb : FormBuilder,
    private dialogRef : MatDialogRef<UpPasswordComponent>,
    private spinnerService : NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.verifyEmailForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      userName : ['', [Validators.required]]
    })

    this.newPasswordForm = this.fb.group({
      password : ['', [Validators.required, Validators.minLength(8)]],
      newPassword : ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onClickVerify(){
    this.spinnerService.show();
    this.apiService.getMethod(`${this.verifyEmailUrl}/${this.verifyEmailForm.value.email}/${this.verifyEmailForm.value.userName}`).subscribe((verify : any) => {
      setTimeout(() => {
        verify ? this.verifyPasswordView = false : this.verifyPasswordView = this.verifyPasswordView
        verify ? this.verifyFailMsg = '' : this.verifyFailMsg = '*Password or Email not valid';
        this.spinnerService.hide();
      }, 1500)
    })
  }

  
  onClickSetPass(){
    this.spinnerService.show();
    this.apiService.getMethod(`${this.resetPassUrl}/${this.verifyEmailForm.value.userName}/${this.newPasswordForm.value.password}`).subscribe((reset : any) => {
      setTimeout(() => {
        reset ? this.verifyFailMsg = '' : this.verifyFailMsg = '*Password reset failed';
        this.dialogRef.close();
        this.spinnerService.hide();
      }, 1500)
    })
  }

  onClickClose(){
    this.dialogRef.close();
  }
}
