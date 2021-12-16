import { Component, Injectable, OnInit } from '@angular/core';
import { WorkoutType } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-update-workout-type',
  templateUrl: './update-workout-type.component.html',
  styleUrls: ['./update-workout-type.component.css']
})
export class UpdateWorkoutTypeComponent implements OnInit {
  isEdit: boolean= false;
  workoutTypelist:any[];
Id:any;
workoutType: WorkoutType;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.workoutType = new WorkoutType();
    this.workoutTypelist = [];
   
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetWorkoutTypeById(this.Id).subscribe((result) => {
    
        this.workoutType = result;
        console.log(this.workoutType);

  
        console.log(this.workoutType);
      });

    });
    
  }
  
  OnSubmit(){
  
      this.service. UpdateWorkoutType(this.workoutType).subscribe((result) => {
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