import { Component, Injectable, OnInit } from '@angular/core';
import { Applicationdetails } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

class User{
  public id: number;
  public name: string;
}
class User1{
  public id: number;
  public name: string;
}

class Franchise{
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-update-application-details',
  templateUrl: './update-application-details.component.html',
  styleUrls: ['./update-application-details.component.css']
})
export class UpdateApplicationDetailsComponent implements OnInit {
  applicationdetails: Applicationdetails;
  users: User[];
  user: User;
  User1 : User1[]
  Usersdata: User1;
  Id: any;

  franchises: Franchise[];
  franchise: Franchise;
  isEdit: boolean= false;
  applicationdetailslist:any[];

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.applicationdetails = new Applicationdetails();
    this.applicationdetailslist = [];
    this.users = [  ];
    
    this.User1 = [      { id: 1, name: 'Yevale Tea' },
    { id: 2, name: 'Saiba Tea' },
    { id: 3, name: 'kavare Icecream' },
    { id: 4, name: 'Sujata Mastani' },];

    this.franchises = [
      { id: 1, name: 'Yevale Tea' },
      { id: 2, name: 'Saiba Tea' },
      { id: 3, name: 'kavare Icecream' },
      { id: 4, name: 'Sujata Mastani' },
      
 
    ];
    


    this.route.params.subscribe((params) => {
      this.Id = params.id;

      this.service.GetApplicantsById(this.Id).subscribe((result) => {
 
        this.applicationdetails = result;
        console.log(this.applicationdetails);

 
        console.log(this.applicationdetails);
      });

 


    });
    
    

    
  }
  

  OnSubmit(){
  alert(this.isEdit)
     this.applicationdetails.UserId = 2;
    this.applicationdetails.FranchId = 4;
  
      this.service. UpdateApplicationDetails(this.applicationdetails).subscribe((result) => {
        if (result == "Success") {

         
     
          alert("Saved Successfully");

        } else {
          alert("Something went wrong! Please try again.");
        }
      });
  
  

  }



  onSubmit() {
  
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
   


  }


  ngOnInit() {
    
    }

    
  
  
  
 
}