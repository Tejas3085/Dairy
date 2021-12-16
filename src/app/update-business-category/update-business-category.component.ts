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
  selector: 'app-update-business-category',
  templateUrl: './update-business-category.component.html',
  styleUrls: ['./update-business-category.component.css']
})
export class UpdateBusinessCategoryComponent implements OnInit {

  businesstype : Businesstype;
  Id: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor( private route: ActivatedRoute, private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.businesstype = new Businesstype()



    this.route.params.subscribe((params) => {
      this.Id = params.id;

      this.service.GetBusinessTypeById(this.Id).subscribe((result) => {
     
        this.businesstype = result;
        console.log(this.businesstype);
  

  
      });

    //   this.service. GetAttemptHistoryById(this.UniqID)
    //   .subscribe((result) => {
    //   this.attemptHistory = result;
    //   console.log(this.attemptHistory);
    // });


    });

  }

  

     OnSubmit(){

      this.service.UpdateBusinessType(this.businesstype).subscribe((result) => {
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        } else {
          alert('Uploaded Successfully.');          
       }

      });
    }
  
    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.selectedFileNames =[];
      for (let i = 0; i < this.filesToUpload.length; i++)
      {
          this.selectedFileNames.push(this.filesToUpload[i].name);
          this.businesstype.Photo = this.filesToUpload[i].name;//path.basename(this.filesToUpload[i].name);// read file as data url
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
    }
  }