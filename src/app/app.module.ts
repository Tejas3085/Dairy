import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ApplyJobMasterListComponent } from './apply-job-master-list/apply-job-master-list.component';
import { JobSeekerListComponent } from './job-seeker-list/job-seeker-list.component';
import { InvestordetailsComponent } from './investordetails/investordetails.component';
import { InvestorlistComponent } from './investorlist/investorlist.component';
import { BusinessCategoryListComponent } from './business-category-list/business-category-list.component';
import { UpdateBusinessCategoryComponent } from './update-business-category/update-business-category.component';
import { PostjoblistComponent } from './postjoblist/postjoblist.component';
import { UpdatepostjobComponent } from './updatepostjob/updatepostjob.component';
import { StudentplandetaillistsComponent } from './studentplandetaillists/studentplandetaillists.component';
import { UpdatestudentplandetailslistComponent } from './updatestudentplandetailslist/updatestudentplandetailslist.component';
import { OtpComponent } from './otp/otp.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MembershipPlanListComponent } from './membership-plan-list/membership-plan-list.component';
import { MemberHealthInfoListComponent } from './member-health-info-list/member-health-info-list.component';
import { MemberListComponent } from './member-list/member-list.component';
import { WorkoutTypeListComponent } from './workout-type-list/workout-type-list.component';
import { InstructerComponent } from './instructer/instructer.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { UserWorkoutDetailListComponent } from './user-workout-detail-list/user-workout-detail-list.component';
import { UserPlanDetailListComponent } from './user-plan-detail-list/user-plan-detail-list.component';

import { ExerciseroutineComponent } from './exerciseroutine/exerciseroutine.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { TotalmemberreportComponent } from './totalmemberreport/totalmemberreport.component';
import { TotalLeadsComponent } from './total-leads/total-leads.component';
import { SalesLeadsComponent } from './sales-leads/sales-leads.component';
import { PlanBalanceComponent } from './plan-balance/plan-balance.component';
import { CounsellingappointmentComponent } from './counsellingappointment/counsellingappointment.component';
import { CounsellingAppointmentListComponent } from './counselling-appointment-list/counselling-appointment-list.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { PaymentreceiptComponent } from './paymentreceipt/paymentreceipt.component';
import { PaymentslipComponent } from './paymentslip/paymentslip.component';
import { EnquirylistComponent } from './enquirylist/enquirylist.component';
import { MainexerciseComponent } from './mainexercise/mainexercise.component';
import { SubecerciseComponent } from './subecercise/subecercise.component';
import { ExercisereportComponent } from './exercisereport/exercisereport.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MaincategoryComponent } from './maincategory/maincategory.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
// 
import { DistributorComponent } from './distributor/distributor.component';
import { ProductComponent } from './product/product.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersubscriptiondetailsComponent } from './usersubscriptiondetails/usersubscriptiondetails.component';
import { UpdatedistributorComponent } from './updatedistributor/updatedistributor.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdatesubscriptionComponent } from './updatesubscription/updatesubscription.component';
import { UpdateordersComponent } from './updateorders/updateorders.component';
import { UpdateusersubscriptiondetailsComponent } from './updateusersubscriptiondetails/updateusersubscriptiondetails.component';
import { DistributorlistComponent } from './distributorlist/distributorlist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SubscriptionlistComponent } from './subscriptionlist/subscriptionlist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { UsersubscriptiondetailslistComponent } from './usersubscriptiondetailslist/usersubscriptiondetailslist.component';
import { SpecificationComponent } from './specification/specification.component';
import { SpecificationlistComponent } from './specificationlist/specificationlist.component';
import { InstructionComponent } from './instruction/instruction.component';
import { InstructionlistComponent } from './instructionlist/instructionlist.component';
import { MaincategorylistComponent } from './maincategorylist/maincategorylist.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { OfferComponent } from './offer/offer.component';
import { OfferlistComponent } from './offerlist/offerlist.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
// 


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    // })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MaincategoryComponent,
    SubcategoryComponent,
    DistributorComponent,
    ProductComponent,
    SubscriptionComponent,
    OrdersComponent,
    UsersubscriptiondetailsComponent,
    UpdatedistributorComponent,
    UpdateproductComponent,
    UpdatesubscriptionComponent,
    UpdateordersComponent,
    UpdateusersubscriptiondetailsComponent,
    DistributorlistComponent,
    ProductlistComponent,
    SubscriptionlistComponent,
    OrderslistComponent,
    UsersubscriptiondetailslistComponent,
    SpecificationComponent,
    SpecificationlistComponent,
    InstructionComponent,
    InstructionlistComponent,
    MaincategorylistComponent,
    SubcategorylistComponent,
    OfferComponent,
    OfferlistComponent,
    RegistrationListComponent,
  
  
  

  

 
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
