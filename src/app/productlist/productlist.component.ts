
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  isEdit : boolean;
ProductList :any[];
// distributorList :any[];
SearchText: string;
imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.ProductList = []
  // this.distributorList=[];

   }

  ngOnInit(): void {
     this.service.GetAllProducts().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.ProductList.push(data);   
      }     
           console.log(this.ProductList);
    });
  }
  //Search
  Serach() {
    
   
    //  this.service.GetAllInstructor().subscribe((result) => {
    //    for (let data of result) {
    //      this.instructorList.push(data);  
    //    }
      //  this.instructorList = this.instructorList.filter(x => x.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()));
     //});
   
   }
   
  //  Reset(){
  //    this.ProductList = [];
   
  //    this.service.GetAllInstructor().subscribe((result) => {
  //      for (let data of result) {
  //        this.ProductList.push(data);
  //      }
  //    });
  //  }
View(){
  
}


Delete(Id) {
  alert('Are you sure you want to delete?');
  this.service.DeleteProducts(Id).subscribe(result => {
    if (result == "Success") {
    this.ProductList = this.ProductList.filter(
      (item) => item.Id != Id);
    alert("Deleted Successfully");
  } else {
    alert("Somthing went wrong! please try again.");
  }
});
}
  // Delete(Id) {
  //   alert('Are you sure you want to delete?');
  //   this.service.DeleteInstructor(Id).subscribe(result => {
  //     if (result == "Success") {
  //     this.instructorList = this.instructorList.filter(
  //       (item) => item.Id != Id);
  //     alert("Deleted Successfully");
  //   } else {
  //     alert("Somthing went wrong! please try again.");
  //   }
  // });
  // }

//   Edit(Id){
//     try {
//       this.router.navigateByUrl("/update-instructor/" + Id);
//     } catch (error) {
//       alert("certi-" + error);
//     } 

//   }

}


