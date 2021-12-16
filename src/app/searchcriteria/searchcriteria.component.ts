
import { Searchcriteria } from '../Classes';
import { OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';
declare var require: any
import { GlobalVariable } from "../Globals";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, Inject } from '@angular/core';




@Component({
  selector: 'app-searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {
 

  searchcriteria : Searchcriteria
  constructor(  private router: Router,  private http: HttpClient, private service: WebServiceService) 
  { 
    this.searchcriteria = new Searchcriteria()
  }

     OnSubmit(){
      alert("gkhg")
      // parseInt(localStorage.getItem('OrgId'))
      
      console.log(this.searchcriteria)
      console.log(this.searchcriteria);
      this.service.AddSearchCriteria(this.searchcriteria).subscribe((result) => {
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