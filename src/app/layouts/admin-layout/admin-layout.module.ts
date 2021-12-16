import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { PlansComponent } from 'app/plans/plans.component';
import { GymprofileComponent } from 'app/gymprofile/gymprofile.component';
import { TotalcollectionComponent } from 'app/totalcollection/totalcollection.component';
import { GymTrainerProfileComponent } from 'app/gym-trainer-profile/gym-trainer-profile.component';
import { AddMemberComponent } from 'app/add-member/add-member.component';
import { SmsTemplateComponent } from 'app/sms-template/sms-template.component';
import { UnpaidmembersComponent } from 'app/unpaidmembers/unpaidmembers.component';
import { MembersComponent } from 'app/members/members.component';
import { AdminregistrationComponent } from 'app/adminregistration/adminregistration.component';
import { LoginComponent } from 'app/login/login.component';
import { PostjobComponent } from 'app/postjob/postjob.component';
import { OrganizationtypeComponent } from 'app/organizationtype/organizationtype.component';
import { OrganizationComponent } from 'app/organization/organization.component';
import { OrganizationplanComponent } from 'app/organizationplan/organizationplan.component';
import { StudentplanComponent } from 'app/studentplan/studentplan.component';
import { OrgPlanDetailsComponent } from 'app/org-plan-details/org-plan-details.component';
import { StudentplandetailsComponent } from 'app/studentplandetails/studentplandetails.component';
import { AdminLoginComponent } from '../../admin-login/admin-login.component';
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


import { OrganizationplanlistComponent } from 'app/organizationplanlist/organizationplanlist.component';
// import { OrganizationplanComponent } from 'app/organizationplan/organizationplan.component';
import { UpdateOrganizationPlanComponent } from 'app/updateorganizationplan/updateorganizationplan.component';

import { FranchisedetailsComponent } from 'app/franchisedetails/franchisedetails.component';
import { FranchisedetailslistComponent } from 'app/franchisedetailslist/franchisedetailslist.component';
import { UpdatefranchisedetailsComponent } from 'app/updatefranchisedetails/updatefranchisedetails.component';

import { OrganizationlistComponent } from 'app/organizationlist/organizationlist.component';
import { UpdateorganizationComponent } from 'app/updateorganization/updateorganization.component';
import { JobCategoryListComponent } from 'app/job-category-list/job-category-list.component';
import { UpdateJobCategoryComponent } from 'app/update-job-category/update-job-category.component';
import { InvestordetailsComponent } from 'app/investordetails/investordetails.component';
import { ApplyJobMasterListComponent } from 'app/apply-job-master-list/apply-job-master-list.component';
import { JobSeekerListComponent } from 'app/job-seeker-list/job-seeker-list.component';
import { InvestorlistComponent } from 'app/investorlist/investorlist.component';
import { BusinessCategoryListComponent } from 'app/business-category-list/business-category-list.component';
import { UpdateBusinessCategoryComponent } from 'app/update-business-category/update-business-category.component';

import { StudentplandetaillistsComponent } from 'app/studentplandetaillists/studentplandetaillists.component';
import { UpdatestudentplandetailslistComponent } from 'app/updatestudentplandetailslist/updatestudentplandetailslist.component';
import { PostjoblistComponent } from 'app/postjoblist/postjoblist.component';
import { UpdatepostjobComponent } from 'app/updatepostjob/updatepostjob.component';
import { OtpComponent } from 'app/otp/otp.component';
import { ResetpasswordComponent } from 'app/resetpassword/resetpassword.component';
import { WorkoutTypeComponent } from 'app/workout-type/workout-type.component';
import { MembershipPlanComponent } from 'app/membership-plan/membership-plan.component';
import { UserPlanDetailComponent } from 'app/user-plan-detail/user-plan-detail.component';
import { MemberComponent } from 'app/member/member.component';
import { AttendanceStatusComponent } from 'app/attendance-status/attendance-status.component';
import { MemberHealthInfoComponent } from 'app/member-health-info/member-health-info.component';
import { InstructorComponent } from 'app/instructor/instructor.component';
import { UserWorkoutDetailsComponent } from 'app/user-workout-details/user-workout-details.component';
import { AttendenceHistoryComponent } from 'app/attendence-history/attendence-history.component';
import { MembershipPlanListComponent } from 'app/membership-plan-list/membership-plan-list.component';
import { MemberListComponent } from 'app/member-list/member-list.component';
import { InstructorListComponent } from 'app/instructor-list/instructor-list.component';
import { WorkoutTypeListComponent } from 'app/workout-type-list/workout-type-list.component';
import { MemberHealthInfoListComponent } from 'app/member-health-info-list/member-health-info-list.component';
import { UserWorkoutDetailListComponent } from 'app/user-workout-detail-list/user-workout-detail-list.component';
import { UserPlanDetailListComponent } from 'app/user-plan-detail-list/user-plan-detail-list.component';
import { UpdateMembershipPlanComponent } from 'app/update-membership-plan/update-membership-plan.component';
import { UpdateMemberHealthInfoComponent } from 'app/update-member-health-info/update-member-health-info.component';
import { UpdateWorkoutTypeComponent } from 'app/update-workout-type/update-workout-type.component';
import { UpdateMemberComponent } from 'app/update-member/update-member.component';
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
import { PaymentHistoryListComponent } from 'app/payment-history-list/payment-history-list.component';
import { PaymentHistoryComponent } from 'app/payment-history/payment-history.component';
import { InquiryComponent } from 'app/inquiry/inquiry.component';
import { PaymentreceiptComponent } from 'app/paymentreceipt/paymentreceipt.component';
import { EnquirylistComponent } from 'app/enquirylist/enquirylist.component';
import { MainexerciseComponent } from 'app/mainexercise/mainexercise.component';
import { SubecerciseComponent } from 'app/subecercise/subecercise.component';
import { ExercisereportComponent } from 'app/exercisereport/exercisereport.component';
import { AddproductComponent } from 'app/addproduct/addproduct.component';


@NgModule({
  providers: [DatePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TotalcollectionComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PlansComponent,
    
    GymprofileComponent,
    GymTrainerProfileComponent,
    AddMemberComponent,
    SmsTemplateComponent,
    UnpaidmembersComponent,
    MembersComponent,
    LoginComponent,
    PostjobComponent,
    OrganizationComponent,
    OrganizationtypeComponent,
    AdminregistrationComponent,
    OrganizationplanComponent,
    OrgPlanDetailsComponent,
    StudentplanComponent,
    StudentplandetailsComponent,
    OrghrdetailsComponent,
    BusinesstypesComponent,
    JobcategoryComponent,
    ApplicationDetailsListComponent,
    ApplicationDetailsComponent,
    UpdateApplicationDetailsComponent,
    AdminLoginComponent,
    UpdateAdminProfileComponent,
    AdminProfileListComponent,
    AllJobsComponent,
    UpdateJobsComponent,
    StudentPlansListComponent,
    UpdateStudentPlanComponent,
    OrgnizationTypesListComponent,
    UpdateOrgnizationTypeComponent,
    OrganizationplanlistComponent,
    OrganizationplanComponent,
    UpdateOrganizationPlanComponent,
    FranchisedetailsComponent,
    FranchisedetailslistComponent,
    UpdatefranchisedetailsComponent,
    OrganizationlistComponent,
    UpdateorganizationComponent,
    JobCategoryListComponent,
    UpdateJobCategoryComponent,
    JobSeekerListComponent,
    ApplyJobMasterListComponent,
    InvestorlistComponent,
    
    PostjoblistComponent,
    UpdatepostjobComponent,
    BusinessCategoryListComponent,
    UpdateBusinessCategoryComponent,
    InvestordetailsComponent,
    UpdatestudentplandetailslistComponent,
    StudentplandetaillistsComponent,
    UpdateorganizationComponent,
    OtpComponent,
    ResetpasswordComponent,

    WorkoutTypeComponent,
    MembershipPlanComponent,
    UserPlanDetailComponent,
    MemberComponent,
    AttendanceStatusComponent,
    MemberHealthInfoComponent,
    InstructorComponent,
    UserWorkoutDetailsComponent,
    AttendenceHistoryComponent,
//
    MembershipPlanListComponent,
    MemberListComponent,
    InstructorListComponent,
    WorkoutTypeListComponent,
    MemberHealthInfoListComponent,
    UserWorkoutDetailListComponent,
    UserPlanDetailListComponent,

     //
     UpdateMembershipPlanComponent,
     UpdateMemberHealthInfoComponent,
     UpdateWorkoutTypeComponent,
     UpdateMemberComponent,
     UpdateInstructorComponent,
     UpdateUserPlanDetailsComponent,
     UpdateUserWorkoutDetailsComponent,
    
     DietPlanComponent,
     ExerciseroutineComponent,
     ViewmemberhealthinfoComponent,
     //
     UserPlanDetailReportComponent,
     MembershipPlanHistoryComponent,
     UserWorkoutDetailHistoryComponent,
     TotalmemberreportComponent,
     AttendanceComponent,
     CounsellingappointmentComponent,
     CounsellingAppointmentListComponent,
     UpdateAppointmentComponent,
     PaymentHistoryComponent,
     PaymentHistoryListComponent,
     InquiryComponent,
     PaymentreceiptComponent,
     EnquirylistComponent,
     MainexerciseComponent,
     SubecerciseComponent,
     ExercisereportComponent,
//
TotalLeadsComponent,

//giftshop
AddproductComponent,


  ]
})

export class AdminLayoutModule {}