import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';

import { OrganizationPlanMaster} from '../Classes';
@Component({
  selector: 'app-organizationplan',
  templateUrl: './organizationplan.component.html',
  styleUrls: ['./organizationplan.component.css']
})
export class OrganizationplanComponent implements OnInit {
  isEdit : boolean;
  organizationPlansMasterList :any[];
  organizationPlanMaster: OrganizationPlanMaster
 
  constructor( private router: Router,  private http: HttpClient, private service: WebServiceService) { 
    this.organizationPlanMaster = new OrganizationPlanMaster
  }

  OnSubmit(){
    //this.organizationPlanMaster.Status = "Valid";
    this.service.AddOrganizationPlansMaster(this.organizationPlanMaster).subscribe((result) => {
      if (result > 0) {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });  
}

  ngOnInit() {
   
  }
}
