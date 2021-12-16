import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {ProductInstructions } from "../Classes";

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  productInstructions: ProductInstructions;

  productInstructionslist  : any[];
  isEdit: boolean = false;


  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.productInstructions = new ProductInstructions();
   
    this.productInstructionslist = [];

  }
  OnSubmit() {
    console.log(this.productInstructions);
    this.service.AddProductInstructions(this.productInstructions).subscribe((result) => {
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



