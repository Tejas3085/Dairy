import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { WebServiceService } from 'app/user-profile/user-profile.component';
import { MainExercise,SubExercise,ExerciseRoutine,Exercise,Member,MemberHealthInfo } from 'app/Classes';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-exercisereport',
  templateUrl: './exercisereport.component.html',
  styleUrls: ['./exercisereport.component.css']
})
export class ExercisereportComponent implements OnInit {

  // paymentreceipt: PaymentReceipt;
  exercise:Exercise;
  exerciseRoutine:ExerciseRoutine;
  memberHealthInfo:MemberHealthInfo;
  member: Member;
  memberlist:any[];
  exerciselist:any[];
  exerciseRoutinelist:any[];
  Id:any;
  // userPlanDetails:UserPlanDetails;
  // paymentreceiptList : any[];
  // paymentHistoryList:any[];
  // isEdit: boolean = false;
  paymentHistoryList :any[];
  constructor(   private route: ActivatedRoute, private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.member = new Member();
    this.memberHealthInfo = new MemberHealthInfo();
  this.exercise=new Exercise();
  this.exerciseRoutine = new ExerciseRoutine();



  this.memberlist = [];
  this.exerciselist=[];
  this.exerciseRoutinelist=[];
  this.route.params.subscribe((params) => {
    this.Id = params.id;

    this.service.GetMemberById(this.Id).subscribe((result) => {
  
      this.member = result;
      console.log(this.member);

  
    });

  });
  this.route.params.subscribe((params) => {
    this.Id = params.id;
    console.log(this.Id);
    this.service.GetMemberHealthInfoById(this.Id).subscribe((result) => {
  
      this.memberHealthInfo = result;
      console.log(this.memberHealthInfo);

  
    });

     

  });


  }
  
  ngOnInit(): void {
    this.exerciseRoutinelist=[];
    this.route.params.subscribe((params) => {
      this.Id = params.id;
      console.log(this.Id);
//
this.service.GetAllExerciseRoutine().subscribe((result) => {
  console.log(result);
  for(let data of result){
    this.exerciseRoutinelist.push(data);   
} 
  console.log(this.exerciseRoutinelist);

});

});

this.exerciselist=[];
this.route.params.subscribe((params) => {
  this.Id = params.id;
  console.log(this.Id);

  this.service.GetExerciseById(this.Id).subscribe((result) => {
    console.log(result);
    for(let data of result){
      this.exerciselist.push(data);   
  } 
    console.log(this.exerciselist);

  });

});

  }
  // Delete(Id) {
  //   alert('Are you sure you want to delete?');
  //   this.service.DeleteExerciseRoutine(Id).subscribe(result => {
  //     if (result == "Success") {
  //     this.exerciseRoutinelist = this.exerciseRoutinelist.filter(
  //       (item) => item.Id != Id);
  //     alert("Deleted Successfully");
  //   } else {
  //     alert("Somthing went wrong! please try again.");
  //   }
  // });
  // }
  
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
