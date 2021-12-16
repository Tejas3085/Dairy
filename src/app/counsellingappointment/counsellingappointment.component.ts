import { Component, OnInit } from '@angular/core';
import {CounsellingAppointment } from "../Classes";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from 'app/user-profile/user-profile.component';

@Component({
  selector: 'app-counsellingappointment',
  templateUrl: './counsellingappointment.component.html',
  styleUrls: ['./counsellingappointment.component.css']
})
export class CounsellingappointmentComponent implements OnInit {
  counsellingappointment: CounsellingAppointment;
  counsellingappointmentList : any[];
  isEdit: boolean = false;
  constructor(    private router: Router, private http: HttpClient, private service: WebServiceService) {
    this.counsellingappointment = new CounsellingAppointment();
    this.counsellingappointmentList = [];
   }
   OnSubmit() {
    console.log(this.counsellingappointment);
    this.service.AddCounsellingAppointment(this.counsellingappointment).subscribe((result) => {
      if (result > 0) {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }

   

  ngOnInit(): void {
  }


}
