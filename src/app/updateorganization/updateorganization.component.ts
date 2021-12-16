import { Component, OnInit, ViewChild } from '@angular/core';
import { OrganizationMaster, Country, State, City, OrgType } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-updateorganization',
  templateUrl: './updateorganization.component.html',
  styleUrls: ['./updateorganization.component.css']
})
export class UpdateorganizationComponent implements OnInit {
  organizationMaster: OrganizationMaster
  cities: any[];
  states: any[];
  countries: any[];
  OrgTypes: any[];
  Cityname: any;
  Statename: any;
  Message: any;
  flag: boolean = false;
  confirmPassword: any;
  Id: any;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private service: WebServiceService, private http: HttpClient) {
    this.organizationMaster = new OrganizationMaster();
    this.organizationMaster.City = new City()
    this.organizationMaster.OrgType = new OrgType();
    this.organizationMaster.State = new State()
    this.organizationMaster.Country = new Country()
    this.countries = [];
    this.cities = [];
    this.states = [];
    this.OrgTypes = [];

    this.route.params.subscribe((params) => {
      this.Id = params.id;
      this.service.GetOrganizationMasterById(this.Id).subscribe((result) => {
        this.organizationMaster = result;
      });
    });

  }

  OrgTypeChange(event) {
    this.organizationMaster.OrgType.Id = event.target.value;
  }

  getAllOrgTypes() {
    this.service.GetAllOrgTypes().subscribe((result) => {
      for (let data of result) {
        this.OrgTypes.push(data);
      }
    });
  }

  CountryChange(event: any) {
    this.organizationMaster.Country.Id = event.target.value;
    // this.getAllStates();
  }

  StateChange(event) {
    this.organizationMaster.State.State_Id = event.target.value;
    // this.getAllCities();
  }

  CityChange(event) {
    this.organizationMaster.City.City_Id = event.target.value;
  }
  getAllCountry() {
    this.service.GetAllCountries().subscribe((result) => {
      for (let data of result) {
        this.countries.push(data);
      }
    });
  }

  getAllStates() {
    let tmp = [];
    this.service.GetAllStates().subscribe((result) => {
      for (let data of result) {
        tmp.push(data);
      }
      let list = tmp.filter(
        (tmp) => tmp.Country.Id == this.organizationMaster.Country.Id)
      this.states = list;
    });
  }

  getAllCities() {
    let tmp = [];
    this.service.GetAllCities().subscribe((result) => {
      for (let data of result) {
        tmp.push(data);
      }
      let list = tmp.filter(
        (tmp) => tmp.State.State_Id == this.organizationMaster.State.State_Id)
      this.cities = list;
    });
  }

  OnSubmit() {
    this.service.UpdateOrganization(this.organizationMaster).subscribe((result) => {
      if (result == "Success") {

        if(this.filesToUpload.length>0)
        {
          const formData = new FormData();
          this.organizationMaster.Photo = this.filesToUpload[0].name;
          formData.append('uploadedImage',this.filesToUpload[0],this.organizationMaster.Photo);
          this.service.SaveOrganizationImage(formData,this.Id).subscribe(data => {
            alert('Saved Successfully.');
          }); 
        }
        else
        {
          alert('Saved Successfully.');
        }
        
      }
      else {
        alert("Something went wrong! Please try again.")
      }
    });


  }

  ngOnInit(): void {
    this.getAllCountry();
    this.getAllStates();
    this.getAllCities();
    this.getAllOrgTypes();
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++) {
      this.selectedFileNames.push(this.filesToUpload[i].name);
      this.organizationMaster.Photo = this.filesToUpload[i].name;
    }
  }

}
