import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-membership-plan-list',
  templateUrl: './membership-plan-list.component.html',
  styleUrls: ['./membership-plan-list.component.css']
})
export class MembershipPlanListComponent implements OnInit {
  isEdit : boolean;
  membershipplanList :any[];
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.membershipplanList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllMembershipPlan().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.membershipplanList.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteMembershipPlan(Id).subscribe(result => {
      if (result == "Success") {
      this.membershipplanList = this.membershipplanList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/update-membership-plan/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
