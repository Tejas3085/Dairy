import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {ProductSpecification } from "../Classes";


@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit  {

  productSpecification: ProductSpecification;

  productSpecificationlist  : any[];
  isEdit: boolean = false;


  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.productSpecification = new ProductSpecification();
   
    this.productSpecificationlist = [];

  }
  OnSubmit() {
    console.log(this.productSpecification);
    this.service.AddProductSpecifications(this.productSpecification).subscribe((result) => {
      if (result == "Success") {
       
        alert("Something went wrong! Please try again.")
      }
      else {
        alert("Saved Successfully");
      }
    });
  }


  ngOnInit() {

  }
}



