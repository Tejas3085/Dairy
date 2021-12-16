import{Franchisedetails} from '../Classes';


// import { Component, Injectable, OnInit } from '@angular/core';
// declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
@Component({
  selector: 'app-franchisedetailslist',
  templateUrl: './franchisedetailslist.component.html',
  styleUrls: ['./franchisedetailslist.component.css']
})
export class FranchisedetailslistComponent implements OnInit {
  isEdit : boolean;
  franchisedetailsList :any[];


  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.franchisedetailsList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllFranchiseDetails().subscribe((result) => {
      console.log(result);
      // let list = result.filter(
      //   (result) => result.Id == this.franchisedetails.Id,)
      for(let data of result){
          this.franchisedetailsList.push(data);   
      }     
          console.log(this.franchisedetailsList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteFranchiseDetails(Id).subscribe(result => {
      if (result == "Success") {
      this.franchisedetailsList = this.franchisedetailsList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/updatefranchisedetails/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
