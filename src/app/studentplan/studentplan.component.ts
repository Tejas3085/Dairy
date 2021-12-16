import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import { StudentPlanMaster } from "../Classes";
@Component({
  selector: "app-studentplan",
  templateUrl: "./studentplan.component.html",
  styleUrls: ["./studentplan.component.css"],
})
export class StudentplanComponent implements OnInit {
  studentPlanMaster: StudentPlanMaster;
  studentplanmasterlist: any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
    this.studentPlanMaster = new StudentPlanMaster();
    this.studentplanmasterlist = [];
  }
  OnSubmit() {
    this.service.AddStudentPlan(this.studentPlanMaster).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.Saved Successfully");
        console.log(result);
      }
    });
  }

  ngOnInit() {}
}
