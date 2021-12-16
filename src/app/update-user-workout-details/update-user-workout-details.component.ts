import { Component, Injectable, OnInit } from '@angular/core';
import { UserWorkoutDetails,Member,WorkoutType,Instructor } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-update-user-workout-details',
  templateUrl: './update-user-workout-details.component.html',
  styleUrls: ['./update-user-workout-details.component.css']
})
export class UpdateUserWorkoutDetailsComponent implements OnInit {
  isEdit: boolean= false;
  userWorkoutDetailslist:any[];
  UserNames:any[];
  WorkoutTypes:any[];
  Instructors:any[];
Id:any;
userWorkoutDetails: UserWorkoutDetails;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 
    
    this.userWorkoutDetails = new UserWorkoutDetails();
    this.userWorkoutDetails.Member = new Member();
    this.userWorkoutDetails.WorkoutType = new WorkoutType();
    this.userWorkoutDetails.Instructor = new Instructor();
    this.UserNames = [];
    this.WorkoutTypes = [];
    this.Instructors = [];
    this.userWorkoutDetailslist = [];
   
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetUserWorkoutDetailsById(this.Id).subscribe((result) => {
    
        this.userWorkoutDetails = result;
        console.log(this.userWorkoutDetails);

  
        console.log(this.userWorkoutDetails);
      });

    });
    
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

  OnSubmit(){
  
      this.service. UpdateUserWorkoutDetails(this.userWorkoutDetails).subscribe((result) => {
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
    this.getAllMember();
    this.getAllWorkoutType();
    this.getAllInstructor();
    }

}