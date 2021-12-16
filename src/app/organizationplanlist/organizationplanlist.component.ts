

// import { Component, Injectable, OnInit } from '@angular/core';
// declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-organizationplanlist',
  templateUrl: './organizationplanlist.component.html',
  styleUrls: ['./organizationplanlist.component.css']
})
export class OrganizationplanlistComponent implements OnInit {

  isEdit : boolean;
  organizationPlansMasterList :any[];


  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.organizationPlansMasterList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllOrganizationPlansMaster().subscribe((result) => {
      console.log(result);
      // let list = result.filter(
      //   (result) => result.Id == this.franchisedetails.Id,)
      for(let data of result){
          this.organizationPlansMasterList.push(data);   
      }     
          console.log(this.organizationPlansMasterList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteOrganizationPlansMaster(Id).subscribe(result => {
      if (result == "Success") {
      this.organizationPlansMasterList = this.organizationPlansMasterList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
       this.router.navigateByUrl("/updateorganizationplan/" + Id); 
    
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
