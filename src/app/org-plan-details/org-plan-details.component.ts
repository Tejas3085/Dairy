// import { Component, OnInit } from '@angular/core';
// import { Orgplandetails} from '../Classes';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Orgplandetails }  from '../Classes';

declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class Organization {
  public id: number;
  public name: string;
}
class Plan {
  public id: number;
  public name: string;
}




@Component({
  selector: 'app-org-plan-details',
  templateUrl: './org-plan-details.component.html',
  styleUrls: ['./org-plan-details.component.css']
})
export class OrgPlanDetailsComponent implements OnInit {
//   
organizations: Organization[];
  city: Organization;
  plans: Plan[];
  state: Plan;

  OrganizationList = [
    { id: 1, Name: 'IT' },
    { id: 2, Name: 'Pharma' },
    { id: 3, Name: 'Banking' },
  
  ];

  PlanList = [
    { id: 1, Name: 'Plan1' },
    { id: 2, Name: 'Plan2' },
    { id: 3, Name: 'Plan3' },

    // { id: 5, Name: 'Surat' },
    // { id: 6, Name: 'Ahemdabad' },
  ];

  
  orgplandetails : Orgplandetails
  constructor(private formBuilder: FormBuilder, private router: Router, private service: WebServiceService , private http: HttpClient) { 
    this.orgplandetails = new Orgplandetails();
  }


  ngOnInit(): void {
  }
  OnSubmit(){
    alert("gkhg")
    console.log(this.orgplandetails)

    this.orgplandetails.OrgnizationId = parseInt(localStorage.getItem('OrgnizationId'));
    console.log(this.orgplandetails);
this.orgplandetails.OrgnizationId = 2;
// this.orgplandetails.PlanId = 1;


  this.service.AddOrganizationPlanDetails(this.orgplandetails).subscribe((result) => {
    localStorage.setItem('OrgId', result);
    
    if (result == 0) {
       alert("Something went wrong! Please try again.");
     } else {
      alert("Saved Successfully");
      // this.router.navigateByUrl("/orghrdetails");
      
     }
   });
  }

}
