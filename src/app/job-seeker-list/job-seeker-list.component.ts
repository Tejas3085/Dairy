import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';
 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seeker-list',
  templateUrl: './job-seeker-list.component.html',
  styleUrls: ['./job-seeker-list.component.css']
})
export class JobSeekerListComponent implements OnInit {

  isEdit : boolean;
  applyJobMasterList :any[];


  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.applyJobMasterList = [];
  
   }

  ngOnInit(): void {
    this.service.GetAllJobSeeker().subscribe((result) => {
      console.log(result);
  
      for(let data of result){
          this.applyJobMasterList.push(data);   
      }     
          console.log(this.applyJobMasterList);
    });
  }


  

}
