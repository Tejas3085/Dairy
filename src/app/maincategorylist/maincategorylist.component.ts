import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-maincategorylist',
  templateUrl: './maincategorylist.component.html',
  styleUrls: ['./maincategorylist.component.css']
})
export class MaincategorylistComponent implements OnInit {
  maincategoryList:any[];
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceService) { 
this.maincategoryList=[]
}
  ngOnInit(): void {
    this.service.GetAllMainCategory().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.maincategoryList.push(data);   
      }     
           console.log(this.maincategoryList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteMainCategory(Id).subscribe(result => {
      if (result == "Success") {
      this.maincategoryList = this.maincategoryList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
}

