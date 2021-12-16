import{JobCategory} from '../Classes';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-update-job-category',
  templateUrl: './update-job-category.component.html',
  styleUrls: ['./update-job-category.component.css']
})
export class UpdateJobCategoryComponent implements OnInit {
  jobcategory : JobCategory;
  Id: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];
  imgPath: string = GlobalVariable.BASE_API_URL;

  constructor( private route: ActivatedRoute, private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.jobcategory = new JobCategory();

    this.route.params.subscribe((params) => {
      this.Id = params.id;
      this.service.GetJobCategoryById(this.Id).subscribe((result) => {
        this.jobcategory = result;
      });

    });

  }

     OnSubmit(){

      this.service.UpdateJobCategory(this.jobcategory).subscribe((result) => {
        if (result == 0) {
          alert("Something went wrong! Please try again.");
        } else {
          alert('Uploaded Successfully.');          
       }

      });
    }
  
    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
      this.selectedFileNames =[];
      for (let i = 0; i < this.filesToUpload.length; i++)
      {
          this.selectedFileNames.push(this.filesToUpload[i].name);
          this.jobcategory.JobCatIcon = this.filesToUpload[i].name;//path.basename(this.filesToUpload[i].name);// read file as data url
      } 
    }

    ngOnInit() {
    }
  }