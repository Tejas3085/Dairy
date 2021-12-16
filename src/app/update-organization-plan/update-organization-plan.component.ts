import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { WebServiceService } from '../user-profile/user-profile.component';
import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { OrganizationPlanMaster} from '../Classes';

@Component({
  selector: 'app-update-organization-plan',
  templateUrl: './update-organization-plan.component.html',
  styleUrls: ['./update-organization-plan.component.css']
})
export class UpdateOrganizationPlanComponent implements OnInit {
  isEdit : boolean;
  Id: any;
  organizationPlansMasterList :any[];
  organizationPlanMaster: OrganizationPlanMaster
 
  constructor( private router: Router,  private http: HttpClient, private service: WebServiceService,  private route: ActivatedRoute) { 
    this.organizationPlanMaster = new OrganizationPlanMaster;

    this.route.params.subscribe((params) => {
      this.Id = params.id;
      //  alert(this.Id);
      this.service.GetOrganizationPlansMasterById(this.Id).subscribe((result) => {
        // alert(12);
        this.organizationPlanMaster = result;
        console.log(this.organizationPlanMaster);
  
      });
    });

  }

  OnSubmit(){
    this.organizationPlanMaster.Status = "Valid";
    this.service.UpdateOrganizationPlansMaster(this.organizationPlanMaster).subscribe((result) => {
      if (result == "Success") {
        alert("Saved Successfully");
      } else {
        alert("Something went wrong! Please try again.");
      }
    });  
}


  ngOnInit() {
   
  }
}

