import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {Instructor } from "../Classes";

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  instructor: Instructor;

  instructorlist  : any[];

  
  isEdit: boolean = false;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.instructor = new Instructor();
    this.instructorlist = [];
   

  }
  // OnSubmit() {
  //   console.log(this.instructor);
  //   this.service.AddInstructor(this.instructor).subscribe((result) => {
  //     if (result != "Success") {
  //       alert("Saved Successfully");
  //     } else {
  //       alert("Something went wrong! Please try again.");
  //     }
  //   });
  // }
  OnSubmit() {

    this.service.AddInstructor(this.instructor).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.instructor.Photo = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.instructor.Photo);
        this.service.SaveInstructorImage(formData,result).subscribe(data => {
          alert('Saved Successfully.');
        });       
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });

  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.instructor.Photo = this.filesToUpload[i].name;
    } 
  }




  
  ngOnInit() {




    
  }
}

