import { Component, Injectable, OnInit } from '@angular/core';
import { UserPlanDetails,Member,MembershipPlan } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-update-user-plan-details',
  templateUrl: './update-user-plan-details.component.html',
  styleUrls: ['./update-user-plan-details.component.css']
})
export class UpdateUserPlanDetailsComponent implements OnInit {
  userPlanDetails:UserPlanDetails
  isEdit: boolean= false;
  updateUserPlanDetailslist:any[];
  UserNames:any[];
  MembershipPlans:any[];
Id:any;

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.userPlanDetails = new UserPlanDetails();
    this.updateUserPlanDetailslist = [];
   
    this.userPlanDetails.Member = new Member();
    this.userPlanDetails.MembershipPlan = new MembershipPlan();
    this.UserNames = [];
    this.MembershipPlans=[];
  
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetUserPlanDetailsById(this.Id).subscribe((result) => {
    
        this.userPlanDetails = result;
        console.log(this.userPlanDetails);

  
      });

    });
    
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
    this.userPlanDetails.Member.Id = event.target.value;
  }

  getAllMembershipPlan() {
    this.service.GetAllMembershipPlan().subscribe((result) => {
      for (let data of result) {
        this.MembershipPlans.push(data);
      }
      console.log("Plan"+this.MembershipPlans);
    });
  }
  OnSubmit(){
  
      this.service. UpdateUserPlanDetails(this.userPlanDetails).subscribe((result) => {
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
    this. getAllMember();
    this.getAllMembershipPlan();
    }

}