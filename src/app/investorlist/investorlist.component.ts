import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-investorlist',
  templateUrl: './investorlist.component.html',
  styleUrls: ['./investorlist.component.css']
})
export class InvestorlistComponent implements OnInit {
  isEdit : boolean;
  InvestorList :any[];
  constructor(private router: Router,  private service: WebServiceService) {
    this.InvestorList = [];
   }

  ngOnInit(): void {
    this.service.GetAllInvestor().subscribe((result) => {
      console.log(result);
      for(let data of result){
          this.InvestorList.push(data);   
      }     
          console.log(this.InvestorList);
    });
  }
  View(Id){
    try {
       this.router.navigateByUrl("/investordetails/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
