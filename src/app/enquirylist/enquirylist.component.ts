import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebServiceService } from 'app/user-profile/user-profile.component';

@Component({
  selector: 'app-enquirylist',
  templateUrl: './enquirylist.component.html',
  styleUrls: ['./enquirylist.component.css']
})
export class EnquirylistComponent implements OnInit {
  isEdit : boolean;
  enquiryList :any[];

  constructor(private router: Router,private http: HttpClient, private service: WebServiceService) {
    this.enquiryList=[];

   }

  ngOnInit(): void {
    this.service.GetAllInquiry().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.enquiryList.push(data);   
      }     
           console.log(this.enquiryList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteInquiry(Id).subscribe(result => {
      if (result == "Success") {
      this.enquiryList = this.enquiryList.filter(
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

}
