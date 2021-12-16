import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.css']
})
export class SubcategorylistComponent implements OnInit {
  SubCategoryList:any[];
  constructor(private router: Router,  private http: HttpClient,private service:WebServiceService) {
   this.SubCategoryList=[]
   }

  ngOnInit(): void {
  this.service.GetAllSubCategory().subscribe((data)=>{
    console.log(data)
    this.SubCategoryList=data;
  })
}  

Delete(Id) {
  alert('Are you sure you want to delete?');
  this.service.DeleteSubCategory(Id).subscribe(result => {
    if (result == "Success") {
    this.SubCategoryList = this.SubCategoryList.filter(
      (item) => item.Id != Id);
    alert("Deleted Successfully");
  } else {
    alert("Somthing went wrong! please try again.");
  }
});
}
}




