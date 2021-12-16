import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Registration,Login  } from '../Classes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
// export class AdminLoginComponent implements OnInit {
//   login : Login
//   constructor(private formBuilder: FormBuilder, private router: Router, private service: WebServiceService , private http: HttpClient) { 
//       this.login = new Login
//     }
  
//     ngOnInit(): void {
//     }

//     OnSubmit(){ 
//       this.service.AdminLogin(this.login.UserName,this.login.Password).subscribe((result) => {
//         console.log(result);
//         localStorage.setItem('SID', result.Id);
//         if (result.Id == 0) {
//           alert("Invalid Credientials");
//         } else {
//           alert("Login  Successful");
//           this.router.navigateByUrl('/dashboard');
          
//         }  
//       });
//     }
//   }
  
  
export class AdminLoginComponent implements OnInit{
  login : Login
  registration: Registration;

  registrationlist  : any[];
  isEdit: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private service: WebServiceService , private http: HttpClient)
{
  this.login = new Login
      this.registration = new Registration();
    this.registrationlist = [];
   
   }


 OnSubmit() {
    console.log(this.registration);
    this.service.AddRegistration(this.registration).subscribe((result) => {
      if (result != "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });
  }


  OnSubmitt(){
    alert ("Success")
    console.log(this.login)

    this.service.Login(this.login.Email,this.login.Password).subscribe((result) => {
      console.log(result);
      // debugger;
      localStorage.setItem('SID', result.Id);
      if (result.Id == 0) {
        alert("Something went wrong! Please try again.");
        // this.router.navigateByUrl('/dashboard');
      } else {
        alert("Saved Successfully");
        
        this.router.navigateByUrl('/dashboard');
        
      }
    
      
    });
  }

  ngOnInit(): void {
    this.signupgo();
  
  }

  //Login javascript load code 
  signupgo(){
  function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}

$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})
}

}
