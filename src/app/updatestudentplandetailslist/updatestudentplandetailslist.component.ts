import { Component, Injectable, OnInit } from '@angular/core';
import { studentplandetails,StudentPlanMaster,JobSeeker } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
@Component({
  selector: 'app-updatestudentplandetailslist',
  templateUrl: './updatestudentplandetailslist.component.html',
  styleUrls: ['./updatestudentplandetailslist.component.css']
})
export class UpdatestudentplandetailslistComponent implements OnInit {
  studentplandetails:studentplandetails
  
  StudentPlansMaster:any[];
  JobSeeker:any[];
  StudentPlansMasters:any[];
  JobSeekers:any[];
  Id: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private service: WebServiceService , private http: HttpClient) { 
  this.studentplandetails = new studentplandetails();
  this.studentplandetails.StudentPlansMaster = new StudentPlanMaster();
  this.studentplandetails.JobSeeker = new JobSeeker();
  this.StudentPlansMasters = [];
  this.JobSeekers = [];

  this.route.params.subscribe((params) => {
    this.Id = params.id;
   
    this.service.GetStudentPlanDetailsById(this.Id).subscribe((result) => {
  
      this.studentplandetails = result;
      console.log(this.studentplandetails);

    });

  }
  );

}
planChange(event: any) {
   
  console.log('cou:', event.target.value);
  this.studentplandetails.StudentPlansMaster.Id = event.target.value;  
  
}

JobSeekerChange(event: any) {
 
  console.log('jc:', event.target.value);
  this.studentplandetails.JobSeeker.Id = event.target.value;  
   
}


getAllStudentPlansMaster() {
  this.service.GetAllStudentsPlans().subscribe((result) => {
    for(let data of result) {
      this.StudentPlansMasters.push(data);
      
    }      
    console.log(this.StudentPlansMasters);
  });
}

getAllJobSeeker() {
  this.service.GetAllJobSeeker().subscribe((result) => {
    for(let data of result) {
      this.JobSeekers.push(data);
      
    }      
    console.log(this.JobSeekers);
  });
}

OnSubmit(){
  this.studentplandetails.Status = "Valid";
  this.service.UpdateStudentPlanDetails(this.studentplandetails).subscribe((result) => {
    if (result == "Success") {
      alert("Saved Successfully");
    } else {
      alert("Something went wrong! Please try again.");
    }
  });  
}


ngOnInit() {
  this.getAllStudentPlansMaster();
  this.getAllJobSeeker();
}
}
