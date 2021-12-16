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
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
  applicationdetails: Applicationdetails;
  users: User[];
  user: User;
  User1 : User1[]
  Usersdata: User1

  franchises: Franchise[];
  franchise: Franchise;
  isEdit: boolean= false;
  applicationdetailslist:any[];

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { this.applicationdetails = new Applicationdetails();
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
    


   
    
    

    
  }
  

  OnSubmit(){
  alert(this.isEdit)
   
    if (this.isEdit == true) {
      this.service. UpdateApplicationDetails(this.applicationdetails).subscribe((result) => {
        if (result == "Success") {

          let listForEdit = this.applicationdetailslist.filter(x=>x.UserId == this.applicationdetails.UserId);
          listForEdit[0].FranchId = this.applicationdetails.FranchId;
          listForEdit[0].Comment = this.applicationdetails.Comment;
          listForEdit[0].Status = this.applicationdetails.Status;
         
     
          alert("Saved Successfully");

        } else {
          alert("Something went wrong! Please try again.");
        }
      });
    }
    else {
      this.applicationdetails.UserId =3 ;
      this.applicationdetails.FranchId = 5;
       alert("gkhg");
      this.service.AddApplicationDetails(this.applicationdetails).subscribe((result) => {
      if (result == "Success") {
        alert(" Something went wrong! Please try again.");
     
      } else {
        alert("Saved Successfully");
        console.log(result);
        this.service.GetAllApplicationDetails().subscribe((result) => {
          console.log(result);
          let list = result.filter(
            (result) => result.UserId == this.applicationdetails.UserId,)
          for(let data of list){
              this.applicationdetailslist.push(data);   
          }     
              console.log(this.applicationdetails);
        });
      }
    });   
  }

  }



  onSubmit() {
  
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
   


  }


  ngOnInit() {
    this.service.GetAllApplicationDetails().subscribe((result) => {
      let list = result.filter(
        (result) => result.SId == this.applicationdetails.UserId,)
      for(let data of list){
          this.applicationdetailslist.push(data);   
      }     
    });
    }

    Edit(Id) {
      this.isEdit = true;
      let listForEdit = this.applicationdetailslist.filter(x=>x.UserId == Id);
      this.applicationdetails.UserId = listForEdit[0].UserId;
      this.applicationdetails.FranchId = listForEdit[0].FranchId;
      this.applicationdetails.Comment = listForEdit[0].Comment;
      this.applicationdetails.Status = listForEdit[0].Status;
      }
  
    Delete(Id) {
      alert('Are you sure you want to delete?');
      this.service.DeleteApplicationDetails(Id).subscribe(result => {
        if (result == "Success") {
        this.applicationdetailslist = this.applicationdetailslist.filter(
          (item) => item.Id != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
  
 
}