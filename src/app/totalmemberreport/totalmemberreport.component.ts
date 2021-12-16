import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import { Component, OnInit,Inject} from '@angular/core';

@Component({
  selector: 'app-totalmemberreport',
  templateUrl: './totalmemberreport.component.html',
  styleUrls: ['./totalmemberreport.component.css']
})
export class TotalmemberreportComponent implements OnInit {
  isEdit : boolean;
  memberList :any[];
  constructor( private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.memberList = []
   }

  ngOnInit(): void {
    this.service.GetAllMember().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.memberList.push(data);   
      }     
           console.log(this.memberList);
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
