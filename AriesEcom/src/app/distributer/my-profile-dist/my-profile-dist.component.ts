import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-my-profile-dist',
  templateUrl: './my-profile-dist.component.html',
  styleUrls: ['./my-profile-dist.component.scss']
})
export class MyProfileDistComponent implements OnInit {

  getProfileUrl : string = 'https://localhost:44321/api/UserLogin/myProfile';
  myProfile : any;
  userProfileID !: number;
  greeting !: string
  userName !: string;
  email !: string;
  firstName !: string;
  lastName !: string;
  firmName : string = 'Huel Distributions';
  contactNumber !: number;
  address !: string;
  city !: string;
  country !: string;
  postalCode !: string;
  constructor(private apiService : ApiServiceService, private router : Router) { }

  ngOnInit(): void {
    this.userProfileID = Number(localStorage.getItem('userID'));
    this.apiService.getMethod(`${this.getProfileUrl}/${this.userProfileID}`).subscribe((e : any) => {
      this.myProfile = e[0];
      this.greeting = `${this.myProfile.FirstName}, ${new Date()}`
      this.userName = this.myProfile.UserName;
      this.email = this.myProfile.EmailID;
      this.firstName = this.myProfile.FirstName;
      this.lastName = this.myProfile.LastName;
      this.contactNumber = this.myProfile.PhoneNumber;
      this.address = `${this.myProfile.AddressLine1} ${this.myProfile.AddressLine2}`;
      this.city = this.myProfile.City;
      this.country = this.myProfile.Country;
      this.postalCode = this.myProfile.ZipCode;
    });
  }
}
