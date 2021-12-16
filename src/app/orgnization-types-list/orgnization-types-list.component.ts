import { Component, Injectable, OnInit } from '@angular/core';
import { OrgType } from '../Classes';
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
  selector: 'app-orgnization-types-list',
  templateUrl: './orgnization-types-list.component.html',
  styleUrls: ['./orgnization-types-list.component.css']
})
export class OrgnizationTypesListComponent implements OnInit {
  orgType:OrgType;
  isEdit: boolean= false;
  OrgTypelist:any[];
  

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { this.orgType = new OrgType();
    this.OrgTypelist = [];

  }
 
  ngOnInit() {
    this.service. GetAllOrganizationType().subscribe((result) => {
      // let list = result.filter(
      //   (result) => result.Id == this.studentPlanMaster.Id,)
      for(let data of result){
          this.OrgTypelist.push(data);   
      }     
    });
    }

    Edit(Id) {
      try {
        this.router.navigateByUrl("/update-orgnization-type/" + Id);
      } catch (error) {
        alert("certi-" + error);
      } 
      }
  
    Delete(Id) {
      alert('Are you sure you want to delete?');
      this.service.DeleteOrganizationType(Id).subscribe(result => {
        if (result == "Success") {
        this.OrgTypelist = this.OrgTypelist.filter(
          (item) => item.Id != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
  
 
}
