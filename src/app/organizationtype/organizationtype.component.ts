import { Component, OnInit } from '@angular/core';
import { OrgType} from '../Classes';

declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-organizationtype',
  templateUrl: './organizationtype.component.html',
  styleUrls: ['./organizationtype.component.css']
})
export class OrganizationtypeComponent implements OnInit {
 orgType:OrgType
 constructor(private formBuilder: FormBuilder, private router: Router, private service: WebServiceService, private http: HttpClient) { 
    this.orgType=new OrgType();
  }

  ngOnInit(): void {
  }
  OnSubmit(){
    alert("Submit")
    console.log(this.orgType)
  
    console.log(this.orgType);
    let num = Math.floor(100000 + Math.random() * 900000);

    this.service.AddOrgType(this.orgType).subscribe((result) => {
      //alert(result);
      localStorage.setItem('OrgTypeId', result);
          if (result == 0) {
        alert("Something went wrong! Please try again.");
      } else {
        alert("Saved Successfully");
        //this.router.navigateByUrl("/organization");
      }
    });
}
}
