import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent implements OnInit {
  RegistrationList=[]
  constructor( private service: WebServiceService) { }

  ngOnInit(): void {
    this.service.GetAllRegistration().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.RegistrationList.push(data);   
      }     
           console.log(this.RegistrationList);
    });
  }
  
}
