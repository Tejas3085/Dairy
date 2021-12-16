
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';


@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  isEdit : boolean;
instructorList :any[];
SearchText: string;
imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.instructorList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllInstructor().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.instructorList.push(data);   
      }     
           console.log(this.instructorList);
    });
  }
  //Search
  Serach() {
    
   
    //  this.service.GetAllInstructor().subscribe((result) => {
    //    for (let data of result) {
    //      this.instructorList.push(data);  
    //    }
       this.instructorList = this.instructorList.filter(x => x.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()));
     //});
   
   }
   
   Reset(){
     this.instructorList = [];
   
     this.service.GetAllInstructor().subscribe((result) => {
       for (let data of result) {
         this.instructorList.push(data);
       }
     });
   }
View(){
  
}

  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteInstructor(Id).subscribe(result => {
      if (result == "Success") {
      this.instructorList = this.instructorList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/update-instructor/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
