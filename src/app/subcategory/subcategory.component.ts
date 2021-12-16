import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {SubCategory } from "../Classes";

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  subCategory: SubCategory;

  subCategorylist  : any[];
  isEdit: boolean = false;


  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.subCategory = new SubCategory();
   
    this.subCategorylist = [];

  }
  OnSubmit() {
    console.log(this.subCategory);
    this.service.AddSubCategory(this.subCategory).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.subCategory.SubCategoryImage1 = this.filesToUpload[0].name;
        this.subCategory.SubCategoryImage2 = this.filesToUpload[1].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.subCategory.SubCategoryImage1);
        formData.append('uploadedImage',this.filesToUpload[1],this.subCategory.SubCategoryImage2);
        this.service.SaveSubCategoryImage(formData,result).subscribe(data => {
         
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
        this.subCategory.SubCategoryImage1 = this.filesToUpload[i].name;
        this.subCategory.SubCategoryImage2 = this.filesToUpload[i].name;
    } 
  }

  ngOnInit() {

  }
}