import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {Inquiry } from "../Classes";

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {
  inquiry: Inquiry;

  inquirylist  : any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.inquiry = new Inquiry();
   

    this.inquirylist = [];






    
  }
  OnSubmit() {
    console.log(this.inquiry);
    this.service.AddInquiry(this.inquiry).subscribe((result) => {
      if (result != "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }




  
  ngOnInit() {




    
  }
}

