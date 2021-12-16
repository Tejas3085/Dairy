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
  selector: 'app-application-details-list',
  templateUrl: './application-details-list.component.html',
  styleUrls: ['./application-details-list.component.css']
})
export class ApplicationDetailsListComponent implements OnInit {

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
  }
 

    ngOnInit(): void {
      this.service.GetAllAppliDetails().subscribe((result) => {
        console.log(result);
    
        for(let data of result){
            this.applicationdetailslist.push(data);   
        }     
            console.log(this.applicationdetailslist);
      });
    }
  




    Edit(Id) {
      try {
        this.router.navigateByUrl("/update-application-details/" + Id);
      } catch (error) {
        alert("certi-" + error);
      } 
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
