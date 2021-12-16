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
  selector: 'app-membership-plan-history',
  templateUrl: './membership-plan-history.component.html',
  styleUrls: ['./membership-plan-history.component.css']
})
export class MembershipPlanHistoryComponent implements OnInit {
  isEdit : boolean;
  membershipplanList :any[];
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.membershipplanList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllMembershipPlan().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.membershipplanList.push(data);   
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
