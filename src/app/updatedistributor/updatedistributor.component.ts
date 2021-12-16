import { Component, Injectable, OnInit } from '@angular/core';
import { MembershipPlan } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
@Component({
  selector: 'app-updatedistributor',
  templateUrl: './updatedistributor.component.html',
  styleUrls: ['./updatedistributor.component.css']
})
export class UpdatedistributorComponent implements OnInit {
Id:any
distributor:any=[]

  constructor( private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute ) 
  {
 this.route.params.subscribe((params) => {
      this.Id = params.id;
  console.log(this.Id)
      this.service.GetDistributorById(this.Id).subscribe((result) => {
      //  console.log(result)
       
        this.distributor=result;
       console.log(this.distributor)
      
         });

    });
}
OnSubmit(){
  
  this.service. UpdateDistributorById(this.distributor).subscribe((result) => {
    if (result == "Success") {

      alert("Saved Successfully");

    } else {
      alert("Something went wrong! Please try again.");
    }
  });

}


  ngOnInit(): void {
   
  }
   
}

