import { Component, Injectable, OnInit } from '@angular/core';
import { PostJobMaster } from '../Classes';
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
  selector: 'app-postjoblist',
  templateUrl: './postjoblist.component.html',
  styleUrls: ['./postjoblist.component.css']
})
export class PostjoblistComponent implements OnInit {
  postJobMaster:PostJobMaster;
  isEdit: boolean= false;
  postjoblist:any[];
  
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { this.postJobMaster = new PostJobMaster();
    this.postjoblist = [];

  }
 
  ngOnInit() {
    this.service.GetAllPostJobs().subscribe((result) => {
   
      for(let data of result){
          this.postjoblist.push(data);   
      }     
      console.log(this.postjoblist)
    });
    }

    Edit(Id) {
      try {
        this.router.navigateByUrl("/updatePostJob/"+ Id);
      } catch (error) {
        alert("certi-" + error);
      } 
      }
  
    Delete(Id) {
      alert('Are you sure you want to delete?');
      this.service.DeleteJob(Id).subscribe(result => {
        if (result == "Success") {
        this.postjoblist = this.postjoblist.filter(
          (item) => item.JobId != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
  
 
}
