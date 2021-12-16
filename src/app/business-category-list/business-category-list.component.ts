import { Component, Injectable, OnInit } from '@angular/core';
declare const $: any;
import { Businesstype } from '../Classes';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-business-category-list',
  templateUrl: './business-category-list.component.html',
  styleUrls: ['./business-category-list.component.css']
})
export class BusinessCategoryListComponent implements OnInit {
  businesscategorylist:any[];
businesstype: Businesstype;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.businesscategorylist = [];
    this.businesstype = new Businesstype();
 
  }
 
  ngOnInit() {
    this.service.GetAllBusiness().subscribe((result) => {
      for(let data of result){
          this.businesscategorylist.push(data);   
      }     
      console.log(this.businesscategorylist)
    });
    }

    Edit(Id) {
      try {
        this.router.navigateByUrl("/update-business-category/" + Id);
      } catch (error) {
        alert("certi-" + error);
      } 
      }
  
    // Delete(Id) {
    //   alert('Are you sure you want to delete?');
    //   this.service.DeleteBusinessCategory(Id).subscribe(result => {
    //     if (result == "Success") {
    //     this.businesscategorylist = this.businesscategorylist.filter(
    //       (item) => item.Business_Id != Id);
    //     alert("Deleted Successfully");
    //   } else {
    //     alert("Somthing went wrong! please try again.");
    //   }
    // });
    // }
    Delete(Id) {
      alert('Are you sure you want to delete?');
      this.service.DeleteBusinessCategory(Id).subscribe(result => {
        if (result == "Success") {
        this.businesscategorylist = this.businesscategorylist.filter(
          (item) => item.Business_Id != Id);
        alert("Deleted Successfully");
      } else {
        alert("Somthing went wrong! please try again.");
      }
    });
    }

  
 
}