import { AdminMaster } from '../Classes';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  adminMaster: AdminMaster;
  constructor(private router: Router, private http: HttpClient, private service: WebServiceService) {
    this.adminMaster = new AdminMaster()
  }

  OnSubmit() {
    this.adminMaster.Role = "Admin";
    console.log(this.adminMaster);
    this.service.AddAdminMaster(this.adminMaster).subscribe((result) => {
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