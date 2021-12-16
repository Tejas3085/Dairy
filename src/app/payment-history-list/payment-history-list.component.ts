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
  selector: 'app-payment-history-list',
  templateUrl: './payment-history-list.component.html',
  styleUrls: ['./payment-history-list.component.css']
})
export class PaymentHistoryListComponent implements OnInit {

  isEdit : boolean;
  paymentHistoryList :any[];
  SearchText:string;
  StartDate1:string;
  EndDate1:string;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.paymentHistoryList = []

  
   }

   Serach() {
    
   
     this.paymentHistoryList = this.paymentHistoryList.filter(x => x.MembershipPlan.Title.toLowerCase().includes(this.SearchText.toLowerCase()));


 }

Select() {
    
   
  this.paymentHistoryList = this.paymentHistoryList.filter(x => x.PaidDate.toLowerCase()>=(this.StartDate1.toLowerCase()) &&  x.PaidDate.toLowerCase()<=(this.EndDate1.toLowerCase()) );
  //
console.log(this.paymentHistoryList);
}

Reset(){
this.paymentHistoryList = [];

this.service.GetAllPaymentHistory().subscribe((result) => {
 for (let data of result) {
   this.paymentHistoryList.push(data);
 }
});
}



  ngOnInit(): void {
   
    this.service.GetAllPaymentHistory().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.paymentHistoryList.push(data);   
      }     
          // console.log(this.organizationMasterList);
          console.log(this.paymentHistoryList);
    });
  }

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'PaymentHistoryListSheet.xlsx');  

}
Receipt(Id){
  try {
    this.router.navigateByUrl("/paymentreceipt/" + Id);
  } catch (error) {
    alert("certi-" + error);
  } 

}

}
