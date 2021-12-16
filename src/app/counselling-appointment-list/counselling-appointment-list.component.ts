import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceService } from 'app/user-profile/user-profile.component';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-counselling-appointment-list',
  templateUrl: './counselling-appointment-list.component.html',
  styleUrls: ['./counselling-appointment-list.component.css']
})
export class CounsellingAppointmentListComponent implements OnInit {
  isEdit : boolean;
  counsellingappointmentList :any[];
  date: Date;
  constructor(private router: Router,public datePipe: DatePipe,  private http: HttpClient, private service: WebServiceService) {
    this.counsellingappointmentList=[];
    this.date=new Date();
   }

  ngOnInit(): void {
    this.service.GetAllCounsellingAppointment().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.counsellingappointmentList.push(data);   
      }     
           console.log(this.counsellingappointmentList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteCounsellingAppointment(Id).subscribe(result => {
      if (result == "Success") {
      this.counsellingappointmentList = this.counsellingappointmentList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/UpdateAppointment/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }
  View(){
    
  }

  Select() {
    
    let latest_date =this.datePipe.transform(this.date, 'yyyy-MM-dd');
    console.log(latest_date);
    this.counsellingappointmentList = this.counsellingappointmentList.filter(x => x.Date.toLowerCase()==(latest_date) );
    //
  console.log(this.counsellingappointmentList);
  }
  
  Reset(){
  this.counsellingappointmentList = [];
  
  this.service.GetAllCounsellingAppointment().subscribe((result) => {
   for (let data of result) {
     this.counsellingappointmentList.push(data);
   }
  });
  }
  // View(Id){
  //   try {
  //     this.router.navigateByUrl("/viewmemberhealthinfo/" + Id);
  //   } catch (error) {
  //     alert("certi-" + error);
  //   } 

  // }


}
