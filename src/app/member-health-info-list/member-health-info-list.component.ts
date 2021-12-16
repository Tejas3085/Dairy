import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-member-health-info-list',
  templateUrl: './member-health-info-list.component.html',
  styleUrls: ['./member-health-info-list.component.css']
})
export class MemberHealthInfoListComponent implements OnInit {
  isEdit : boolean;
  memberHealthInfoList :any[];
  SearchText: string;
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.memberHealthInfoList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllMemberHealthInfo().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.memberHealthInfoList.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }

  Serach() {
    
   
    //  this.service.GetAllInstructor().subscribe((result) => {
    //    for (let data of result) {
    //      this.instructorList.push(data);  
    //    }

       this.memberHealthInfoList = this.memberHealthInfoList.filter(x => x.Member.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()));
     //});
     console.log(this.memberHealthInfoList);
   }
   
   Reset(){
     this.memberHealthInfoList = [];
   
     this.service.GetAllMemberHealthInfo().subscribe((result) => {
       for (let data of result) {
         this.memberHealthInfoList.push(data);
       }
     });
   }

  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteMemberHealthInfo(Id).subscribe(result => {
      if (result == "Success") {
      this.memberHealthInfoList = this.memberHealthInfoList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/update-member-health-info/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }
  //View Call
  View(Id){
    try {
      this.router.navigateByUrl("/viewmemberhealthinfo/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }
  

}
