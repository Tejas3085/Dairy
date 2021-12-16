import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-type-list',
  templateUrl: './workout-type-list.component.html',
  styleUrls: ['./workout-type-list.component.css']
})
export class WorkoutTypeListComponent implements OnInit {

  isEdit : boolean;
  workoutTypeList :any[];
  SearchText:string;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.workoutTypeList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllWorkoutType().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.workoutTypeList.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }

  Serach() {
    
   
    //  this.service.GetAllInstructor().subscribe((result) => {
    //    for (let data of result) {
    //      this.instructorList.push(data);  
    //    }
       this.workoutTypeList = this.workoutTypeList.filter(x => x.Name.toLowerCase().includes(this.SearchText.toLowerCase()));
     //});
   
   }
   
   Reset(){
     this.workoutTypeList = [];
   
     this.service.GetAllWorkoutType().subscribe((result) => {
       for (let data of result) {
         this.workoutTypeList.push(data);
       }
     });
   }

  
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteWorkoutType(Id).subscribe(result => {
      if (result == "Success") {
      this.workoutTypeList = this.workoutTypeList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/update-workout-type/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }





  

}
// $(function() {
//   $("#exporttable").click(function(e){
//   var table = $("#htmltable");
//   if(table && table.length){
//   $(table).table2excel({
//   exclude: ".noExl",
//   name: "Excel Document Name",
//   filename: "BBBootstrap" + new Date().toISOString().replace(/[\-\:\.]/g, "") + ".xls",
//   fileext: ".xls",
//   exclude_img: true,
//   exclude_links: true,
//   exclude_inputs: true,
//   preserveColors: false
//   });
//   }
//   });
  
//   });