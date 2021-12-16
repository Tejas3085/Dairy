// import { Component, OnInit } from '@angular/core';

// import { PaymentHistory,UserPlanDetails,MembershipPlan,Member} from '../Classes';
// declare const $: any;
// import { Router, ActivatedRoute } from '@angular/router';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { WebServiceService } from '../user-profile/user-profile.component';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-payment-history',
//   templateUrl: './payment-history.component.html',
//   styleUrls: ['./payment-history.component.css']
// })
// export class PaymentHistoryComponent implements OnInit {
//   PaymentHistory:PaymentHistory
//   UserPlanDetails:UserPlanDetails
//   Member:Member
//   Id: any;
//   mid:number;
//   constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private service: WebServiceService, private http: HttpClient)  { 
//     this.PaymentHistory=new PaymentHistory();
//     this.PaymentHistory.MemberId = this.Id ;
//     this.UserPlanDetails=new UserPlanDetails();
//   this.UserPlanDetails.Member=new Member();
//   this.UserPlanDetails.MembershipPlan=new MembershipPlan();
//     this.route.params.subscribe((params) => {
//       this.UserPlanDetails.UserId = params.id;
//       this.PaymentHistory.MemberId = params.id ;
   
//       this.service.GetUserPlanDetailsById(this.UserPlanDetails.UserId).subscribe((result) => {
    
//         this.UserPlanDetails = result;
//         console.log(this.UserPlanDetails);
  
    
//       });
  
//     });


//    }
 
//   ngOnInit(): void {
  
//   }

//   OnSubmit() {
    
//     console.log(this.PaymentHistory);

//     this.PaymentHistory.Price = this.UserPlanDetails.MembershipPlan.Price;
//     this.PaymentHistory.PlanId = this.UserPlanDetails.MembershipPlan.Id;
//     this.service.AddPaymentHistory(this.PaymentHistory).subscribe((result) => {
//       if (result != "Success") {
//         alert("Saved Successfully");
//       } else {
//         alert("Something went wrong! Please try again.");
//       }
//     });
//   }

//   pendingAmt(){

//     this.PaymentHistory.PendingAmount=(this.UserPlanDetails.MembershipPlan.Price)-(this.PaymentHistory.ReceivedAmount);

//     console.log(this.PaymentHistory.PendingAmount);

//   }
// }


import { Component, OnInit } from '@angular/core';

import { PaymentHistory,UserPlanDetails,MembershipPlan,Member} from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  PaymentHistory:PaymentHistory
  UserPlanDetails:UserPlanDetails
  Member:Member
  Id: any;
  mid:number;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private service: WebServiceService, private http: HttpClient)  { 
    this.PaymentHistory=new PaymentHistory();
    this.PaymentHistory.MemberId = this.Id ;
    this.UserPlanDetails=new UserPlanDetails();
  this.UserPlanDetails.Member=new Member();
  this.UserPlanDetails.MembershipPlan=new MembershipPlan();
    this.route.params.subscribe((params) => {
      this.UserPlanDetails.UserId = params.id;
      this.PaymentHistory.MemberId = params.id ;
   
      this.service.GetUserPlanDetailsById(this.UserPlanDetails.UserId).subscribe((result) => {
    
        this.UserPlanDetails = result;
        console.log(this.UserPlanDetails);
  
    
      });
  
    });


   }
 
  ngOnInit(): void {
  
  }

  OnSubmit() {
    
    console.log(this.PaymentHistory);
    // this.PaymentHistory.Price = ;
    // this.PaymentHistory.MemberId = this.Id ;
    this.PaymentHistory.Price = this.UserPlanDetails.MembershipPlan.Price;
   
    this.PaymentHistory.PlanId = this.UserPlanDetails.MembershipPlan.Id;
    this.service.AddPaymentHistory(this.PaymentHistory).subscribe((result) => {
      if (result != "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }

  pendingAmt(){
    // var first = document.getElementById("amount");
    this.PaymentHistory.PendingAmount=(this.UserPlanDetails.MembershipPlan.Price)-(this.PaymentHistory.ReceivedAmount);
    // this.PaymentHistory.PendingAmount=(3);
    console.log(this.PaymentHistory.PendingAmount);

  }
}
