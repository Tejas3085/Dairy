import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriptionlist',
  templateUrl: './subscriptionlist.component.html',
  styleUrls: ['./subscriptionlist.component.css']
})
export class SubscriptionlistComponent implements OnInit {
  isEdit : boolean;
  SubscriptionList :any[];
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.SubscriptionList = []
   }

  ngOnInit(): void {
    this.service. GetAllSubscription().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.SubscriptionList.push(data);   

      }     
      console.log(this.SubscriptionList)

    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteSubscription(Id).subscribe(result => {
      if (result == "Success") {
      this.SubscriptionList = this.SubscriptionList.filter(
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

