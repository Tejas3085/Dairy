import { Component, Injectable, OnInit } from '@angular/core';
import { StudentPlanMaster } from '../Classes';
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
  selector: 'app-update-student-plan',
  templateUrl: './update-student-plan.component.html',
  styleUrls: ['./update-student-plan.component.css']
})
export class UpdateStudentPlanComponent implements OnInit {
  isEdit: boolean= false;
  studentplanmasterlist:any[];
Id:any;
  studentPlanMaster: StudentPlanMaster;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.studentPlanMaster = new StudentPlanMaster();
    this.studentplanmasterlist = [];
   
    
       


    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetStudentPlansMasterById(this.Id).subscribe((result) => {
    
        this.studentPlanMaster = result;
        console.log(this.studentPlanMaster);

  
        console.log(this.studentPlanMaster);
      });

    

    });
    
    

    
  }
  

  OnSubmit(){
  
    
   
      this.service. UpdateStudentPlansMaster(this.studentPlanMaster).subscribe((result) => {
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