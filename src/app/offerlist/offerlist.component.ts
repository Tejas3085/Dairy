import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.css']
})
export class OfferlistComponent implements OnInit {
  ProductOfferList:any=[]
  constructor(private service: WebServiceService) { 
    this.ProductOfferList=[]
  }

  ngOnInit(): void {
    this.service.GetAllProductOffer().subscribe((result) => {
      // console.log(result);
      for(let data of result){
          this.ProductOfferList.push(data);   
      }     
           console.log(this.ProductOfferList);
    });
  }
  Delete(Id) {
    alert('Are you sure you want to delete?');
    this.service.DeleteProductOffer(Id).subscribe(result => {
      if (result == "Success") {
      this.ProductOfferList = this.ProductOfferList.filter(
        (item) => item.Id != Id);
      alert("Deleted Successfully");
    } else {
      alert("Somthing went wrong! please try again.");
    }
  });
  }
}

