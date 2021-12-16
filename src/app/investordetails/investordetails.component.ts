import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Applicationdetails, Franchisedetails, Investor, InvestorDetails,City, State } from 'app/Classes';
import { WebServiceService } from 'app/user-profile/user-profile.component';

import { Routes, RouterModule } from "@angular/router";
@Component({
  selector: 'app-investordetails',
  templateUrl: './investordetails.component.html',
  styleUrls: ['./investordetails.component.css']
})
export class InvestordetailsComponent implements OnInit {
  model: any = {};
 
  investordetails: InvestorDetails;
  constructor(private router: Router, private service: WebServiceService, private http: HttpClient, private route: ActivatedRoute) { 
    this.investordetails = new InvestorDetails();
    this.investordetails.Applicationdetails = new Applicationdetails();
    this.investordetails.Franchisedetails = new Franchisedetails()
    //this.migration = new Migration();
    this.investordetails.City = new City();
    this.investordetails.State = new State();

    this.route.params.subscribe((params) => {
      this.investordetails.Id = params.id;
     // alert( params.id);
       alert( this.investordetails.Id);
      this.service.GetInvestorDetailsById(this.investordetails.Id).subscribe((result) => {
        this.investordetails = result;
        console.log(this.investordetails);
        console.log(this.investordetails.FName);
      });
    }); }

  ngOnInit(): void {
  } 

}