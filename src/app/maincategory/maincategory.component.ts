import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {MainCategory } from "../Classes";

@Component({
  selector: 'app-maincategory',
  templateUrl: './maincategory.component.html',
  styleUrls: ['./maincategory.component.css']
})
export class MaincategoryComponent implements OnInit {

  mainCategory: MainCategory;

  mainCategorylist  : any[];
  isEdit: boolean = false;


  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.mainCategory = new MainCategory();
   
    this.mainCategorylist = [];

  }
  OnSubmit() {
    console.log(this.mainCategory);
    this.service.AddMainCategory(this.mainCategory).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.mainCategory.MainCategoryImage1 = this.filesToUpload[0].name;
        this.mainCategory.MainCategoryImage2 = this.filesToUpload[1].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.mainCategory.MainCategoryImage1);
        formData.append('uploadedImage',this.filesToUpload[1],this.mainCategory.MainCategoryImage2);
        this.service.SaveMainCategoryImage(formData,result).subscribe(data => {
         
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
        this.mainCategory.MainCategoryImage1 = this.filesToUpload[i].name;
        this.mainCategory.MainCategoryImage2 = this.filesToUpload[i].name;
    } 
  }

  ngOnInit() {

  }
}


