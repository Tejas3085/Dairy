import { Component, Injectable, OnInit } from '@angular/core';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-job-category-list',
  templateUrl: './job-category-list.component.html',
  styleUrls: ['./job-category-list.component.css']
})
export class JobCategoryListComponent implements OnInit {

  imgPath: string = GlobalVariable.BASE_API_URL;
  applicationdetailslist:any[];

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.applicationdetailslist = [];
 
  }
 
  ngOnInit() {
    this.service.GetAllJobCategory().subscribe((result) => {
      for(let data of result){
          this.applicationdetailslist.push(data);   
      }     
      console.log(this.applicationdetailslist)
    });
    }

    Edit(Id) {
      try {
        this.router.navigateByUrl("/Update-Job-Category/" + Id);
      } catch (error) {
        alert("certi-" + error);
      } 
      }
  
    Delete(Id) {
      alert('Are you sure you want to delete?');
      this.service.DeleteJobCategory(Id).subscribe(result => {
        if (result == "Success") {
        this.applicationdetailslist = this.applicationdetailslist.filter(
          (item) => item.JobCategory_Id != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
  
 
}