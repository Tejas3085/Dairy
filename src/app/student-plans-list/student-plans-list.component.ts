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
  selector: 'app-student-plans-list',
  templateUrl: './student-plans-list.component.html',
  styleUrls: ['./student-plans-list.component.css']
})
export class StudentPlansListComponent implements OnInit {
  studentPlanMaster:StudentPlanMaster;
  isEdit: boolean= false;
  studentplanmasterlist:any[];
  
  
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { this.studentPlanMaster = new StudentPlanMaster();
    this.studentplanmasterlist = [];

  }
 
  ngOnInit() {
    this.service.GetAllStudentsPlans().subscribe((result) => {
      // let list = result.filter(
      //   (result) => result.Id == this.studentPlanMaster.Id,)
      for(let data of result){
          this.studentplanmasterlist.push(data);   
      }     
    });
    }

    Edit(Id) {
      try {
        this.router.navigateByUrl("/update-student-plan/" + Id);
      } catch (error) {
        alert("certi-" + error);
      } 
      }
  
    Delete(Id) {
      alert('Are you sure you want to delete?');
      this.service.DeleteStudentPlansMaster(Id).subscribe(result => {
        if (result == "Success") {
        this.studentplanmasterlist = this.studentplanmasterlist.filter(
          (item) => item.Id != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
  
 
}
