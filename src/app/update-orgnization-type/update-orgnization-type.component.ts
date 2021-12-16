import { Component, Injectable, OnInit } from '@angular/core';
import { OrgType } from '../Classes';
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


@Component({
  selector: 'app-update-orgnization-type',
  templateUrl: './update-orgnization-type.component.html',
  styleUrls: ['./update-orgnization-type.component.css']
})
export class UpdateOrgnizationTypeComponent implements OnInit {
  isEdit: boolean= false;
  OrgTypelist:any[];
Id:any;
orgType: OrgType;
  

constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.orgType = new OrgType();
    this.OrgTypelist = [];
   
    
       


    this.route.params.subscribe((params) => {
      this.Id = params.id;
    
      this.service. GetOrganizationTypeById(this.Id).subscribe((result) => {
    
        this.orgType = result;
        console.log(this.orgType);

        console.log(this.orgType);
      });


    });
    
    

    
  }
  

  OnSubmit(){


      this.service. UpdateOrganizationType(this.orgType).subscribe((result) => {
        if (result == "Success") {

          alert("Saved Successfully");

        } else {
          alert("Something went wrong! Please try again.");
        }
      });
  
 
  }






  ngOnInit() {

    }

   
  
 
  
 
}