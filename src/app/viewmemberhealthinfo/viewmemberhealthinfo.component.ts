import { Component, Injectable, OnInit } from '@angular/core';
import { MemberHealthInfo,Member } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-viewmemberhealthinfo',
  templateUrl: './viewmemberhealthinfo.component.html',
  styleUrls: ['./viewmemberhealthinfo.component.css']
})
export class ViewmemberhealthinfoComponent implements OnInit {
  isEdit: boolean= false;
  memberHealthInfolist:any[];
  UserNames:any[];
Id:any;
memberHealthInfo: MemberHealthInfo;

  constructor(private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) {
    this.memberHealthInfo = new MemberHealthInfo();
    this.memberHealthInfo.Member=new Member(); 
    this.UserNames = [];
    this.memberHealthInfolist = [];
   
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetMemberHealthInfoById(this.Id).subscribe((result) => {
    
        this.memberHealthInfo = result;
        console.log(this.memberHealthInfo);

  
        console.log(this.memberHealthInfo);
      });

    });
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

  ngOnInit(): void {
  }

}
