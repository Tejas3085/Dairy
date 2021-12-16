import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {MainExercise,SubExercise } from "../Classes";
@Component({
  selector: 'app-subecercise',
  templateUrl: './subecercise.component.html',
  styleUrls: ['./subecercise.component.css']
})
export class SubecerciseComponent implements OnInit {
  subExercise:SubExercise
  MainExercise: MainExercise;
  MainExerciselist:any[];

  isEdit: boolean = false;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute)  {
    this.subExercise = new SubExercise();

    this.subExercise.MainExercise=new MainExercise();
    this.MainExerciselist = [];
 
    
  }
  OnSubmit() {
    console.log(this.subExercise);
    this.service.AddSubExercise(this.subExercise).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }




  MainExeChange(event) {
    console.log('UserId:', event.target.value);
    this.subExercise.MainExercise.Id = event.target.value;
  }

  GetAllMainExercise() {
    this.service.GetAllMainExercise().subscribe((result) => {
      console.log(result);
      for (let data of result) {
        this.MainExerciselist.push(data);
      }
      console.log("UserName" + this.MainExerciselist);
    });
  }
  ngOnInit() {
    this.GetAllMainExercise();
  }
  
}




//
