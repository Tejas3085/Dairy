import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {MembershipPlan } from "../Classes";


@Component({
  selector: 'app-membership-plan',
  templateUrl: './membership-plan.component.html',
  styleUrls: ['./membership-plan.component.css']
})
export class MembershipPlanComponent implements OnInit {

  membershipPlan: MembershipPlan;

  membershipPlanlist  : any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.membershipPlan = new MembershipPlan();
   
    this.membershipPlanlist = [];

  }
  OnSubmit() {
    console.log(this.membershipPlan);
    this.service.AddMembershipPlan(this.membershipPlan).subscribe((result) => {
      console.log(this.membershipPlan);
      if (result == "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }

  ngOnInit() {

  }
}

