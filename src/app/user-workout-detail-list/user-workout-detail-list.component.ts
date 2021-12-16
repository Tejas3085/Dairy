import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-workout-detail-list',
  templateUrl: './user-workout-detail-list.component.html',
  styleUrls: ['./user-workout-detail-list.component.css']
})
export class UserWorkoutDetailListComponent implements OnInit {

 
  isEdit : boolean;
  userWorkoutDetailList :any[];
  SearchText: string;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.userWorkoutDetailList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllUserWorkoutDetails().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.userWorkoutDetailList.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }

  Serach() {
       this.userWorkoutDetailList = this.userWorkoutDetailList.filter(x => x.Member.UserName.toLowerCase().includes(this.SearchText.toLowerCase()));
   }
   
   Reset(){
     this.userWorkoutDetailList = [];
   
     this.service.GetAllUserWorkoutDetails().subscribe((result) => {
       for (let data of result) {
         this.userWorkoutDetailList.push(data);
       }
     });
   }

  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteUserWorkoutDetails(Id).subscribe(result => {
      if (result == "Success") {
      this.userWorkoutDetailList = this.userWorkoutDetailList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/update-user-workout-details/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
