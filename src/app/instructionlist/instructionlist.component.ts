import { NgForm } from '@angular/forms';
import { WebServiceService } from '../user-profile/user-profile.component';

import { Component, Inject } from '@angular/core';

import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../Globals';

@Component({
  selector: 'app-instructionlist',
  templateUrl: './instructionlist.component.html',
  styleUrls: ['./instructionlist.component.css']
})
export class InstructionlistComponent implements OnInit {
  InstructionList:any[];
  constructor(private router: Router,  private http: HttpClient, private service: WebServiceService) { 
    this.InstructionList=[]
  }

  ngOnInit(): void {
    this.service.GetAllProductInstructions().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.InstructionList.push(data);   
      }     
           console.log(this.InstructionList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteProductInstruction(Id).subscribe(result => {
      if (result == "Success") {
      this.InstructionList = this.InstructionList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
}
  search(){

  }
reset(){
  
}
}
