import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {Products } from "../Classes";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // instructor: Instructor;
  products: Products;

  // instructorlist  : any[];
  productslist  : any[];
  
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
    this.products = new Products();
    this.productslist = [];

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
    console.log(this.products);
    this.service.AddProducts(this.products).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.products.ProductImage1 = this.filesToUpload[0].name;
        this.products.ProductImage2 = this.filesToUpload[1].name;
        this.products.ProductImage3 = this.filesToUpload[2].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.products.ProductImage1);
        formData.append('uploadedImage',this.filesToUpload[1],this.products.ProductImage2);
        formData.append('uploadedImage',this.filesToUpload[2],this.products.ProductImage3);
        this.service.SaveProductsImage(formData,result).subscribe(data => {
         
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
        this.products.ProductImage1 = this.filesToUpload[i].name;
        this.products.ProductImage2 = this.filesToUpload[i].name;
        this.products.ProductImage3 = this.filesToUpload[i].name;
    } 
  }




  
  ngOnInit() {




    
  }
}
