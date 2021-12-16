import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-user-plan-detail-report',
  templateUrl: './user-plan-detail-report.component.html',
  styleUrls: ['./user-plan-detail-report.component.css']
})
export class UserPlanDetailReportComponent implements OnInit {
  isEdit : boolean;
  userPlanDetailList :any[];
  SearchText:string;
  StartDate1:string;
  EndDate1:string;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.userPlanDetailList = []
  
   }

//    Serach() {
    
   
//     this.userPlanDetailList = this.userPlanDetailList.filter(x => x.Member.UserName.toLowerCase().includes(this.SearchText.toLowerCase()));


// }

Select() {
  if (this.SearchText.toLowerCase()!= "") 
{
    console.log(  this.userPlanDetailList = this.userPlanDetailList.filter(x => x.Member.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()))
    );
} 
else
{
    console.log(this.userPlanDetailList = this.userPlanDetailList.filter(x => x.StartDate.toLowerCase()>=(this.StartDate1.toLowerCase()) &&  x.StartDate.toLowerCase()<=(this.EndDate1.toLowerCase())));
     
  
}
    
  // this.userPlanDetailList = this.userPlanDetailList.filter(x => x.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()));

  // this.userPlanDetailList = this.userPlanDetailList.filter(x => x.StartDate.toLowerCase()>=(this.StartDate1.toLowerCase()) &&  x.StartDate.toLowerCase()<=(this.EndDate1.toLowerCase()) );
  
console.log(this.userPlanDetailList);
}

Reset(){
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
