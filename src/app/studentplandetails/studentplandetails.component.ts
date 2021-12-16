// import { Orgplandetails} from '../Classes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { studentplandetails,StudentPlanMaster,JobSeeker } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';














@Component({
  selector: 'app-studentplandetails',
  templateUrl: './studentplandetails.component.html',
  styleUrls: ['./studentplandetails.component.css']
})
export class StudentplandetailsComponent implements OnInit {
  studentplandetails : studentplandetails
  StudentPlansMaster:StudentPlanMaster[];
  JobSeeker:JobSeeker[];
  StudentPlansMasters:StudentPlanMaster[];
  JobSeekers:JobSeeker[];
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.studentplandetails = new studentplandetails()
    this.studentplandetails.StudentPlansMaster = new StudentPlanMaster();
    this.studentplandetails.JobSeeker = new JobSeeker();
    this.StudentPlansMasters = [];
    this.JobSeekers = [];
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
    

    this.service.AddStudentsPlanDetails(this.studentplandetails).subscribe((result) => {
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
    this.getAllStudentPlansMaster();
    this.getAllJobSeeker();

  }
}