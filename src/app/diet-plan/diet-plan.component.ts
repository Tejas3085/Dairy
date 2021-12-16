import { Component, OnInit } from '@angular/core';

import { DietPlan,DietTable,MemberHealthInfo,Member} from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalVariable, uses } from "../Globals";
@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent implements OnInit {
  dietPlan:DietPlan
  DietTable:DietTable
  dietTablelist:any[];
  Id:any;
  UserNames:any[];
  member: Member;
  dietPlanlist:any[];
  MemberHealthInfo:MemberHealthInfo;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router, private service: WebServiceService, private http: HttpClient)  { 
  this.dietPlan = new DietPlan();
  this.member = new Member();
  this.DietTable = new DietTable();
  this.dietPlan.Member=new Member(); 
  this.UserNames = [];
  this.dietPlanlist=[];
  this.dietTablelist=[];

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

  }
   
  UserChange(event) {
    console.log('UserId:', event.target.value);
    this.dietPlan.Member.Id = event.target.value;
  }

  getAllMember() {
    this.service.GetAllMember().subscribe((result) => {
      for (let data of result) {
        this.UserNames.push(data);
      }
      console.log("UserName" + this.UserNames);
    });
  }
  OnSubmit() {
    console.log(this.dietPlan);
    this.dietPlan.MemberId = this.Id ;
    this.service.AddDietPlan(this.dietPlan).subscribe((result) => {
      if (result != "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }
  OnSave() {
    console.log(this.DietTable);
    this.DietTable.MemberId = this.Id ;
    this.service.AddDietTable(this.DietTable).subscribe((result) => {
      if (result != "Success") {
       
        this.route.params.subscribe((params) => {
          this.DietTable.MemberId = params.id;
          console.log(this.Id);
          this.dietTablelist=[];
          this.service.GetDietTableById(this.Id).subscribe((result) => {
            console.log(result);
            for(let data of result){
              this.dietTablelist.push(data);   
          } 
            console.log(this.dietTablelist);
    
          });
    
        });
    


        // alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });


    // this.route.params.subscribe((params) => {
    //   this.DietTable.MemberId = params.id;
    //   console.log(this.Id);
    //   this.service.GetDietTableById(this.Id).subscribe((result) => {
    //     console.log(result);
    //     for(let data of result){
    //       this.dietTablelist.push(data);   
    //   } 
    //     console.log(this.dietTablelist);

    //   });

    // });

    // this.route.params.subscribe((params) => {
    //   this.Id = params.id;
    //   this.service.GetDietTableById(this.Id).subscribe((result) => {
    
    //     this.DietTable = result;
    //     console.log(this.DietTable);
    //   });
    
    //   });
    // this.service.GetAllDietTable().subscribe((result) => {
     
    //   for(let data of result){
    //       this.dietTablelist.push(data);   
    //   }     
        
    // });
    
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteDietTable(Id).subscribe(result => {
      if (result == "Success") {
      this.dietTablelist = this.dietTablelist.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  ngOnInit() {
    this.getAllMember();
    // this.service.GetAllDietTable().subscribe((result) => {
    //   // console.log(result);
    //   for(let data of result){
    //       this.dietTablelist.push(data);   
    //   }     
    //       // console.log(this.organizationMasterList);
    // });
      }
}
