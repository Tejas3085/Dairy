import { Component, Injectable, OnInit } from '@angular/core';
import { AdminMaster } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-admin-profile-list',
  templateUrl: './admin-profile-list.component.html',
  styleUrls: ['./admin-profile-list.component.css']
})
export class AdminProfileListComponent implements OnInit {

  adminMaster: AdminMaster;
  adminList: any[];
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceService) { 
    this.adminMaster = new AdminMaster();
    this.adminList = [];
  }

  ngOnInit(): void {
    this.service.GetAllAdminMaster().subscribe((result) => {
      for(let data of result){
          this.adminList.push(data);   
      }    
    });
  }

  Edit(Id) {
    try {
      this.router.navigateByUrl("/update-admin-profile/" + Id);
    } catch (error) {
      alert("certi-" + error);
    } 
    }

  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteApplicationDetails(Id).subscribe(result => {
      if (result == "Success") {
      this.adminList = this.adminList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }

}
