import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import {  Inject } from '@angular/core';


import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';
@Component({
  selector: 'app-specificationlist',
  templateUrl: './specificationlist.component.html',
  styleUrls: ['./specificationlist.component.css']
})
export class SpecificationlistComponent implements OnInit {
ProductSpecificationList:any[]
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceService) {
   this.ProductSpecificationList=[];
   }

  ngOnInit(): void {
  
     this.service.GetAllProductSpecification().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.ProductSpecificationList.push(data);   
      }     
           console.log(this.ProductSpecificationList);
    });
  }
  
    Delete(Id) {
      alert('Are you sure you want to delete?');
      this.service.DeleteProductSpecification(Id).subscribe(result => {
        if (result == "Success") {
        this.ProductSpecificationList = this.ProductSpecificationList.filter(
          (item) => item.Id != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }
  }
  





