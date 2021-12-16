import { Component, Injectable, OnInit } from '@angular/core';
import { PostJobMaster, Country, State, City, JobCategory,OrganizationMaster } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';

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
  selector: 'app-updatepostjob',
  templateUrl: './updatepostjob.component.html',
  styleUrls: ['./updatepostjob.component.css']
})
export class UpdatepostjobComponent implements OnInit {
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
Id: any;
year: string;
month: string;
selectedyear:string;
selectedMonth: string;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,  private route: ActivatedRoute) 
  { 

    this.postJob = new PostJobMaster();
    this.postJob.Country = new Country();
    this.postJob.State = new State();
    this.postJob.City = new City();
    this.postJob.Organization = new OrganizationMaster();
    this.postJob.JobCategory = new JobCategory();
    this.cities = [];
    this.OrganizationMasters=[];
    this.JobCategories=[];
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
      //  alert(this.Id);
      this.service.GetJobById(this.Id).subscribe((result) => {
        // alert(12);
        this.postJob = result;
        console.log(this.postJob);
  
      });
    });
    this.service.GetAllOrganizationMaster().subscribe((result) => {
      for(let data of result) {
        this.OrganizationMasters.push(data);
        
      }      
      console.log(this.OrganizationMasters);
    });
    
  }
  CountryChange(event: any) {
   
    console.log('cou:', event.target.value);
    this.postJob.Country.Id = event.target.value;  
    // this.getAllStates();

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
    console.log('on:', event.target.value);
    this.month = event.target.value + " months";    
  }

  StateChange(event) {
    console.log('Sta:', event.target.value);
     this.postJob.State.State_Id = event.target.value;  
    //  this.getAllCities();
  }

  CityChange(event) {
    console.log('City:', event.target.value);
     this.postJob.City.City_Id = event.target.value;

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
    this.postJob.Experiance = this.selectedyear + " " + "Years" + " " + this.selectedMonth + " " + "Months";  
    console.log(this.postJob.Experiance)
    // parseInt(localStorage.getItem('OrgId'))
     //this.postJob.OrganizationId = 2;
    //  this.postJob.Experiance = this.year.concat(this.month.toString());
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
    this.getAllCountry();
    this.getAllStates();
    this.getAllCities();
    this.getAllJobCategory();
    // this.getAllOrganizationMaster();

  }
}