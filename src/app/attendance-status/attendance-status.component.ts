import { Component, Injectable, OnInit } from "@angular/core";
declare const $: any;
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from "../user-profile/user-profile.component";
import {AttendenceStatus } from "../Classes";

@Component({
  selector: 'app-attendance-status',
  templateUrl: './attendance-status.component.html',
  styleUrls: ['./attendance-status.component.css']
})
export class AttendanceStatusComponent implements OnInit {
  attendenceStatus: AttendenceStatus;
list: any[];
isChecked: any;
  attendenceStatuslist  : any[];
  isEdit: boolean = false;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: WebServiceService
  ) {
this.list=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16',
'17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    this.attendenceStatuslist = [];
  }

 
  ngOnInit(): void {
     
    this.service.GetAllMember().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.attendenceStatuslist.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }
  checkValue(event: any){
    console.log(event);
    alert(event);
 }
//    count(){
//     var inputElems = document.getElementsByTagName("input"),
//     count = 0;
//     for (var i=0; i<inputElems.length; i++) {
//     if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
//         count++;
//         alert(count);
//     }
// }}

}

