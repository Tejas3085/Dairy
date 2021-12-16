
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-distributorlist',
  templateUrl: './distributorlist.component.html',
  styleUrls: ['./distributorlist.component.css']
})
export class DistributorlistComponent implements OnInit {
  isEdit : boolean;
  distributorList :any[];
SearchText: string;
imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.distributorList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllDistributor().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.distributorList.push(data);   
      }     
           console.log(this.distributorList);
    });
  }
  //Search
  Serach(): void {
    
   
    //  this.service.GetAllInstructor().subscribe((result) => {
    //    for (let data of result) {
    //      this.instructorList.push(data);  
    //    }
       this.distributorList = this.distributorList.filter(x => x.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()));
     //});
   
   }
   
   Reset(){
     this.distributorList = [];
   
     this.service.GetAllDistributor().subscribe((result) => {
       for (let data of result) {
         this.distributorList.push(data);
       }
     });
   }
View(){
  
}

  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteDistributor(Id).subscribe(result => {
      if (result == "Success") {
      this.distributorList = this.distributorList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
}

  Edit(Id): void{
    try {
      this.router.navigateByUrl("/updatedistributor/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 
  }
}




