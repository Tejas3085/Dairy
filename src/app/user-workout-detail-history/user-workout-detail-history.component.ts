import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-workout-detail-history',
  templateUrl: './user-workout-detail-history.component.html',
  styleUrls: ['./user-workout-detail-history.component.css']
})
export class UserWorkoutDetailHistoryComponent implements OnInit {

  
  isEdit : boolean;
  userWorkoutDetailList :any[];
  SearchText:string;
  StartDate1:string;
  EndDate1:string;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.userWorkoutDetailList = []
  
   }


   Select() {
    
   
    this.userWorkoutDetailList = this.userWorkoutDetailList.filter(x => x.StartDate.toLowerCase()>=(this.StartDate1.toLowerCase()) &&  x.StartDate.toLowerCase()<=(this.EndDate1.toLowerCase()) );
    //
  console.log(this.userWorkoutDetailList);
  }

  Reset(){
    this.userWorkoutDetailList = [];
    
    this.service.GetAllUserWorkoutDetails().subscribe((result) => {
    for (let data of result) {
     this.userWorkoutDetailList.push(data);
    }
    });
    }
    
  ngOnInit(): void {
    this.service.GetAllUserWorkoutDetails().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.userWorkoutDetailList.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }


  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');  

}

}
