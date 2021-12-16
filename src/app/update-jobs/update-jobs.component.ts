// import { Component, OnInit } from '@angular/core';
// import { PostJobMaster } from '../Classes';
import { Component, Injectable, OnInit } from '@angular/core';
import { PostJobMaster, Country, State, City  } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core'

import { MatSelectModule } from '@angular/material/select'
import {

  HttpRequest,
  HttpEventType,
} from '@angular/common/http'
import { Data } from '@angular/router';



class Organization {
  public id: number;
  public name: string;
}

class Qualification {
  public id: number;
  public name: string;
}

class Age {
  public id: number;
  public name: string;
}

class JobLocation {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.css']
})
export class UpdateJobsComponent implements OnInit {

  postJob: PostJobMaster;
  cities: City[];
  city: City;
  states: State[];
  state: State;
  countries: Country[];
  country: Country;
  organizations: Organization[];
  organization: Organization;
  qualifications: Qualification[];
  qualification: Qualification;
  ages: Age[];
  age: Age;
  joblocations: JobLocation[];
  joblocation: JobLocation; 
  Cityname: any;
  Statename: any;
  Message: any;
  flag: boolean = false;
  confirmPassword: any;
  Id: any;
  
    constructor( private route: ActivatedRoute,  private router: Router,  private http: HttpClient, private service: WebServiceService) 
    { 
  
      this.postJob = new PostJobMaster();
      this.postJob.Country = new Country();
      this.postJob.State = new State();
      this.postJob.City = new City();
      this.cities = [];
      this.states = [];
      this.countries = [];
      this.organizations = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
      ];
      
      this.qualifications = [
        { id: 1, name: 'SSC' },
        { id: 2, name: 'HSC' },
        { id: 3, name: 'Graduate' },
      ];
      
      this.ages = [
        { id: 1, name: '23' },
        { id: 2, name: '25' },
        { id: 3, name: '27' },
      ]
      
      this.joblocations = [
        { id: 1, name: 'India' },
        { id: 2, name: 'USA' },
        { id: 3, name: 'Russia' },
      ]
      this.route.params.subscribe((params) => {
        this.Id = params.id;
        this.service.GetJobById(this.Id).subscribe((result) => {
          this.postJob = result;
          console.log(this.postJob);
        });
      });
  
  
      
    }
    CountryChange(event: any) {
     
      console.log('cou:', event.target.value);
      this.postJob.Country.Id = event.target.value;  
       this.getAllStates();
    }
  
    StateChange(event) {
      console.log('Sta:', event.target.value);
       this.postJob.State.State_Id = event.target.value;  
       this.getAllCities();
    }
  
    CityChange(event) {
      console.log('City:', event.target.value);
       this.postJob.City.City_Id = event.target.value;
  
    }
    getAllCopuntry() {
      this.service.GetAllCountries().subscribe((result) => {
        for(let data of result) {
          this.countries.push(data);
          
        }      
        console.log(this.countries);
      });
    }
  
    getAllStates() {
      let tmp = [];
      this.service.GetAllStates().subscribe((result) => {
        for(let data of result) {
          tmp.push(data);
        }      
        console.log(tmp);
        console.log(this.postJob.Country.Id);
        let list = tmp.filter(
          (tmp) => tmp.Country.Id == this.postJob.Country.Id)
          this.states = list;
          console.log(this.states);
      });
    }
  
    getAllCities() {
      let tmp = [];
      this.service.GetAllCities().subscribe((result) => {
        for(let data of result) {
          tmp.push(data);
        }   
        console.log(tmp)   
        let list = tmp.filter(
          (tmp) => tmp.State.Id == this.postJob.State.State_Id,)
          this.cities = list;
          console.log(this.cities);
      });
    }
  
  
    
  
    OnSubmit(){
      alert("gkhg")
      // parseInt(localStorage.getItem('OrgId'))
       this.postJob.OrganizationId = 2;
      // this.postJobMaster.CountryId = 1;
      // this.postJobMaster.CityId = 3;
      // this.postJobMaster.StateId = 2;
      this.postJob.Status = "Active";
      console.log(this.postJob);
  
      this.service.UpdatePostJob(this.postJob).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } 
      else {
        alert("Something went wrong! Please try again.");
      }
      });
    }
  
  
    onSubmit() {
    
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    }
  
  
    ngOnInit() {
      this.getAllCopuntry();
    }
  }