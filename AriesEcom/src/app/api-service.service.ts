import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
   
  isUser !: any
  constructor(private http : HttpClient) { }

  userAutheticate(autheticateUrl : string){
    this.http.get(autheticateUrl).subscribe(e => {
      this.isUser = e;
      localStorage.setItem('userID', this.isUser[0]);
      this.isUser ? sessionStorage.setItem('isUserValid', 'true') : sessionStorage.setItem('isUserValid', 'false');
      sessionStorage.setItem('userTypeID', this.isUser[1])
    });
  }

  getMethod(baseUrl : string){
    return this.http.get(baseUrl);
  }

  postMethod(baseUrl : string, jsonObject : any){
    return this.http.post(baseUrl , jsonObject);
  }

  putMethod(baseUrl : string, input : any){
    return this.http.put(baseUrl, input)
  }
  
}
