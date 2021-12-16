// import { Component, OnInit } from '@angular/core';


import { Orghrdetails} from '../Classes';
// import { Component, Injectable, OnInit } from '@angular/core';
// declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core'
import { MatSelectModule } from '@angular/material/select'
import {
  HttpRequest,
  HttpEventType,
} from '@angular/common/http'
import { Data } from '@angular/router';
import { OnInit } from '@angular/core';





@Component({
  selector: 'app-orghrdetails',
  templateUrl: './orghrdetails.component.html',
  styleUrls: ['./orghrdetails.component.css']
})
export class OrghrdetailsComponent implements OnInit {



  orghrdetails : Orghrdetails
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.orghrdetails = new Orghrdetails()
  }


 
     OnSubmit(){
      alert("gkhg")
      // parseInt(localStorage.getItem('OrgId'))
      
      console.log(this.orghrdetails)
      console.log(this.orghrdetails);
      this.service.AddOrgaHRDetails(this.orghrdetails).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } 
      else {
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