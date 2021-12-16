import { AdminMaster } from '../Classes';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-admin-profile',
  templateUrl: './update-admin-profile.component.html',
  styleUrls: ['./update-admin-profile.component.css']
})
export class UpdateAdminProfileComponent implements OnInit {
  adminMaster: AdminMaster;
  
  constructor(private router: Router, private http: HttpClient, private service: WebServiceService, private route: ActivatedRoute) {
    this.adminMaster = new AdminMaster();

    this.route.params.subscribe((params) => {
      this.adminMaster.Id = params.id;
      this.service.GetAdminById(this.adminMaster.Id).subscribe((result) => {
        // alert(12);
        this.adminMaster = result;
      })
    });
  }

  OnSubmit() {
    this.service.UpdateAdminMaster(this.adminMaster).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      }
      else {
        alert("Something went wrong! Please try again.");
      }
    });
  }


  onSubmit() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }


  }

  ngOnInit() {
    
  }

}
