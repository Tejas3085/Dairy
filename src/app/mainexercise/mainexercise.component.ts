import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {MainExercise,SubExercise } from "../Classes";

@Component({
  selector: 'app-mainexercise',
  templateUrl: './mainexercise.component.html',
  styleUrls: ['./mainexercise.component.css']
})
export class MainexerciseComponent implements OnInit {
  mainExercise: MainExercise;

  mainExerciselist  : any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.mainExercise = new MainExercise();


    this.mainExerciselist = [];






    
  }
  OnSubmit() {
    console.log(this.mainExercise);
    this.service.AddMainExercise(this.mainExercise).subscribe((result) => {
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




//
