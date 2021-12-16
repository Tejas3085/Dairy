import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-usersubscriptiondetailslist',
  templateUrl: './usersubscriptiondetailslist.component.html',
  styleUrls: ['./usersubscriptiondetailslist.component.css']
})
export class UsersubscriptiondetailslistComponent implements OnInit {
  isEdit : boolean;
  userPlanDetailList :any[];
  SearchText:string;
  EndDate1:string;
  StartDate1:string;

  
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.userPlanDetailList = []
  
   }

  ngOnInit(): void {
    
    this.service.GetAllUserPlanDetails().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.userPlanDetailList.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteUserPlanDetails(Id).subscribe(result => {
      if (result == "Success") {
      this.userPlanDetailList = this.userPlanDetailList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Serach() {
    
   
    this.userPlanDetailList = this.userPlanDetailList.filter(x => x.Member.UserName.toLowerCase().includes(this.SearchText.toLowerCase()));


}

Select() {
    
   
  this.userPlanDetailList = this.userPlanDetailList.filter(x => x.StartDate.toLowerCase()>=(this.StartDate1.toLowerCase()) &&  x.StartDate.toLowerCase()<=(this.EndDate1.toLowerCase()) );
  //
console.log(this.userPlanDetailList);
}

Reset(){
this.userPlanDetailList = [];

this.service.GetAllUserPlanDetails().subscribe((result) => {
 for (let data of result) {
   this.userPlanDetailList.push(data);
 }
});
}


  Edit(Id){
    try {
      this.router.navigateByUrl("/update-user-plan-details/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

  
  Payment(Id){
    try {
      this.router.navigateByUrl("/payment-history/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
