import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {Member } from "../Classes";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  member: Member;
  memberlist  : any[];
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.member = new Member();
   

    this.memberlist = [];






    
  }
  // OnSubmit() {
  //   console.log(this.member);
  //   this.service.AddMember(this.member).subscribe((result) => {
      
  //     if (result > 0) {
  //       const formData = new FormData();
  //       this.member.Photo = this.filesToUpload[0].name;
  //       formData.append('uploadedImage',this.filesToUpload[0],this.member.Photo);
  //       this.service.SaveMemberImage(formData,result).subscribe(data => {
  //         alert('Saved Successfully.');
  //       });       
  //     }
  //      else {
  //       alert("Something went wrong! Please try again.");
  //     }
  //   });
  // }

  OnSubmit() {

    this.service.AddMember(this.member).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.member.Photo = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.member.Photo);
        this.service.SaveMemberImage(formData,result).subscribe(data => {
          alert('Saved Successfully.');
        });       
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });


  }


  
  ngOnInit() { 
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.member.Photo = this.filesToUpload[i].name;
    } 
  }
}

