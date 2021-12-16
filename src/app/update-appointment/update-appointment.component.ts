import { Component, Injectable, OnInit } from '@angular/core';
import { CounsellingAppointment, Member } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';


@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
  isEdit: boolean= false;
  counsellingappointmentList:any[];
  Id:any;
  counsellingappointment: CounsellingAppointment;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService,   private route: ActivatedRoute) 
  {
    this.counsellingappointment = new CounsellingAppointment();
    this.counsellingappointmentList = [];
   
    this.route.params.subscribe((params) => {
      this.Id = params.id;
     
      this.service.GetCounsellingAppointmentById(this.Id).subscribe((result) => {
    
        this.counsellingappointment = result;
        console.log(this.counsellingappointment);

    
      });

    });
   }
   OnSubmit(){
    console.log(this.counsellingappointment);

    this.service.UpdateCounsellingAppointment(this.counsellingappointment).subscribe((result) => {
      if (result == "Success") {

        alert("Saved Successfully");

      } else {
        alert("Something went wrong! Please try again.");
      }
    });

}


  ngOnInit(): void {
  }

}
