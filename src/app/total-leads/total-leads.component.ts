import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
import { DatePipe } from '@angular/common'
import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-total-leads',
  templateUrl: './total-leads.component.html',
  styleUrls: ['./total-leads.component.css']
 

})
export class TotalLeadsComponent implements OnInit {

  isEdit : boolean;
  userPlanDetailList :any[];
  SearchText:string;
  StartDate1:string;
  EndDate1:string;
  date: Date;


  

  constructor(  private router: Router,public datePipe: DatePipe,  private http: HttpClient, private service: WebServiceService) {
    this.userPlanDetailList = [];
    this.date=new Date();
    
   
   }

  //  Select() {
    
   
  //   this.userPlanDetailList = this.userPlanDetailList.filter(x => x.StartDate.toLowerCase()>=(this.StartDate1.toLowerCase()) &&  x.StartDate.toLowerCase()<=(this.EndDate1.toLowerCase()) );
  //   //
  // console.log(this.userPlanDetailList);
  // }
  
  Active() {
    let latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
    console.log(latest_date);
    this.userPlanDetailList = this.userPlanDetailList.filter(x => x.EndDate.toLowerCase()>(latest_date) );
    //
  console.log(this.userPlanDetailList);


        $("#Active1").show();
        $("#InActive1").hide();
   



  }

  Inactive() {
    let latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
    console.log(latest_date);
   
    this.userPlanDetailList = this.userPlanDetailList.filter(x => x.EndDate.toLowerCase()<(latest_date) );
    //
  console.log(this.userPlanDetailList);

    $("#InActive1").show();
    $("#Active1").hide();

  }


  Reset(){
    $("#Active1").hide();
    $("#InActive1").hide();
    
  this.userPlanDetailList = []; 
  this.service.GetAllUserPlanDetails().subscribe((result) => {
   for (let data of result) {
     this.userPlanDetailList.push(data);
   }
  });
  }
  
  
    ngOnInit(): void {
     
      this.service.GetAllUserPlanDetails().subscribe((result) => {
        // console.log(result);
        for(let data of result){
            this.userPlanDetailList.push(data);   
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
      XLSX.writeFile(wb, 'UserPlanDetailsSheet.xlsx');  
  
  }

 
  }
  