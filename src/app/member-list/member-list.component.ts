
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  isEdit : boolean;
  memberList :any[];
  SearchText: string;
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.memberList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllMember().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.memberList.push(data);   
      }     
           console.log(this.memberList);
    });
  }
//Search 
Serach() {
 // this.memberList = []

  // this.service.GetAllMember().subscribe((result) => {
  //   for (let data of result) {
  //     this.memberList.push(data);  
  //   }
    this.memberList = this.memberList.filter(x => x.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()));
  // });

}

Reset(){
  this.memberList = [];

  this.service.GetAllMember().subscribe((result) => {
    for (let data of result) {
      this.memberList.push(data);
    }
  });
}

View(Id){


}


  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteMember(Id).subscribe(result => {
      if (result == "Success") {
      this.memberList = this.memberList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/update-member/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

  Exercise(Id){
    try {
      this.router.navigateByUrl("/exerciseroutine/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }
  
  DietPlan(Id){
    try {
      this.router.navigateByUrl("/diet-plan/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
