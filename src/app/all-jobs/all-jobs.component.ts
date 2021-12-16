import { Component, Injectable, OnInit } from '@angular/core';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';


@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {
  joblist:any[];
  constructor( private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.joblist = [];

   }

   ngOnInit() {
    this.service.GetAllPostJobs().subscribe((result) => {
      for(let data of result){
          this.joblist.push(data);   
      }   
      console.log(this.joblist);  
    });
    }

    Edit(Id) {
      try {
        this.router.navigateByUrl("/Update-Jobs/" + Id);
      } catch (error) {
        alert("certi-" + error);
      } 
      }
  
    Delete(Id) {
      alert('Are you sure you want to delete ?');
      this.service.DeleteJob(Id).subscribe(result => {
        if (result == "Success") {
        this.joblist = this.joblist.filter(
          (item) => item.Id != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
}
