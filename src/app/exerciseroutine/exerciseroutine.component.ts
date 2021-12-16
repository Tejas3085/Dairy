// import { Component, Injectable, OnInit } from "@angular/core";
// declare const $: any;
// import { Router, ActivatedRoute } from "@angular/router";
// import { HttpHeaders, HttpClient } from "@angular/common/http";
// import { WebServiceService } from "../user-profile/user-profile.component";
// import {Member,MemberHealthInfo } from "../Classes";
import { Component, Injectable, OnInit } from '@angular/core';
import { Member,MemberHealthInfo,Exercise,ExerciseRoutine,MainExercise,SubExercise } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';


@Component({
  selector: 'app-exerciseroutine',
  templateUrl: './exerciseroutine.component.html',
  styleUrls: ['./exerciseroutine.component.css']
})
export class ExerciseroutineComponent implements OnInit {
  isEdit: boolean= false;
  memberlist:any[];
  MainExerciselist:any[];
  SubExerciselist:any[];
  exerciselist:any[];
  exerciseRoutinelist:any[];
Id:any;
MemId:number;
member: Member;
MainExercise:MainExercise
SubExercise:SubExercise
ExerciseRoutine:ExerciseRoutine
MemberHealthInfo:MemberHealthInfo;
exercise:Exercise;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  { 

    this.member = new Member();
    this.MemberHealthInfo = new MemberHealthInfo();
  this.exercise=new Exercise();
  this.exercise.MainExercise=new MainExercise();
  this.exercise.SubExercise=new SubExercise();
   this.ExerciseRoutine = new ExerciseRoutine();

    this.memberlist = [];
   this.exerciselist=[];
   this.exerciseRoutinelist=[];
   this.MainExerciselist=[];
   this.SubExerciselist=[];
    this.route.params.subscribe((params) => {
      this.Id = params.id;
 
      this.service.GetMemberById(this.Id).subscribe((result) => {
    
        this.member = result;
        console.log(this.member);

    
      });

    });
    this.route.params.subscribe((params) => {
      this.Id = params.id;
      console.log(this.Id);
      this.service.GetMemberHealthInfoById(this.Id).subscribe((result) => {
    
        this.MemberHealthInfo = result;
        console.log(this.MemberHealthInfo);

    
      });

       
  
    });

    // this.route.params.subscribe((params) => {
    //   this.Id = params.id;
    //   console.log(this.Id);
    //   this.service.GetExerciseById(this.Id).subscribe((result) => {
    //     console.log(result);
    //     for(let data of result){
    //       this.exerciselist.push(data);   
    //   } 
    //     console.log(this.exerciselist);

    //   });

    // });
  
  }
  OnSubmit() {
    // console.log(this.member);
    // this.service.AddMember(this.member).subscribe((result) => {
    //   if (result == "Success") {
    //     alert("Saved Successfully");
    //   }
    //   if (result > 0) {
    //     const formData = new FormData();
    //     this.member.Photo = this.filesToUpload[0].name;
    //     formData.append('uploadedImage',this.filesToUpload[0],this.member.Photo);
    //     this.service.SaveMemberImage(formData,result).subscribe(data => {
    //       alert('Saved Successfully.');
    //     });       
    //   }
    //    else {
    //     alert("Something went wrong! Please try again.");
    //   }
    // });
    console.log(this.exercise);
    this.ExerciseRoutine.MemberId = this.Id ;
    this.service.AddExerciseRoutine(this.ExerciseRoutine).subscribe((result) => {
      if (result != "Success") {
        this.exerciseRoutinelist=[];
        this.route.params.subscribe((params) => {
          this.Id = params.id;
          console.log(this.Id);
          this.service.GetAllExerciseRoutine().subscribe((result) => {
            console.log(result);
            for(let data of result){
              this.exerciseRoutinelist.push(data);   
          } 
            console.log(this.exerciseRoutinelist);
    
          });
    
        });

        // alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });


  }

  OnAdd(){
    console.log(this.exercise);
    this.exercise.MemberId = this.Id ;
    this.service.AddExercise(this.exercise).subscribe((result) => {
      if (result != "Success") {
        this.exerciselist=[];
        this.route.params.subscribe((params) => {
          this.Id = params.id;
          console.log(this.Id);

          this.service.GetExerciseById(this.Id).subscribe((result) => {
            console.log(result);
            for(let data of result){
              this.exerciselist.push(data);   
          } 
            console.log(this.exerciselist);
    
          });
    
        });
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });

  
    // this.service.GetAllExercise().subscribe((result) => {
    //   // console.log(result);
    //   for(let data of result){
    //       this.exerciselist.push(data);   
    //   }     
    //       // console.log(this.organizationMasterList);
    // });

    // this.route.params.subscribe((params) => {
    //   this.Id = params.id;
    //   this.service.GetExerciseById(this.Id).subscribe((result) => {
    //     for(let data of result){
    //       this.exerciselist.push(data);   
    //   }   
      
    //   });
    
    //   });

  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteExerciseRoutine(Id).subscribe(result => {
      if (result == "Success") {
      this.exerciseRoutinelist = this.exerciseRoutinelist.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  Exercise(Id){
    try {
      this.router.navigateByUrl("/exercisereport/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

  Deletee(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteExercise(Id).subscribe(result => {
      if (result == "Success") {
      this.exerciselist = this.exerciselist.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
  MainExeChange(event) {
    console.log('UserId:', event.target.value);
    this.exercise.MainExercise.Id = event.target.value;
    this.getAllSubExercise();
  }
  SubExeChange(event) {
    console.log('SubexId:', event.target.value);
    this.exercise.SubExercise.Id = event.target.value;
   
  }

  GetAllMainExercise() {
    this.service.GetAllMainExercise().subscribe((result) => {
      for (let data of result) {
        this.MainExerciselist.push(data);
      }
      console.log("UserName" + this.MainExerciselist);
    });
  }
  
  getAllSubExercise() {
    let tmp = [];
    this.service.GetAllSubExercise().subscribe((result) => {
      for(let data of result) {
        tmp.push(data);
      }      
      console.log(tmp);
      console.log(this.exercise.MainExercise.Id);
      let list = tmp.filter(
        (tmp) => tmp.MainExercise.Id == this.exercise.MainExercise.Id)
        this.SubExerciselist = list;
        console.log(this.SubExerciselist);
    });
  }

  ngOnInit() { 
    this.GetAllMainExercise();
    // this.service.GetAllExercise().subscribe((result) => {
   
    //   for(let data of result){
    //       this.exerciselist.push(data);   
    //   }     
         
    // });

    this.exerciseRoutinelist=[];
    this.route.params.subscribe((params) => {
      this.Id = params.id;
      console.log(this.Id);
//
this.service.GetAllExerciseRoutine().subscribe((result) => {
  console.log(result);
  for(let data of result){
    this.exerciseRoutinelist.push(data);   
} 
  console.log(this.exerciseRoutinelist);

});

});

//
    //   this.service.GetExerciseById(this.Id).subscribe((result) => {
    //     console.log(result);
    //     for(let data of result){
    //       this.exerciselist.push(data);   
    //   } 
    //     console.log(this.exerciselist);

    //   });

    // });
  }
  // fileChangeEvent(fileInput: any){
  //   this.filesToUpload = <Array<File>>fileInput.target.files;
  //   this.selectedFileNames = [];
  //   for (let i = 0; i < this.filesToUpload.length; i++)
  //   {
  //       this.selectedFileNames.push(this.filesToUpload[i].name);
  //       this.member.Photo = this.filesToUpload[i].name;
  //   } 
  // }
  
}
