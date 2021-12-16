import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-organizationlist',
  templateUrl: './organizationlist.component.html',
  styleUrls: ['./organizationlist.component.css']
})
export class OrganizationlistComponent implements OnInit {

  isEdit : boolean;
  organizationMasterList :any[];


  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) {
    this.organizationMasterList = []
  
   }

  ngOnInit(): void {
    this.service.GetAllOrganizationMaster().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.organizationMasterList.push(data);   
      }     
          // console.log(this.organizationMasterList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteOrganizationMaster(Id).subscribe(result => {
      if (result == "Success") {
      this.organizationMasterList = this.organizationMasterList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

  Edit(Id){
    try {
      this.router.navigateByUrl("/updateorganization/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 

  }

}
