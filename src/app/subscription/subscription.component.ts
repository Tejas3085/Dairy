import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {Subscription } from "../Classes";


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  subscription: Subscription;

  subscriptionlist  : any[];
  isEdit: boolean = false;


  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.subscription = new Subscription();
   
    this.subscriptionlist = [];

  }
  OnSubmit() {
    console.log(this.subscription);
    this.service.AddSubscription(this.subscription).subscribe((result) => {
      if (result > 0) {
        const formData = new FormData();
        this.subscription.Image = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.subscription.Image);
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
        this.subscription.Image = this.filesToUpload[i].name;
    } 
  }

  ngOnInit() {

  }
}


