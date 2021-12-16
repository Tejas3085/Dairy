import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {ProductOffer } from "../Classes";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  productOffer: ProductOffer;

  productOfferlist  : any[];
  isEdit: boolean = false;


  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.productOffer = new ProductOffer();
   
    this.productOfferlist = [];

  }
  OnSubmit() {
    console.log(this.productOffer);
    this.service.AddProductOffer(this.productOffer).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.productOffer.OfferImage = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.productOffer.OfferImage);
        this.service.SaveProductOfferImage(formData,result).subscribe(data => {
         
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
        this.productOffer.OfferImage = this.filesToUpload[i].name;
    } 
  }

  ngOnInit() {

  }
}


