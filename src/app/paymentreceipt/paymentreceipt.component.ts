import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from 'app/user-profile/user-profile.component';
import { PaymentReceipt,PaymentHistory,UserPlanDetails,Member,MembershipPlan } from 'app/Classes';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-paymentreceipt',
  templateUrl: './paymentreceipt.component.html',
  styleUrls: ['./paymentreceipt.component.css']
})
export class PaymentreceiptComponent implements OnInit {

  // paymentreceipt: PaymentReceipt;
  paymentHistory:PaymentHistory;
  // userPlanDetails:UserPlanDetails;
  // paymentreceiptList : any[];
  // paymentHistoryList:any[];
  // isEdit: boolean = false;
  paymentHistoryList :any[];
  constructor(   private route: ActivatedRoute, private router: Router,  private http: HttpClient, private service: WebServiceService) {
 
    this.paymentHistoryList = []

    this.paymentHistory = new PaymentHistory();
    this.paymentHistory.Member = new Member();
    this.paymentHistory.MembershipPlan = new MembershipPlan();
    // this.UserNames = [];
    // this.MembershipPlans=[];

    this.route.params.subscribe((params) => {
      this.paymentHistory.Id = params.id;
      this.service.GetPaymentHistoryById(this.paymentHistory.Id).subscribe((result) => {
        this.paymentHistory = result;
        console.log(this.paymentHistory)
      });

    });
  }
  
  ngOnInit(): void {
    // this.service.GetPaymentHistoryById().subscribe((result) => {
  
    //   for(let data of result){
    //       this.paymentHistoryList.push(data);   
    //   }     
     
    //       console.log(this.paymentHistoryList);
    // });
  }

  
    pdfpage(){
      // this.alertWithSuccess();
      var data = document.getElementById('contentToConvert');  
      html2canvas(data).then(canvas => {  
        var imgWidth = 200;   
        var pageHeight = 295;    
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;   
        const contentDataURL = canvas.toDataURL('image/png')  
         let pdf = new jspdf.jsPDF('l', 'mm', 'a4', true); 
        var position = 0;  
         //pdf.addImage(contentDataURL, 'PNG', 0, position, 270, imgHeight)  
         pdf.addImage(contentDataURL, 'PNG', 25, position, 250, imgHeight)  
        pdf.save('Invoice.pdf');
         // Generated PDF   
        // this.SaveCertificate();
         });  
    }

}
