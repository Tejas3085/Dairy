import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {UserPlanDetails,Member,MembershipPlan } from "../Classes";

@Component({
  selector: 'app-user-plan-detail',
  templateUrl: './user-plan-detail.component.html',
  styleUrls: ['./user-plan-detail.component.css']
})
export class UserPlanDetailComponent implements OnInit {
  userPlanDetails: UserPlanDetails;
  userPlanDetailslist  : any[];
  UserNames:any[];
  MembershipPlans:any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.userPlanDetails = new UserPlanDetails();
    this.userPlanDetails.Member = new Member();
    this.userPlanDetails.MembershipPlan = new MembershipPlan();
    this.UserNames = [];
    this.userPlanDetailslist = [];
    this.MembershipPlans=[];
  
  }

  UserChange(event) {
    console.log('UserId:', event.target.value);
    this.userPlanDetails.Member.Id = event.target.value;
  }

  getAllMember() {
    this.service.GetAllMember().subscribe((result) => {
      for (let data of result) {
        this.UserNames.push(data);
      }
      console.log("UserName" + this.UserNames);
    });
  }

  planChange(event) {
    console.log('UserId:', event.target.value);
    this.userPlanDetails.MembershipPlan.Id = event.target.value;
  }

  getAllMembershipPlan() {
    this.service.GetAllMembershipPlan().subscribe((result) => {
      for (let data of result) {
        this.MembershipPlans.push(data);
      }
      console.log("Plan"+this.MembershipPlans);
    });
  }

  OnSubmit() {
    console.log(this.userPlanDetails)
    this.service.AddUserPlanDetails(this.userPlanDetails).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }

  ngOnInit() {
      this. getAllMember();
      this.getAllMembershipPlan();
  }
}

