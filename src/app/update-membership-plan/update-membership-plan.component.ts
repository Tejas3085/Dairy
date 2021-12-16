import { Component, Injectable, OnInit } from '@angular/core';
import { MembershipPlan } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-update-membership-plan',
  templateUrl: './update-membership-plan.component.html',
  styleUrls: ['./update-membership-plan.component.css']
})
export class UpdateMembershipPlanComponent implements OnInit {
  isEdit: boolean= false;
  membershipPlanlist:any[];
Id:any;
membershipPlan: MembershipPlan;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.membershipPlan = new MembershipPlan();
    this.membershipPlanlist = [];
   
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetMembershipPlanById(this.Id).subscribe((result) => {
    
        this.membershipPlan = result;
        console.log(this.membershipPlan);

  
        console.log(this.membershipPlan);
      });

    });
    
  }
  
  OnSubmit(){
  
      this.service. UpdateMembershipPlan(this.membershipPlan).subscribe((result) => {
        if (result == "Success") {

          alert("Saved Successfully");

        } else {
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
  
    }

}