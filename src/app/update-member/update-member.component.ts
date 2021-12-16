import { Component, Injectable, OnInit } from '@angular/core';
import { Member } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  isEdit: boolean= false;
  memberlist:any[];
Id:any;
member: Member;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 

    this.member = new Member();
    this.memberlist = [];
   
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetMemberById(this.Id).subscribe((result) => {
    
        this.member = result;
        console.log(this.member);

    
      });

    });
    
  }
  
  OnSubmit(){
  
      this.service. UpdateMember(this.member).subscribe((result) => {
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