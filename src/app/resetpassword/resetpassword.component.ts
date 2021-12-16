import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { GlobalVariable, uses } from "../Globals";
import { WebServiceService } from "../user-profile/user-profile.component";

import { ResetPassword,ForgotPassword,RegisterOTP  } from "../Classes";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
Mobile: any
  resetPassword: ResetPassword;
  forgotPassword:ForgotPassword;
  registerOTP:RegisterOTP;
  resetPasswordlist: any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.resetPassword = new ResetPassword();
    this.resetPasswordlist = [];
    this.Mobile = GlobalVariable.Mobile;
  }



  Verify() {
    console.log(GlobalVariable.Mobile )
    this.service.GetOtpDetailsByMobileNumber(this.Mobile).subscribe((result) => {
      console.log(result);
      console.log(this.resetPassword.Otp)
      if(result.Mobile == this.Mobile && result.Otp == this.resetPassword.Otp && result.Status == "Send"){     
        this.service.UpdateOtpStatus(this.Mobile,this.resetPassword.Otp).subscribe((result) => {
        
          if(result == "Success"){   
            this.service.ResetPassword(this.Mobile,this.resetPassword.Password).subscribe((result) => {   
              if(result == "Success"){       
             this.router.navigateByUrl("/Admin-Login");
              }
            });
          }
        });
      }
      else {
        alert("Invalid OTP");
      }
    });
  }
  OnSubmit() {
    




   
  
 
  }

  ngOnInit() {}
}


