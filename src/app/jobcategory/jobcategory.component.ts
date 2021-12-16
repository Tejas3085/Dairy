import { JobCategory } from '../Classes';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-jobcategory',
  templateUrl: './jobcategory.component.html',
  styleUrls: ['./jobcategory.component.css']
})
export class JobcategoryComponent implements OnInit {

  jobcategory: JobCategory;
  uploadResult: any;
  filesToUpload: Array<File>;
  selectedFileNames: string[] = [];

  constructor(private router: Router, private http: HttpClient, private service: WebServiceService) {
    this.jobcategory = new JobCategory()
  }

  OnSubmit() {
    this.service.AddJobCategory(this.jobcategory).subscribe((result) => {
      if (result > 0) {
        //alert("Saved Successfully");
        const formData = new FormData();
        this.jobcategory.JobCatIcon = this.filesToUpload[0].name;
        formData.append('uploadedImage',this.filesToUpload[0],this.jobcategory.JobCatIcon );
        this.service.SaveJobCategoryImage(formData,result).subscribe(data => {
          alert('Saved Successfully.');
        });       
      }
      else {
        alert("Something went wrong! Please try again.");
      }
    });
  }

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.selectedFileNames = [];
    for (let i = 0; i < this.filesToUpload.length; i++)
    {
        this.selectedFileNames.push(this.filesToUpload[i].name);
        this.jobcategory.JobCatIcon = this.filesToUpload[i].name;
    } 
  }
}