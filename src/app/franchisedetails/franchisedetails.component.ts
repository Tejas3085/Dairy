import{ Businesstype, City, Franchisedetails, FranchisePhoto} from '../Classes';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
//declare var require: any;

@Component({
  selector: 'app-franchisedetails',
  templateUrl: './franchisedetails.component.html',
  styleUrls: ['./franchisedetails.component.css']
})
export class FranchisedetailsComponent implements OnInit {

  businessTypeList :any[];
  cityList: any[];
  franchisedetails: Franchisedetails;
  franchisePhoto: FranchisePhoto;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  Id: any;

  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.businessTypeList = [];
    this.cityList = [];
    this.franchisedetails = new Franchisedetails();
    this.franchisedetails.City = new City();
    this.franchisedetails.BusinessType = new Businesstype();
    this.franchisePhoto = new FranchisePhoto();
    this.franchisedetails.Photos = [];
  }

  CityChange(event) {
    this.franchisedetails.City.City_Id = event.target.value;
  }

  BusinessTypeChange(event) {
    this.franchisedetails.BusinessType.Business_Id = event.target.value;
  }

     //Onsubmit 
     OnSubmit(){
      
      this.franchisedetails.Status ="Active";

      this.service.AddFranchiseDetails(this.franchisedetails).subscribe((result) => {
        if (result > 0) {
          alert("Saved Successfully");   
          const formData = new FormData();
          this.service.SaveFranchiseImage(formData,result).subscribe(data => {
            alert('Uploaded Successfully.');
          });       
        } else {
          alert("Something went wrong! Please try again.");
        }
      });  
  }

    ngOnInit() {
      this.service.GetAllBusinessTypes().subscribe((result) => {
        for(let data of result){
            this.businessTypeList.push(data);   
        }     
      });

      this.service.GetAllCities().subscribe((result) => {
        for(let data of result){
            this.cityList.push(data);   
        }     
      });
    }

    fileChangeEvent(fileInput: any) {
        this.uploadResult = "";       
        this.filesToUpload = <Array<File>>fileInput.target.files;
        for (let i = 0; i < this.filesToUpload.length; i++)
        {
          let obj  = new FranchisePhoto();
          obj.Photo = this.filesToUpload[i].name;  
          this.franchisedetails.Photos.push(obj); 
        }
    }

}