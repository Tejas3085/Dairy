import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {Distributor } from "../Classes";

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.css']
})
export class DistributorComponent implements OnInit {
  // instructor: Instructor;
  distributor: Distributor;

  // instructorlist  : any[];
  distributorlist  : any[];
  
  isEdit: boolean = false;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    // this.instructor = new Instructor();
    // this.instructorlist = [];
    this.distributor = new Distributor();
    this.distributorlist = [];

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
    console.log(this.distributor);
    this.service.AddDistributor(this.distributor).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.distributor.Photo = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.distributor.Photo);
        this.service.SaveDistributorImage(formData,result).subscribe(data => {
         
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
        this.distributor.Photo = this.filesToUpload[i].name;
    } 
  }




  
  ngOnInit() {




    
  }
}
