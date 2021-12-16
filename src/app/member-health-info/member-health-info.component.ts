import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {MemberHealthInfo,Member } from "../Classes";


@Component({
  selector: 'app-member-health-info',
  templateUrl: './member-health-info.component.html',
  styleUrls: ['./member-health-info.component.css']
})
export class MemberHealthInfoComponent implements OnInit {

  memberHealthInfo: MemberHealthInfo;

  memberHealthInfolist  : any[];
  UserNames:any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.memberHealthInfo = new MemberHealthInfo();
    this.memberHealthInfo.Member=new Member(); 
    this.UserNames = [];
    this.memberHealthInfolist = [];

    
  }

  
  UserChange(event) {
    console.log('UserId:', event.target.value);
    this.memberHealthInfo.Member.Id = event.target.value;
  }

  getAllMember() {
    this.service.GetAllMember().subscribe((result) => {
      for (let data of result) {
        this.UserNames.push(data);
      }
      console.log("UserName" + this.UserNames);
    });
  }

  OnSubmit() {
    console.log(this.memberHealthInfo);
    this.service.AddMemberHealthInfo(this.memberHealthInfo).subscribe((result) => {
      console.log(result);
      if (result != "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }


  
  ngOnInit() {
this.getAllMember();

  }
}

