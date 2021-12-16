import { Component, Injectable, OnInit } from '@angular/core';
import { studentplandetails } from '../Classes';
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
  selector: 'app-studentplandetaillists',
  templateUrl: './studentplandetaillists.component.html',
  styleUrls: ['./studentplandetaillists.component.css']
})
export class StudentplandetaillistsComponent implements OnInit {
  studentplandetails:studentplandetails;
  isEdit: boolean= false;
  studentplandetailslist:any[];
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService)  { 
    this.studentplandetails = new studentplandetails();
    this.studentplandetailslist = [];
  }

   ngOnInit() {
    this.service.GetAllStudentsPlanDetails().subscribe((result) => {
      // let list = result.filter(
      //   (result) => result.Id == this.studentPlanMaster.Id,)
      for(let data of result){
          this.studentplandetailslist.push(data);   
      }     
    });
    }

    Edit(Id) {
      try {
        this.router.navigateByUrl("/updatestudentplandetailslists/" + Id);
      } catch (error) {
        alert("certi-" + error);
      } 
      }

      Delete(Id) {
        alert('Are you sure you want to delete?');
        this.service.DeleteStudentPlanDetails(Id).subscribe(result => {
          if (result == "Success") {
          this.studentplandetailslist = this.studentplandetailslist.filter(
            (item) => item.Id != Id);
          alert("Deleted Successfully");
        } else {
          alert("Somthing went wrong! please try again.");
        }
      });
      }
}
