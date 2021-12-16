import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { GlobalVariable, uses } from "../Globals";

import { WebServiceService } from "../user-profile/user-profile.component";
import { RegisterOTP } from "../Classes";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  registerOTP: RegisterOTP;
  registerOTPlist: any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.registerOTP = new RegisterOTP();
    this.registerOTPlist = [];
  }
  OnSubmit() {
    try {
      let num = Math.floor(100000 + Math.random() * 900000);
      this.registerOTP.OTP = (num).toString();
      this.registerOTP.Status = "Send";
    

      GlobalVariable.Mobile = this.registerOTP.Mobile;
       console.log(GlobalVariable.Mobile )
        this.service.AddOtpDetails(this.registerOTP).subscribe((result) => {
        
          console.log(result);
          if (result == "Success") {
            alert("Saved Successfully");
            this.router.navigateByUrl("/reset-password");
          } else {
            alert("Something went wrong! Please try again.");
          }
        });

      //});
    } catch (err) {
      alert(err);
    }
  }

  ngOnInit() {}
}


