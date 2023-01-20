import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AuthGuardService } from './auth-guards.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UpPasswordComponent } from './up-password/up-password.component';
import { MasterComponent } from './master/master.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpPasswordComponent,
    MasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  

    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    AuthGuardService,
    { provide : MatDialogRef, useValue : {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
