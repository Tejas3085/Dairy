import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {WorkoutType } from "../Classes";


@Component({
  selector: 'app-workout-type',
  templateUrl: './workout-type.component.html',
  styleUrls: ['./workout-type.component.css']
})
export class WorkoutTypeComponent implements OnInit {
  workoutType: WorkoutType;
  workoutTypelist  : any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.workoutType = new WorkoutType();
   

    this.workoutTypelist = [];






    
  }
  OnSubmit() {
    console.log(this.workoutType);
    this.service.AddWorkoutType(this.workoutType).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }




  
  ngOnInit() {

  }
  
}

