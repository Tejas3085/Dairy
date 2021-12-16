// import { Component, OnInit } from '@angular/core';
// import { PostJobMaster } from '../Classes';
import { Component, Injectable, OnInit } from '@angular/core';
import { PostJobMaster, Country, State, City, JobCategory,OrganizationMaster } from '../Classes';
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
import {FormControl} from '@angular/forms';


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
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css'],
  
})

export class PostjobComponent implements OnInit {
  disableSelect = new FormControl(false);
postJob: PostJobMaster;
cities: City[];
city: City;
states: State[];
state: State;
JobCategory:JobCategory[];
OrganizationMaster:OrganizationMaster[];
OrganizationMasters:OrganizationMaster[];
JobCategories:JobCategory[];
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
locationList: any[];
year: string;
month: string;
selectedyear:string;
selectedMonth: string;


  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 

    this.postJob = new PostJobMaster();
    this.postJob.Country = new Country();
    this.postJob.State = new State();
    this.postJob.City = new City();
    this.postJob.Organization=new OrganizationMaster();
    this.postJob.JobCategory=new JobCategory();
    this.cities = [];
    this.OrganizationMasters=[];
    this.JobCategories=[];
    this.states = [];
    this.countries = [];
    this.locationList = [];
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
    


    
  }
  CountryChange(event: any) {
   
    console.log('cou:', event.target.value);
    this.postJob.Country.Id = event.target.value;  
     this.getAllStates();
  }

  JobCategoryChange(event: any) {
   
    console.log('jc:', event.target.value);
    this.postJob.JobCategory.JobCategory_Id = event.target.value;  
     
  }

  
  OrganizationChange(event: any) {
    console.log('on:', event.target.value);
    this.postJob.Organization.Id = event.target.value;    
  }

  YearChange(event: any) {
    console.log('on:', event.target.value);
    this.year = event.target.value + " years";    
  }

  MonthChange(event: any) {
    alert(event.target.value)
    console.log('on:', event.target.value);
    this.month = event.target.value + " months";    
  }

  StateChange(event) {
    console.log('Sta:', event.target.value);
     this.postJob.State.State_Id = event.target.value;  
     this.getAllCities();
  }

  CityChange(event) {
    console.log('City:', event.target.value);
     this.postJob.City.City_Id = event.target.value;
    //  this.postJob.City.CityName = event.target.CityName;
    //  console.log('CityName:',this.postJob.City.CityName);

  }
  getAllCountry() {
    this.service.GetAllCountries().subscribe((result) => {
      for(let data of result) {
        this.countries.push(data);
        
      }      
      console.log(this.countries);
    });
  }

  getAllJobCategory() {
    this.service.GetAllJobCategory().subscribe((result) => {
      for(let data of result) {
        this.JobCategories.push(data);
        
      }      
      console.log(this.JobCategories);
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
        this.locationList.push(data);
      }   
      console.log(tmp)   
      this.cities = tmp.filter(
        (tmp) => tmp.State.State_Id == this.postJob.State.State_Id)
        // this.cities = list;
        console.log(this.cities);
    });
  }


  

  OnSubmit(){
    // alert("Submit")
    // this.year =   " years";  
    // this.month =   " months"; 
    this.postJob.Experiance = this.selectedyear + " " + "Years" + " " + this.selectedMonth + " " + "Months";  
    console.log(this.postJob.Experiance)
    this.locationList = this.locationList.filter(
      (tmp) => tmp.City_Id == this.postJob.City.City_Id)

     //this.postJob.OrganizationId = 2;
      console.log(this.postJob);
      // this.postJob.Experiance = this.year.concat(this.month.toString());
      this.postJob.Status = "Active";
    this.service.AddPostJob(this.postJob).subscribe((result) => {
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
    this.getAllCountry();
    this.getAllJobCategory();
    // this.getAllOrganizationMaster();
    this.service.GetAllOrganizationMaster().subscribe((result) => {
      for(let data of result) {
        this.OrganizationMasters.push(data);
        
      }      
      console.log(this.OrganizationMasters);
    });
  }
}