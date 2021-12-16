import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PlansComponent } from 'app/plans/plans.component';
import { GymprofileComponent } from 'app/gymprofile/gymprofile.component';
import { TotalcollectionComponent } from 'app/totalcollection/totalcollection.component';

import { GymTrainerProfileComponent } from '../../gym-trainer-profile/gym-trainer-profile.component';
import { AddMemberComponent } from 'app/add-member/add-member.component';
import { SmsTemplateComponent } from 'app/sms-template/sms-template.component';
import { UnpaidmembersComponent } from 'app/unpaidmembers/unpaidmembers.component';
import { MembersComponent } from 'app/members/members.component';
import { AdminregistrationComponent } from 'app/adminregistration/adminregistration.component';
import { LoginComponent } from '../../login/login.component';
import { PostjobComponent } from 'app/postjob/postjob.component';
import { OrganizationtypeComponent } from 'app/organizationtype/organizationtype.component';
import { OrganizationComponent } from 'app/organization/organization.component';
import { OrganizationplanComponent } from 'app/organizationplan/organizationplan.component';
import { StudentplanComponent } from 'app/studentplan/studentplan.component';
import { OrgPlanDetailsComponent } from 'app/org-plan-details/org-plan-details.component';
import { StudentplandetailsComponent } from 'app/studentplandetails/studentplandetails.component';
import { AdminLoginComponent } from 'app/admin-login/admin-login.component';
import { OrghrdetailsComponent } from 'app/orghrdetails/orghrdetails.component';
import { BusinesstypesComponent } from 'app/businesstypes/businesstypes.component';
import { JobcategoryComponent } from 'app/jobcategory/jobcategory.component';
import { ApplicationDetailsComponent } from 'app/application-details/application-details.component';
import { ApplicationDetailsListComponent } from 'app/application-details-list/application-details-list.component';
import { UpdateApplicationDetailsComponent } from 'app/update-application-details/update-application-details.component';
import { UpdateAdminProfileComponent } from 'app/update-admin-profile/update-admin-profile.component';
import { AdminProfileListComponent } from 'app/admin-profile-list/admin-profile-list.component';
import { AllJobsComponent } from 'app/all-jobs/all-jobs.component';
import { UpdateJobsComponent } from 'app/update-jobs/update-jobs.component';

import { StudentPlansListComponent } from 'app/student-plans-list/student-plans-list.component';
import { UpdateStudentPlanComponent } from 'app/update-student-plan/update-student-plan.component';
import { OrgnizationTypesListComponent } from 'app/orgnization-types-list/orgnization-types-list.component';
import { UpdateOrgnizationTypeComponent } from 'app/update-orgnization-type/update-orgnization-type.component';

import { UpdateOrganizationPlanComponent } from 'app/updateorganizationplan/updateorganizationplan.component';
// import { OrganizationplanComponent } from    'app/organizationplan/organizationplan.component';
import { OrganizationplanlistComponent } from 'app/organizationplanlist/organizationplanlist.component';
import { FranchisedetailsComponent } from 'app/franchisedetails/franchisedetails.component';
import { FranchisedetailslistComponent } from 'app/franchisedetailslist/franchisedetailslist.component';
import { UpdatefranchisedetailsComponent } from 'app/updatefranchisedetails/updatefranchisedetails.component';
import { OrganizationlistComponent } from 'app/organizationlist/organizationlist.component';
import { UpdateorganizationComponent } from 'app/updateorganization/updateorganization.component';
import { JobCategoryListComponent } from 'app/job-category-list/job-category-list.component';
import { UpdateJobCategoryComponent } from 'app/update-job-category/update-job-category.component';
import { ApplyJobMasterListComponent } from 'app/apply-job-master-list/apply-job-master-list.component';
import { JobSeekerListComponent } from 'app/job-seeker-list/job-seeker-list.component';
import { InvestorlistComponent } from 'app/investorlist/investorlist.component';
import { BusinessCategoryListComponent } from 'app/business-category-list/business-category-list.component';
import { UpdateBusinessCategoryComponent } from 'app/update-business-category/update-business-category.component';
import { PostjoblistComponent } from 'app/postjoblist/postjoblist.component';
import { UpdatepostjobComponent } from 'app/updatepostjob/updatepostjob.component';

import { UpdatestudentplandetailslistComponent } from 'app/updatestudentplandetailslist/updatestudentplandetailslist.component';
  import { StudentplandetaillistsComponent } from 'app/studentplandetaillists/studentplandetaillists.component';
import { InvestordetailsComponent } from'app/investordetails/investordetails.component';
import { OtpComponent } from 'app/otp/otp.component';
import { ResetpasswordComponent } from 'app/resetpassword/resetpassword.component';

import { InstructorComponent } from 'app/instructor/instructor.component';
import { AttendenceHistoryComponent } from 'app/attendence-history/attendence-history.component';
import { UserWorkoutDetailsComponent } from 'app/user-workout-details/user-workout-details.component';
import { WorkoutTypeComponent } from 'app/workout-type/workout-type.component';
import { MemberHealthInfoComponent } from 'app/member-health-info/member-health-info.component';
import { MembershipPlanComponent } from 'app/membership-plan/membership-plan.component';
import { AttendanceStatusComponent } from 'app/attendance-status/attendance-status.component';
import { UserPlanDetailComponent } from 'app/user-plan-detail/user-plan-detail.component';
import { MemberComponent } from 'app/member/member.component';
import { MembershipPlanListComponent } from 'app/membership-plan-list/membership-plan-list.component';
import { MemberListComponent } from 'app/member-list/member-list.component';
import { InstructorListComponent } from 'app/instructor-list/instructor-list.component';
import { WorkoutTypeListComponent } from 'app/workout-type-list/workout-type-list.component';
import { MemberHealthInfoListComponent } from 'app/member-health-info-list/member-health-info-list.component';
import { UserWorkoutDetailListComponent } from 'app/user-workout-detail-list/user-workout-detail-list.component';
import { UserPlanDetailListComponent } from 'app/user-plan-detail-list/user-plan-detail-list.component';
import { UpdateMembershipPlanComponent } from 'app/update-membership-plan/update-membership-plan.component';
import { UpdateMemberHealthInfoComponent } from 'app/update-member-health-info/update-member-health-info.component';
import { UpdateMemberComponent } from 'app/update-member/update-member.component';
import { UpdateWorkoutTypeComponent } from 'app/update-workout-type/update-workout-type.component';
import { UpdateInstructorComponent } from 'app/update-instructor/update-instructor.component';
import { UpdateUserPlanDetailsComponent } from 'app/update-user-plan-details/update-user-plan-details.component';
import { UpdateUserWorkoutDetailsComponent } from 'app/update-user-workout-details/update-user-workout-details.component';

import { ExerciseroutineComponent } from 'app/exerciseroutine/exerciseroutine.component';
import { DietPlanComponent } from 'app/diet-plan/diet-plan.component';
import { ViewmemberhealthinfoComponent } from 'app/viewmemberhealthinfo/viewmemberhealthinfo.component';
import { UserPlanDetailReportComponent } from 'app/user-plan-detail-report/user-plan-detail-report.component';
import { MembershipPlanHistoryComponent } from 'app/membership-plan-history/membership-plan-history.component';
import { UserWorkoutDetailHistoryComponent } from 'app/user-workout-detail-history/user-workout-detail-history.component';
import { AttendanceComponent } from 'app/attendance/attendance.component';
import { TotalmemberreportComponent } from 'app/totalmemberreport/totalmemberreport.component';
import { TotalLeadsComponent } from 'app/total-leads/total-leads.component';
import { CounsellingappointmentComponent } from 'app/counsellingappointment/counsellingappointment.component';
import { CounsellingAppointmentListComponent } from 'app/counselling-appointment-list/counselling-appointment-list.component';
import { UpdateAppointmentComponent } from 'app/update-appointment/update-appointment.component';
import { PaymentHistoryComponent } from 'app/payment-history/payment-history.component';
import { PaymentHistoryListComponent } from 'app/payment-history-list/payment-history-list.component';
import { InquiryComponent } from 'app/inquiry/inquiry.component';
import { PaymentreceiptComponent } from 'app/paymentreceipt/paymentreceipt.component';
import { EnquirylistComponent } from 'app/enquirylist/enquirylist.component';
import { MainexerciseComponent } from 'app/mainexercise/mainexercise.component';
import { SubecerciseComponent } from 'app/subecercise/subecercise.component';
import { ExercisereportComponent } from 'app/exercisereport/exercisereport.component';
import { AddproductComponent } from 'app/addproduct/addproduct.component';
import { DistributorComponent } from 'app/distributor/distributor.component';
import { ProductComponent } from 'app/product/product.component';
import { DistributorlistComponent } from 'app/distributorlist/distributorlist.component';
import { UpdatedistributorComponent } from 'app/updatedistributor/updatedistributor.component';
import { UpdateproductComponent } from 'app/updateproduct/updateproduct.component';
import { ProductlistComponent } from 'app/productlist/productlist.component';
import { SubscriptionComponent } from 'app/subscription/subscription.component';
import { UpdatesubscriptionComponent } from 'app/updatesubscription/updatesubscription.component';
import { SubscriptionlistComponent } from 'app/subscriptionlist/subscriptionlist.component';
import { OrdersComponent } from 'app/orders/orders.component';
import { UpdateordersComponent } from 'app/updateorders/updateorders.component';
import { OrderslistComponent } from 'app/orderslist/orderslist.component';
import { UsersubscriptiondetailsComponent } from 'app/usersubscriptiondetails/usersubscriptiondetails.component';
import { UpdateusersubscriptiondetailsComponent } from 'app/updateusersubscriptiondetails/updateusersubscriptiondetails.component';
import { UsersubscriptiondetailslistComponent } from 'app/usersubscriptiondetailslist/usersubscriptiondetailslist.component';
import { SpecificationComponent } from 'app/specification/specification.component';
import { InstructionlistComponent } from 'app/instructionlist/instructionlist.component';
import { InstructionComponent } from 'app/instruction/instruction.component';
import { SpecificationlistComponent } from 'app/specificationlist/specificationlist.component';
import { MaincategoryComponent } from 'app/maincategory/maincategory.component';
import { MaincategorylistComponent } from 'app/maincategorylist/maincategorylist.component';
import { SubcategoryComponent } from 'app/subcategory/subcategory.component';
import { SubcategorylistComponent } from 'app/subcategorylist/subcategorylist.component';
import { OfferComponent } from 'app/offer/offer.component';
import { OfferlistComponent } from 'app/offerlist/offerlist.component';


export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
  
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'plans',        component: PlansComponent },
    { path: 'gymtrainerprofile',     component: GymTrainerProfileComponent },
    { path: 'gymprofile',        component: GymprofileComponent },
    { path: 'totalcollection',   component: TotalcollectionComponent },
    { path: 'addmember',   component: AddMemberComponent },
    { path: 'smstemplate',   component: SmsTemplateComponent },
    { path: 'unpaidmembers',   component: UnpaidmembersComponent },
    { path: 'members',   component: MembersComponent },
    { path: 'Login',   component: LoginComponent },
    { path: 'postjob',   component: PostjobComponent },
    { path: 'organization',   component: OrganizationComponent },
    { path: 'organizationplan',   component: OrganizationplanComponent },
    { path: 'organizationtype',   component: OrganizationtypeComponent },
    { path: 'studentplan',   component: StudentplanComponent },
    { path: 'orga',   component: StudentplanComponent },
    { path: 'studentplandetails',   component: StudentplandetailsComponent },
    { path: 'org-plan-details',   component: OrgPlanDetailsComponent },
    { path: 'adminregistration',   component: AdminregistrationComponent },
    { path: 'Admin-Login',        component: AdminLoginComponent },
     { path: 'orghrdetails',        component: OrghrdetailsComponent },
     { path: 'jobcategory',        component: JobcategoryComponent },
     { path: 'applicationdetailslist',        component: ApplicationDetailsListComponent },

     { path: 'updateapplicationdetails',        component: UpdateApplicationDetailsComponent },
     { path: 'applicationdetails',        component: ApplicationDetailsComponent },
     { path: 'businesstypes',        component: BusinesstypesComponent },
     { path: 'update-admin-profile/:id',        component: UpdateAdminProfileComponent },
     { path: 'admin-profile-list',        component: AdminProfileListComponent },
     { path: 'All-Jobs',        component: AllJobsComponent },
     { path: 'Update-Jobs/:id',        component: UpdateJobsComponent },
    { path: 'update-application-details/:id',        component: UpdateApplicationDetailsComponent },
    { path: 'student-plans-list',        component: StudentPlansListComponent },
    { path: 'update-student-plan/:id',        component: UpdateStudentPlanComponent },
    { path: 'orgnization-types-list',        component:OrgnizationTypesListComponent },
    { path: 'update-orgnization-type/:id',        component: UpdateOrgnizationTypeComponent },

    { path: 'organizationplan',   component: OrganizationplanComponent },
    { path: 'organizationplanlist',   component: OrganizationplanlistComponent },
    { path: 'updateorganizationplan/:id',   component: UpdateOrganizationPlanComponent },
    { path: 'investordetails/:id',   component: InvestordetailsComponent },
    { path: 'franchisedetails',        component: FranchisedetailsComponent },
    { path: 'updatefranchisedetails/:id', component: UpdatefranchisedetailsComponent},
    { path: 'franchisedetailslist',        component: FranchisedetailslistComponent },
    { path: 'organizationlist',   component: OrganizationlistComponent },
    { path: 'updateorganization/:id',   component: UpdateorganizationComponent },
    { path: 'Job-Category-List',        component: JobCategoryListComponent },
    { path: 'Update-Job-Category/:id',        component: UpdateJobCategoryComponent },
    { path: 'ApplyJobMasterList',   component: ApplyJobMasterListComponent },
    { path: 'jobseekerlist',   component: JobSeekerListComponent },
    { path: 'investorlist',   component: InvestorlistComponent },
    
  { path: 'updatePostJob/:id',   component: UpdatepostjobComponent },
  { path: 'postjoblist',   component: PostjoblistComponent },
{ path: 'update-business-category/:id',        component: UpdateBusinessCategoryComponent },
    { path: 'business-category-list',   component: BusinessCategoryListComponent },
    { path: 'studentplandetaillists',   component: StudentplandetaillistsComponent },
    { path: 'updatestudentplandetailslists/:id',   component: UpdatestudentplandetailslistComponent },
    { path: 'OTP',   component: OtpComponent },
    { path: 'reset-password',   component: ResetpasswordComponent },
  
    { path: 'member',   component: MemberComponent },
    { path: 'user-plan-detail',   component: UserPlanDetailComponent },
    { path: 'attendance-status',   component: AttendanceStatusComponent },
    { path: 'membership-plan',   component: MembershipPlanComponent },
    { path: 'member-health-info',   component: MemberHealthInfoComponent },
    { path: 'workout-type',   component: WorkoutTypeComponent },
    { path: 'user-workout-details',   component: UserWorkoutDetailsComponent },
    { path: 'attendence-history',   component: AttendenceHistoryComponent },
    { path: 'instructor',   component: InstructorComponent },
  //
  { path: 'membership-plan-list',   component: MembershipPlanListComponent },
  { path: 'member-list',   component: MemberListComponent },
  { path: 'instructor-list',   component: InstructorListComponent },
  { path: 'workout-type-list',   component: WorkoutTypeListComponent },
  { path: 'member-health-info-list',   component: MemberHealthInfoListComponent },
  { path: 'user-workout-details-list',   component: UserWorkoutDetailListComponent },
  { path: 'user-plan-details-list',   component: UserPlanDetailListComponent },
   //
   { path: 'update-membership-plan/:id', component: UpdateMembershipPlanComponent},
   { path: 'update-member-health-info/:id', component: UpdateMemberHealthInfoComponent},
   { path: 'update-member/:id', component: UpdateMemberComponent},
   { path: 'update-workout-type/:id', component: UpdateWorkoutTypeComponent},
   { path: 'update-instructor/:id', component: UpdateInstructorComponent},
   { path: 'update-user-plan-details/:id', component: UpdateUserPlanDetailsComponent},
   { path: 'update-user-workout-details/:id', component: UpdateUserWorkoutDetailsComponent},

   { path: 'exerciseroutine/:id', component: ExerciseroutineComponent},
   { path: 'diet-plan/:id',   component: DietPlanComponent },
   //
   { path: 'viewmemberhealthinfo/:id', component: ViewmemberhealthinfoComponent},
   { path: 'user-plan-detail-report',   component: UserPlanDetailReportComponent },
    { path: 'membership-plan-history',   component: MembershipPlanHistoryComponent },
    { path: 'user-workout-detail-history',   component: UserWorkoutDetailHistoryComponent },
    { path: 'attendance',   component: AttendanceComponent },
    { path: 'totalmemberreport',   component: TotalmemberreportComponent },
    { path: 'Appointment', component: CounsellingappointmentComponent}, 
    { path: 'AppointmentList', component: CounsellingAppointmentListComponent}, 
    { path: 'UpdateAppointment/:id',component: UpdateAppointmentComponent},
    { path: 'payment-history-list',   component: PaymentHistoryListComponent },
    //PaymentHistoryComponent
    { path: 'payment-history/:id',   component: PaymentHistoryComponent },
//
{ path: 'total-leads',   component: TotalLeadsComponent },
{ path: 'inquiry',   component: InquiryComponent },
{ path: 'paymentreceipt/:id',   component: PaymentreceiptComponent },
{ path: 'enquirylist',   component: EnquirylistComponent },
{ path: 'mainexercise',   component: MainexerciseComponent },
{ path: 'subecercise',   component: SubecerciseComponent },
{ path: 'exercisereport/:id',   component: ExercisereportComponent },

//giftShop

{ path: 'Addproduct',   component: AddproductComponent },
// dairy

{ path: 'distributor',   component: DistributorComponent },
{ path: 'distributorlist',   component: DistributorlistComponent },
{ path: 'updatedistributor/:id',   component: UpdatedistributorComponent },

{ path: 'product',   component: ProductComponent },
{ path: 'productlist',   component: ProductlistComponent },
{ path: 'updateproduct',   component: UpdateproductComponent },

{ path: 'subscription',   component: SubscriptionComponent },
{ path: 'subscriptionlist',   component: SubscriptionlistComponent },
{ path: 'updatesubscription',   component: UpdatesubscriptionComponent },

{ path: 'orders',   component: OrdersComponent },
{ path: 'orderslist',   component: OrderslistComponent },
{ path: 'updateorders',   component: UpdateordersComponent },

{ path: 'usersubscriptiondetails',   component: UsersubscriptiondetailsComponent },
{ path: 'usersubscriptiondetailslist',   component: UsersubscriptiondetailslistComponent },
{ path: 'updateusersubscriptiondetails',   component: UpdateusersubscriptiondetailsComponent },

//
{ path: 'specification',   component: SpecificationComponent },
{ path: 'specificationlist',   component: SpecificationlistComponent },
{ path: 'instruction',   component: InstructionComponent },
{ path: 'instructionlist',   component: InstructionlistComponent },
{ path: 'maincategory',   component: MaincategoryComponent },
{ path: 'maincategorylist',   component: MaincategorylistComponent },
{ path: 'subcategory',   component: SubcategoryComponent },
{ path: 'subcategorylist',   component: SubcategorylistComponent },
{ path: 'offer',   component: OfferComponent },
{ path: 'offerlist',   component: OfferlistComponent },



];