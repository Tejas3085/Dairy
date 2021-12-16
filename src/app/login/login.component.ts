import { Component, OnInit, ViewChild } from '@angular/core';
import { Registration } from '../Classes';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../Classes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login : Login
constructor(private formBuilder: FormBuilder, private router: Router, private service: WebServiceService , private http: HttpClient) { 
    this.login = new Login
  }

  ngOnInit(): void {
  }
  OnSubmit(){
    // alert ("Success")
    // console.log(this.login)

    // this.service.AdminLogin(this.login.UserName,this.login.Password).subscribe((result) => {
    //   console.log(result);
    //   localStorage.setItem('SID', result.Id);
    //   if (result.Id == 0) {
    //     alert("Something went wrong! Please try again.");
    //     this.router.navigateByUrl('/home');
    //   } else {
    //     alert("Saved Successfully");
    //     this.router.navigateByUrl('/jobs');
        
    //   }
    
      
    // });
  }
}


