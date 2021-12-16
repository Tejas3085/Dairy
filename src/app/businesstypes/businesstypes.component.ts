
import{Businesstype} from '../Classes';

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
  selector: 'app-businesstypes',
  templateUrl: './businesstypes.component.html',
  styleUrls: ['./businesstypes.component.css']
})
export class BusinesstypesComponent implements OnInit {

  businessType : Businesstype
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.businessType = new Businesstype()
  }


     OnSubmit(){
      this.service.AddBusiness(this.businessType).subscribe((result) => {
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