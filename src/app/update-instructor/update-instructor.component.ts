import { Component, Injectable, OnInit } from '@angular/core';
import { Instructor } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit {
  isEdit: boolean= false;
  memberHealthInfolist:any[];
Id:any;
instructor: Instructor;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.instructor = new Instructor();
    this.memberHealthInfolist = [];
   
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetInstructorById(this.Id).subscribe((result) => {
    
        this.instructor = result;
        console.log(this.instructor);

  
        console.log(this.instructor);
      });

    });
    
  }
  
  OnSubmit(){
  
      this.service. UpdateInstructor(this.instructor).subscribe((result) => {
        if (result == "Success") {

          alert("Saved Successfully");

        } else {
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
  
    }

}