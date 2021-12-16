import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {UserWorkoutDetails,Member,WorkoutType,Instructor } from "../Classes";

@Component({
  selector: 'app-user-workout-details',
  templateUrl: './user-workout-details.component.html',
  styleUrls: ['./user-workout-details.component.css']
})
export class UserWorkoutDetailsComponent implements OnInit {

  userWorkoutDetails: UserWorkoutDetails;

  userWorkoutDetailslist  : any[];
  isEdit: boolean = false;
  UserNames:any[];
  WorkoutTypes:any[];
  Instructors:any[];
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.userWorkoutDetails = new UserWorkoutDetails();
    this.userWorkoutDetails.Member = new Member();
    this.userWorkoutDetails.WorkoutType = new WorkoutType();
    this.userWorkoutDetails.Instructor = new Instructor();
    this.UserNames = [];
    this.WorkoutTypes = [];
    this.Instructors = [];
    this.userWorkoutDetailslist = [];

  }

  
  UserChange(event) {
    console.log('UserId:', event.target.value);
    this.userWorkoutDetails.Member.Id = event.target.value;
  }

  getAllMember() {
    this.service.GetAllMember().subscribe((result) => {
      for (let data of result) {
        this.UserNames.push(data);
      }
      console.log("UserName" + this.UserNames);
    });
  }

  WorkoutChange(event) {
    console.log('workoutId:', event.target.value);
    this.userWorkoutDetails.WorkoutType.Id = event.target.value;
  }

  getAllWorkoutType() {
    this.service.GetAllWorkoutType().subscribe((result) => {
      for (let data of result) {
        this.WorkoutTypes.push(data);
      }
      console.log("WorkoutType" + this.WorkoutTypes);
    });
  }

  InstructorChange(event) {
    console.log('instructorId:', event.target.value);
    this.userWorkoutDetails.Instructor.Id = event.target.value;
  }

  getAllInstructor() {
    this.service.GetAllInstructor().subscribe((result) => {
      for (let data of result) {
        this.Instructors.push(data);
      }
      console.log("Instructor" + this.Instructors);
    });
  }

  OnSubmit() {
    console.log(this.userWorkoutDetails);
    this.service.AddUserWorkoutDetails(this.userWorkoutDetails).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }

  ngOnInit() {
this.getAllMember();
this.getAllWorkoutType();
this.getAllInstructor();
  }
}

