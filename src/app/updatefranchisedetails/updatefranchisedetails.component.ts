import{Franchisedetails,FranchisePhoto,Businesstype, City} from '../Classes';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-updatefranchisedetails',
  templateUrl: './updatefranchisedetails.component.html',
  styleUrls: ['./updatefranchisedetails.component.css']
})
export class UpdatefranchisedetailsComponent implements OnInit {
  isEdit : boolean;
  businessTypeList :any[];
  BusinessType: Businesstype;
  cityList: any[];
  franchisedetails: Franchisedetails;
  franchisePhoto: FranchisePhoto;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  Id: any;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute
    ) 
  { 
    this.businessTypeList = [];
    this.cityList = [];
    this.franchisedetails = new Franchisedetails();
    this.franchisedetails.City = new City();
    this.franchisedetails.BusinessType = new Businesstype();
    this.franchisePhoto = new FranchisePhoto();
    this.franchisedetails.Photos = [];
    this.route.params.subscribe((params) => {
      this.Id = params.id;
      //  alert(this.Id);
      this.service.GetFranchiseDetailsById(this.Id).subscribe((result) => {
        // for(let data of result) {
          // this.franchisedetails = result;
        // }
       
        // console.log(this.franchisedetails);
        console.log(result);
        this.franchisedetails = result[0];
      });

     });

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


    //  OnSubmit(){
    //   alert("success")
    //   // parseInt(localStorage.getItem('OrgId'))
    //   this.franchisedetails.Photo1 ="abc.jpg";
    //   this.franchisedetails.Photo2 ="abc.jpg";
    //   this.franchisedetails.Photo3 ="abc.jpg";

      
    //  // console.log(this.franchisedetails)
    //    console.log(this.franchisedetails)
    //    console.log(this.franchisedetails)
    //  this.service.AddFranchiseDetails(this.franchisedetails).subscribe((result) => {
    //   if (result > 0) {
    //     alert("Saved Successfully");
    //   } 
    //   else {
    //     alert("Something went wrong! Please try again.");
    //   }
    //   });
    // }

     //Onsubmit 
     OnSubmit(){
      
        this.service.UpdateFranchiseDetails(this.franchisedetails).subscribe((result) => {
          if (result == "Success") {

            alert("Saved Successfully");
  
          } else {
            alert("Something went wrong! Please try again.");
          }
        });

    
  }
  //Edit 
  Edit(Id) {
  

  }


  CityChange(event) {
    this.franchisedetails.City.City_Id = event.target.value;
  }

  BusinessTypeChange(event) {
    this.franchisedetails.BusinessType.Business_Id = event.target.value;
  }
   
  


    ngOnInit() {
 
    }

    fileChangeEvent(fileInput: any) {
      //let path = require('path');
        this.uploadResult = "";
        const formData = new FormData();
        
        this.filesToUpload = <Array<File>>fileInput.target.files;
        this.service.SaveFranchiseImage(formData,this.Id).subscribe(data => {
          alert('Uploaded Successfully.');
        });
        for (let i = 0; i < this.filesToUpload.length; i++)
        {
          let obj  = new FranchisePhoto();
          obj.Photo = this.filesToUpload[i].name;  
          alert(obj.Photo);
          this.franchisedetails.Photos.push(obj); 
        }
        console.log(this.franchisePhoto);
    }
  }