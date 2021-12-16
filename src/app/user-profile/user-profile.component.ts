import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import {
Registration, Experience, Searchcriteria, Franchisedetails, JobCategory, AdminMaster,
Applicationdetails, Businesstype, RegisterOTP, EducationMaster, Login, ForgotPassword,
ResetPassword, PostJobMaster, OrgType, OrganizationMaster, Orghrdetails, 
OrganizationPlanMaster, StudentPlanMaster, Orgplandetails,SubExercise, studentplandetails,MainExercise,MemberHealthInfo,UserWorkoutDetails,Instructor,WorkoutType,Member,AttendenceStatus,MembershipPlan,UserPlanDetails,Exercise,DietPlan,DietTable,ExerciseRoutine, CounsellingAppointment,PaymentHistory,Inquiry,Distributor,Products,Subscription,ProductSpecification,ProductInstructions,ProductReview,ProductOffer,SubCategory,MainCategory

} from "../Classes";
import { GlobalVariable } from "../Globals";
@Injectable({
  providedIn: 'root'
})


export class WebServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": 'GET, POST, OPTIONS'
    })
  };

  IsLogin: any;
  constructor(private http: HttpClient) {
    this.IsLogin = false;
   }

  // Login(UserName,Password): Observable<any> {
  //   return this.http.get<Login>( GlobalVariable.SERVICE_API_URL +"Registration/Login?UserName="+UserName+"&Password="+Password);
  // }
  AdminLogin(UserName,Password): Observable<any> {
    return this.http.get<Login>( GlobalVariable.SERVICE_API_URL +"Registration/AdminLogin?UserName="+UserName+"&Password="+Password);
  }

  ForgotPassword(ForgotPassword):Observable<any> {
    return this.http.post<ForgotPassword>( GlobalVariable.SERVICE_API_URL +"Registration/ForgotPassword", ForgotPassword, this.httpOptions);
  }

  ResetPassword(Mobile,Password):Observable<any> {
    return this.http.post<ResetPassword>( GlobalVariable.SERVICE_API_URL +"Registration/ResetAdminPassword?Mobile="+Mobile+"&Password="+Password, this.httpOptions);
  }

  AddJobSeeker(Registration): Observable<any> {
    return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"JobSeeker/AddJobSeeker", Registration, this.httpOptions);
  }

  AddPostJob(PostJobMaster): Observable<any> {
   
    return this.http.post<PostJobMaster>( GlobalVariable.SERVICE_API_URL +"PostJobMaster/AddPostJobMaster", PostJobMaster, this.httpOptions);
  }

  AddExp(Experience): Observable<any> {
    return this.http.post<Experience>( GlobalVariable.SERVICE_API_URL +"ExperianceInfo/AddExperianceInfo", Experience, this.httpOptions);
  }

  AddOtpDetails(RegisterOTP): Observable<any> {
    return this.http.post<RegisterOTP>( GlobalVariable.SERVICE_API_URL +"OtpDetails/AddOtpDetails", RegisterOTP, this.httpOptions);
  }

  AddEducationDetails(EducationMaster): Observable<any> {
    return this.http.post<EducationMaster>( GlobalVariable.SERVICE_API_URL +"EducationMaster/AddEducationMaster", EducationMaster, this.httpOptions);
  }

  GetOtpDetailsByMobileNumber(Mobile): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OtpDetails/GetOtpDetailsByMobileNumber?Mobile="+Mobile, this.httpOptions);
  }

  GetAllForgotPasswordDetails() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllForgotPasswordDetails", this.httpOptions);
  }

  GetAllUser() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllRegistration", this.httpOptions);
  }

  GetUserById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationById?Id="+Id, this.httpOptions);
  }

  GetAllEducationMaster(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"EducationMaster/GetAllEducationMaster", this.httpOptions);
  }

  GetAllOtpDetails(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OtpDetails/GetAllOtpDetails", this.httpOptions);
  }

  ResendOtp(Mobile,Otp): Observable<any> {
    return this.http.get<RegisterOTP>( GlobalVariable.SERVICE_API_URL +"OtpDetails/UpdateOtpByMobileNumber?Mobile="+Mobile+"&Otp="+Otp);
  }

  UpdateOtpStatus(mobile,otp): Observable<any> {
    return this.http.get<RegisterOTP>( GlobalVariable.SERVICE_API_URL +"OtpDetails/UpdateOtpStatus?otp="+otp+"&mobile="+mobile);
  }

  UpdateEducationDetails(EducationMaster): Observable<any> {
    return this.http.post<EducationMaster>( GlobalVariable.SERVICE_API_URL +"EducationMaster/UpdateEducationMaster",EducationMaster,this.httpOptions);
  }

  UpdateUser(Registration): Observable<any> {
    return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/UpdateRegistration", Registration, this.httpOptions);
  }

  UpdateRegistrationSkills(Registration): Observable<any> {
    return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"JobSeeker/UpdateRegistrationSkills",Registration,this.httpOptions);
  }

  DeleteEducationDetailsById(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"EducationMaster/DeleteEducationMaster?Id="+Id, this.httpOptions);
  }

  DeleteExperienceByID(id) {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL + "ExperianceInfo/DeleteExperianceInfo?Id=" + id,this.httpOptions);
  }

  UpdateExperienceDetails(Experience): Observable<any> {
    return this.http.post<Experience>( GlobalVariable.SERVICE_API_URL +"ExperianceInfo/UpdateExperianceInfo",Experience,this.httpOptions);
  }

  GetAllExperiencMaster(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ExperianceInfo/GetAllExperianceInfo", this.httpOptions);
  }

  AddOrganization(OrganizationMaster): Observable<any> {
    return this.http.post<OrganizationMaster>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/AddOrganizationMaster", OrganizationMaster, this.httpOptions);
  }

  AddOrgaHRDetails(Orghrdetails): Observable<any> {
    return this.http.post<Orghrdetails>( GlobalVariable.SERVICE_API_URL +"OrganizationHRDetails/AddOrganizationHRDetails", Orghrdetails, this.httpOptions);
  }

  AddOrganizationPlan(OrganizationPlan): Observable<any> {
    return this.http.post<OrganizationPlanMaster>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/AddOrganizationPlansMaster", OrganizationPlan, this.httpOptions);
  }

  GetAllCities() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"City/GetAllCity", this.httpOptions);
  }

  GetAllStates() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"State/GetAllState", this.httpOptions);
  }

  GetAllCountries() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Country/GetAllCountry", this.httpOptions);
  }
  GetAllOrg() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/GetAllOrganizationMaster", this.httpOptions);
  }
  GetAllOrganizationMaster() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/GetAllOrganizationMaster", this.httpOptions);
  }
  GetAllOrgPlans() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/GetAllOrganizationPlansMaster", this.httpOptions);
  }
  GetAllDashboardDetails(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"DashboardDetails/GetAllDashboardDetails", this.httpOptions);
  }
  AddOrganizationPlanDetails(Orgplandetails): Observable<any> {
    return this.http.post<Orgplandetails>( GlobalVariable.SERVICE_API_URL +"OrganizationPlanDetails/AddOrganizationPlanDetails",Orgplandetails, this.httpOptions);
  }
  SaveFranchiseImage(formdata,Id): Observable<any> {
    const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"FranchiseDetails/SaveFranchiseImage?Id="+Id, formdata, null );
    return this.http.request(uploadReq);
  }
  GetAllApplyJobSeeker() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ApplyJobMaster/GetAllApplyJobSeeker", this.httpOptions);
  }

  GetAllJobSeeker() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetAllJobSeeker", this.httpOptions);
  }
  GetAllJobSeekers() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetAllJobSeeker", this.httpOptions);
  }

  // GetAllStudentsPlans() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/GetAllStudentPlansMaster", this.httpOptions);
  // }

  GetAllAdminMaster(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdminMaster/GetAllAdminMaster", this.httpOptions);
  }

  AddStudentsPlanDetails(studentplandetails): Observable<any> {
    return this.http.post<studentplandetails>( GlobalVariable.SERVICE_API_URL +"StudentPlanDetails/AddStudentPlanDetails", studentplandetails, this.httpOptions);
  }
  GetAllAppliDetails() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/GetAllAppliDetails", this.httpOptions);
  }
  // GetUserDashboardById() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetAllJobSeeker", this.httpOptions);
  // }

  GetUserDashboardById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserDashboard/GetJobSeekerById?Id=" +Id, this.httpOptions);
  }

  GetJobSeekerById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetJobSeekerById?Id=" +Id, this.httpOptions);
  }

  SaveResume(formdata,Id): Observable<any> {
    const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"EducationMaster/SaveResume?Id="+Id, formdata, null );
    return this.http.request(uploadReq);
  }

  SaveProfilePhoto(formdata,Id): Observable<any> {
    const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"JobSeeker/SaveProfilePhoto?Id="+Id, formdata, null );
    return this.http.request(uploadReq);
  }

  AddBusiness(Businesstype): Observable<any> {
    return this.http.post<Businesstype>( GlobalVariable.SERVICE_API_URL +"BusinessType/AddBusiness", Businesstype, this.httpOptions);
  }

  GetAllBusinessTypes() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"BusinessType/GetAllBusiness", this.httpOptions);
  }

  AddJobCategory(JobCategory): Observable<any> {
    return this.http.post<JobCategory>( GlobalVariable.SERVICE_API_URL +"JobCategory/AddJobCategory", JobCategory, this.httpOptions);
  }

  AddAdminMaster(AdminMaster): Observable<any> {
    return this.http.post<AdminMaster>( GlobalVariable.SERVICE_API_URL +"AdminMaster/AddAdminMaster", AdminMaster, this.httpOptions);
  }

  UpdateAdminMaster(AdminMaster): Observable<any> {
    return this.http.post<AdminMaster>( GlobalVariable.SERVICE_API_URL +"AdminMaster/UpdateAdminMaster", AdminMaster, this.httpOptions);
  }

  GetAllOrgTypes() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationTypeMaster/GetAllOrganizationTypeMaster", this.httpOptions);
  }

  // UpdateApplicationDetails( Applicationdetails): Observable<any> {
  //   return this.http.post< Applicationdetails>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/UpdateApplicationDetails", Applicationdetails,this.httpOptions);
  // }

  // AddApplicationDetails(Applicationdetails): Observable<any> {
  //   return this.http.post<Applicationdetails>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/AddApplicationDetails", Applicationdetails, this.httpOptions);
  // }
  // GetAllApplicationDetails(): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/GetAllApplicationDetails", this.httpOptions);
  // }
  // DeleteApplicationDetails(Id): Observable<any> {
  //   return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"AdminMaster/DeleteAdminMaster?Id="+Id, this.httpOptions);
  // }
  DeleteAdminProfile(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/DeleteApplicationDetails?Id="+Id, this.httpOptions);
  }
  // GetApplicantsById(Id): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/GetApplicationDetailsById?Id=" +Id, this.httpOptions);
  // }
  GetAdminById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AdminMaster/GetAdminMasterById?Id=" +Id, this.httpOptions);
  }
  // AddFranchiseDetails(FranchiseDetails): Observable<any> {
  //   return this.http.post<Franchisedetails>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/AddFranchiseDetails", FranchiseDetails, this.httpOptions);
  // }
  // UpdateFranchiseDetails(FranchiseDetails): Observable<any> {
  //   return this.http.post<Franchisedetails>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/UpdateFranchiseDetails", FranchiseDetails, this.httpOptions);
  // }
  // DeleteFranchiseDetails(Id): Observable<any> {
  //   return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/DeleteFranchiseDetails?Id="+Id, this.httpOptions);
  // }
  // GetAllFranchiseDetails() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/GetAllFranchiseDetails", this.httpOptions);
  // }
  AddSearchCriteria(SearchCriteria): Observable<any> {
    return this.http.post<Searchcriteria>( GlobalVariable.SERVICE_API_URL +"SearchCriteria/AddSearchCriteria", SearchCriteria, this.httpOptions);
  }
  GetAllPostJobs() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"PostJobMaster/GetAllPostJobMaster", this.httpOptions);
  }
  DeleteJob(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"PostJobMaster/DeletePostJobMaster?Id="+Id, this.httpOptions);
  }
  GetJobById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"PostJobMaster/GetPostJobMasterById?Id=" +Id, this.httpOptions);
  }
   GetInvestorDetailsById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Investor/GetInvestorDetailsById?Id=" +Id, this.httpOptions);
  }
  GetAllInvestorDetails(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Investor/GetAllInvestorDetails", this.httpOptions);
  }

  UpdatePostJob(PostJobMaster): Observable<any> {
    // alert(121);
    return this.http.post<PostJobMaster>( GlobalVariable.SERVICE_API_URL +"PostJobMaster/UpdatePostJobMaster", PostJobMaster, this.httpOptions);
  }




  GetAllApplicationDetails(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/GetAllApplicationDetails", this.httpOptions);
  }


 GetApplicantsById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/GetApplicationDetailsById?Id=" +Id, this.httpOptions);
  }


AddApplicationDetails(Applicationdetails): Observable<any> {
    return this.http.post<Applicationdetails>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/AddApplicationDetails", Applicationdetails, this.httpOptions);
  }


 UpdateApplicationDetails( Applicationdetails): Observable<any> {
    return this.http.post< Applicationdetails>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/UpdateApplicationDetails", Applicationdetails,this.httpOptions);
  }

 DeleteApplicationDetails(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/DeleteApplicationDetails?Id="+Id, this.httpOptions);
  }


GetAllStudentsPlans() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/GetAllStudentPlansMaster", this.httpOptions);
  }

 GetStudentPlansMasterById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/GetStudentPlansMasterById?Id=" +Id, this.httpOptions);
  }
  DeleteStudentPlanDetails(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"StudentPlanDetails/DeleteStudentPlanDetails?Id="+Id, this.httpOptions);
  }
  GetStudentPlanDetailsById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"StudentPlanDetails/GetStudentPlanDetailsById?Id="+Id, this.httpOptions);
  }
  UpdateStudentPlanDetails( studentplandetails): Observable<any> {
    return this.http.put< studentplandetails>( GlobalVariable.SERVICE_API_URL +"StudentPlanDetails/UpdateStudentPlanDetails",studentplandetails,this.httpOptions);
  }


AddStudentPlan(StudentPlanMaster): Observable<any> {
    return this.http.post<StudentPlanMaster>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/AddStudentPlansMaster", StudentPlanMaster, this.httpOptions);
  }
  GetAllStudentsPlanDetails(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"StudentPlanDetails/GetAllStudentPlanDetails", this.httpOptions);
  }
UpdateStudentPlansMaster(Registration): Observable<any> {
    return this.http.put<Registration>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/UpdateStudentPlansMaster",Registration,this.httpOptions);
  }

DeleteStudentPlansMaster(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/DeleteStudentPlansMaster?Id="+Id, this.httpOptions);
  }

GetAllOrganizationType(): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationTypeMaster/GetAllOrganizationTypeMaster", this.httpOptions);
  }


 GetOrganizationTypeById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationTypeMaster/GetOrganizationTypeMasterById?Id="+Id, this.httpOptions);
  }


 AddOrgType(OrgType): Observable<any> {
    return this.http.post<OrgType>( GlobalVariable.SERVICE_API_URL +"OrganizationTypeMaster/AddOrganizationTypeMaster", OrgType, this.httpOptions);
  }
UpdateOrganizationType( OrgType): Observable<any> {
    return this.http.put< OrgType>( GlobalVariable.SERVICE_API_URL +"OrganizationTypeMaster/UpdateOrganizationTypeMaster", OrgType,this.httpOptions);
  }

DeleteOrganizationType(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"OrganizationTypeMaster/DeleteOrganizationTypeMaster?Id="+Id, this.httpOptions);
  }
  //Rohan
  GetAllOrganizationPlansMaster() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/GetAllOrganizationPlansMaster", this.httpOptions);
  }
  AddOrganizationPlansMaster(studentplandetails): Observable<any> {
    return this.http.post<studentplandetails>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/AddOrganizationPlansMaster", studentplandetails, this.httpOptions);
  }
  UpdateOrganizationPlansMaster(FranchiseDetails): Observable<any> {
    return this.http.put<Franchisedetails>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/UpdateOrganizationPlansMaster", FranchiseDetails, this.httpOptions);
  }
  GetOrganizationPlansMasterById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/GetOrganizationPlansMasterById?Id="+Id, this.httpOptions);
  }
DeleteOrganizationPlansMaster(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/DeleteOrganizationPlansMaster?Id="+Id, this.httpOptions);
  }
  AddFranchiseDetails(FranchiseDetails): Observable<any> {
    return this.http.post<Franchisedetails>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/AddFranchiseDetails", FranchiseDetails, this.httpOptions);
  }
  UpdateFranchiseDetails(FranchiseDetails): Observable<any> {
    return this.http.post<Franchisedetails>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/UpdateFranchiseDetails", FranchiseDetails, this.httpOptions);
  }
GetAllFranchiseDetails() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/GetAllFranchiseDetails", this.httpOptions);
  }
DeleteFranchiseDetails(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/DeleteFranchiseDetails?Id="+Id, this.httpOptions);
  }
  GetFranchiseDetailsById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"FranchiseDetails/GetFranchiseDetailsById?Id="+Id, this.httpOptions);
  }


  
  DeleteOrganizationMaster(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/DeleteOrganizationMaster?Id="+Id, this.httpOptions);
  }
 
  AddOrganizationMaster(studentplandetails): Observable<any> {
    return this.http.post<studentplandetails>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/AddOrganizationMaster", studentplandetails, this.httpOptions);
  }
  UpdateOrganizationMaster(FranchiseDetails): Observable<any> {
    return this.http.post<Franchisedetails>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/UpdateOrganizationMaster", FranchiseDetails, this.httpOptions);
  }
  GetOrganizationMasterById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/GetOrganizationMasterById?Id="+Id, this.httpOptions);
  }
  UpdateOrganization(OrganizationMaster): Observable<any> {
    return this.http.post<OrganizationMaster>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/UpdateOrganizationMaster", OrganizationMaster, this.httpOptions);
  }



  GetAllJobCategory() {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobCategory/GetAllJobCategory", this.httpOptions);
  }
  DeleteJobCategory(Id): Observable<any> {
    return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"JobCategory/DeleteJobCategory?Id="+Id, this.httpOptions);
  }
  UpdateJobCategory(JobCategory): Observable<any> {
    return this.http.post<JobCategory>( GlobalVariable.SERVICE_API_URL +"JobCategory/UpdateJobCategory", JobCategory, this.httpOptions);
  }
  GetJobCategoryById(Id): Observable<any> {
    return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobCategory/GetJobCategoryById?Id=" +Id, this.httpOptions);
  }
  
GetAllInvestor(): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Investor/GetAllInvestor", this.httpOptions);
}
GetAllBusiness() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"BusinessType/GetAllBusiness", this.httpOptions);
}

DeleteBusinessCategory(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"BusinessType/DeleteBusiness?Id="+Id, this.httpOptions);
}

UpdateBusinessType(Businesstype): Observable<any> {
  return this.http.post<Businesstype>( GlobalVariable.SERVICE_API_URL +"BusinessType/UpdateBusiness", Businesstype, this.httpOptions);
}

GetBusinessTypeById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"BusinessType/GetBusinessById?Id=" +Id, this.httpOptions);
}

SaveJobCategoryImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"JobCategory/SaveCategoryPhoto?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

SaveOrganizationImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"OrganizationMaster/SaveOrganizationImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

SaveInstructorImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"Instructor/SaveInstructorImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

//Gym Project

AddMemberHealthInfo(MemberHealthInfo): Observable<any> {
  return this.http.post<MemberHealthInfo>( GlobalVariable.SERVICE_API_URL +"MemberHealthInfo/AddMemberHealthInfo", MemberHealthInfo, this.httpOptions);
}

AddUserWorkoutDetails(UserWorkoutDetails): Observable<any> {
  return this.http.post<UserWorkoutDetails>( GlobalVariable.SERVICE_API_URL +"UserWorkoutDetails/AddUserWorkoutDetails", UserWorkoutDetails, this.httpOptions);
}

AddInstructor(Instructor): Observable<any> {
  return this.http.post<Instructor>( GlobalVariable.SERVICE_API_URL +"Instructor/AddInstructor", Instructor, this.httpOptions);
}

AddWorkoutType(WorkoutType): Observable<any> {
  return this.http.post<WorkoutType>( GlobalVariable.SERVICE_API_URL +"WorkoutType/AddWorkoutType", WorkoutType, this.httpOptions);
}
AddMainExercise(MainExercise): Observable<any> {
  return this.http.post<MainExercise>( GlobalVariable.SERVICE_API_URL +"MainExercise/AddMainExercise", MainExercise, this.httpOptions);
}

AddMember(Member): Observable<any> {
  return this.http.post<Member>( GlobalVariable.SERVICE_API_URL +"Member/AddMember", Member, this.httpOptions);
}
SaveMemberImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"Member/SaveMemberImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

AddAttendenceStatus(AttendenceStatus): Observable<any> {
  return this.http.post<AttendenceStatus>( GlobalVariable.SERVICE_API_URL +"AttendenceStatus/AddAttendenceStatus", AttendenceStatus, this.httpOptions);
}

AddMembershipPlan(MembershipPlan): Observable<any> {
  return this.http.post<MembershipPlan>( GlobalVariable.SERVICE_API_URL +"MembershipPlan/AddMembershipPlan", MembershipPlan, this.httpOptions);
}
AddUserPlanDetails(UserPlanDetails): Observable<any> {
  return this.http.post<UserPlanDetails>( GlobalVariable.SERVICE_API_URL +"UserPlanDetails/AddUserPlanDetails", UserPlanDetails, this.httpOptions);
}

//
GetAllMembershipPlan() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"MembershipPlan/GetAllMembershipPlan", this.httpOptions);
}
DeleteMembershipPlan(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"MembershipPlan/DeleteMembershipPlan?Id="+Id, this.httpOptions);
}
UpdateMembershipPlan(MembershipPlan): Observable<any> {
  return this.http.post<MembershipPlan>( GlobalVariable.SERVICE_API_URL +"MembershipPlan/UpdateMembershipPlan", MembershipPlan, this.httpOptions);
}
GetMembershipPlanById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"MembershipPlan/GetMembershipPlanById?Id=" +Id, this.httpOptions);
}

GetAllMember() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Member/GetAllMember", this.httpOptions);
}
DeleteMember(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Member/DeleteMember?Id="+Id, this.httpOptions);
}
UpdateMember(Member): Observable<any> {
  return this.http.post<Member>( GlobalVariable.SERVICE_API_URL +"Member/UpdateMember", Member, this.httpOptions);
}
GetMemberById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Member/GetMemberById?Id=" +Id, this.httpOptions);
}

GetAllInstructor() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Instructor/GetAllInstructor", this.httpOptions);
}
DeleteInstructor(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Instructor/DeleteInstructor?Id="+Id,this.httpOptions);
}
UpdateInstructor(Instructor): Observable<any> {
  return this.http.put<Instructor>( GlobalVariable.SERVICE_API_URL +"Instructor/UpdateInstructor",Instructor,this.httpOptions);
}
GetInstructorById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Instructor/GetInstructorById?Id=" +Id, this.httpOptions);
}

GetAllWorkoutType() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"WorkoutType/GetAllWorkoutType", this.httpOptions);
}
DeleteWorkoutType(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"WorkoutType/DeleteWorkoutType?Id="+Id,this.httpOptions);
}
UpdateWorkoutType(WorkoutType): Observable<any> {
  return this.http.put<WorkoutType>( GlobalVariable.SERVICE_API_URL +"WorkoutType/UpdateWorkoutType",WorkoutType,this.httpOptions);
}
GetWorkoutTypeById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"WorkoutType/GetWorkoutTypeById?Id=" +Id, this.httpOptions);
}

GetAllMemberHealthInfo() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"MemberHealthInfo/GetAllMemberHealthInfo", this.httpOptions);
}
DeleteMemberHealthInfo(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"MemberHealthInfo/DeleteMemberHealthInfo?Id="+Id,this.httpOptions);
}
UpdateMemberHealthInfo(MemberHealthInfo): Observable<any> {
  return this.http.put<MemberHealthInfo>( GlobalVariable.SERVICE_API_URL +"MemberHealthInfo/UpdateMemberHealthInfo",MemberHealthInfo,this.httpOptions);
}
GetMemberHealthInfoById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"MemberHealthInfo/GetMemberHealthInfoById?Id=" +Id, this.httpOptions);
}

GetAllUserWorkoutDetails() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserWorkoutDetails/GetAllUserWorkoutDetails", this.httpOptions);
}
DeleteUserWorkoutDetails(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserWorkoutDetails/DeleteUserWorkoutDetails?Id="+Id,this.httpOptions);
}
UpdateUserWorkoutDetails(UserWorkoutDetails): Observable<any> {
  return this.http.post<UserWorkoutDetails>( GlobalVariable.SERVICE_API_URL +"UserWorkoutDetails/UpdateUserWorkoutDetails",UserWorkoutDetails,this.httpOptions);
}
GetUserWorkoutDetailsById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserWorkoutDetails/GetUserWorkoutDetailsById?Id=" +Id, this.httpOptions);
}

GetAllUserPlanDetails() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserPlanDetails/GetAllUserPlanDetails", this.httpOptions);
}
DeleteUserPlanDetails(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"UserPlanDetails/DeleteUserPlanDetails?Id="+Id,this.httpOptions);
}
UpdateUserPlanDetails(UserPlanDetails): Observable<any> {
  return this.http.post<UserPlanDetails>( GlobalVariable.SERVICE_API_URL +"UserPlanDetails/UpdateUserPlanDetails",UserPlanDetails,this.httpOptions);
}
GetUserPlanDetailsById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserPlanDetails/GetUserPlanDetailsById?Id=" +Id, this.httpOptions);
}
AddExercise(Exercise): Observable<any> {
  return this.http.post<Exercise>( GlobalVariable.SERVICE_API_URL +"Exercise/AddExercise", Exercise, this.httpOptions);
}
GetAllExercise() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Exercise/GetAllExercise", this.httpOptions);
}
DeleteExercise(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Exercise/DeleteExercise?Id="+Id, this.httpOptions);
}
AddDietPlan(DietPlan): Observable<any> {
  return this.http.post<DietPlan>( GlobalVariable.SERVICE_API_URL +"DietPlan/AddDietPlan", DietPlan, this.httpOptions);
}
AddDietTable(DietTable): Observable<any> {
  return this.http.post<DietTable>( GlobalVariable.SERVICE_API_URL +"DietTable/AddDietTable", DietTable, this.httpOptions);
}
GetAllDietTable() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"DietTable/GetAllDietTable", this.httpOptions);
}
//GetExerciseRoutineById
DeleteDietTable(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"DietTable/DeleteDietTable?Id="+Id,this.httpOptions);
}
GetDietTableById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"DietTable/GetDietTableById?Id="+Id, this.httpOptions);
}
GetExerciseById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Exercise/GetExerciseById?Id="+Id, this.httpOptions);
}
AddExerciseRoutine(ExerciseRoutine): Observable<any> {
  return this.http.post<ExerciseRoutine>( GlobalVariable.SERVICE_API_URL +"ExerciseRoutine/AddExerciseRoutine",ExerciseRoutine, this.httpOptions);
}
// GetExerciseRoutineById(Id): Observable<any> {
//   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ExerciseRoutine/GetExerciseRoutineById?Id="+Id, this.httpOptions);
// }
AddCounsellingAppointment(CounsellingAppointment): Observable<any> {
  return this.http.post<CounsellingAppointment>( GlobalVariable.SERVICE_API_URL +"CounsellingAppointment/AddCounsellingAppointment", CounsellingAppointment, this.httpOptions);
}
GetAllCounsellingAppointment() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CounsellingAppointment/GetAllCounsellingAppointment", this.httpOptions);
}
DeleteCounsellingAppointment(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"CounsellingAppointment/DeleteCounsellingAppointment?Id="+Id,this.httpOptions);
}
GetCounsellingAppointmentById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"CounsellingAppointment/GetCounsellingAppointmentById?Id=" +Id, this.httpOptions);
}
UpdateCounsellingAppointment(CounsellingAppointment): Observable<any> {
  return this.http.post<CounsellingAppointment>( GlobalVariable.SERVICE_API_URL +"CounsellingAppointment/UpdateCounsellingAppointment", CounsellingAppointment, this.httpOptions);
}
//Paymemt DeleteExerciseRoutine
AddPaymentHistory(PaymentHistory): Observable<any> {
  return this.http.post<PaymentHistory>( GlobalVariable.SERVICE_API_URL +"PaymentHistory/AddPaymentHistory",PaymentHistory, this.httpOptions);
}
GetAllPaymentHistory() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"PaymentHistory/GetAllPaymentHistory", this.httpOptions);
}
//
GetAllExerciseRoutine() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ExerciseRoutine/GetAllExerciseRoutine", this.httpOptions);
}
DeleteExerciseRoutine(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ExerciseRoutine/DeleteExerciseRoutine?Id="+Id,this.httpOptions);
}
AddInquiry(Inquiry): Observable<any> {
  return this.http.post<Inquiry>( GlobalVariable.SERVICE_API_URL +"Inquiry/AddInquiry",Inquiry, this.httpOptions);
}
GetAllInquiry() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Inquiry/GetAllInquiry", this.httpOptions);
}
GetInquiryById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Inquiry/GetInquiryById?Id=" +Id, this.httpOptions);
}
DeleteInquiry(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Inquiry/DeleteInquiry?Id="+Id,this.httpOptions);
}
UpdateInquiry(Inquiry): Observable<any> {
  return this.http.post<Inquiry>( GlobalVariable.SERVICE_API_URL +"Inquiry/UpdateInquiry", Inquiry, this.httpOptions);
}
GetAllAttendenceStatus(): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"AttendenceStatus/GetAllAttendenceStatus", this.httpOptions);
}
GetPaymentHistoryById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"PaymentHistory/GetPaymentHistoryById?Id=" +Id, this.httpOptions);
}
//GetAllSubExercise

GetAllMainExercise() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"MainExercise/GetAllMainExercise", this.httpOptions);
}
GetAllSubExercise() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"SubExercise/GetAllSubExercise", this.httpOptions);
}
AddSubExercise(SubExercise): Observable<any> {
  return this.http.post<SubExercise>( GlobalVariable.SERVICE_API_URL +"SubExercise/AddSubExercise", SubExercise, this.httpOptions);
}



// Dairy Start********************
AddDistributor(Distributor): Observable<any> {
  return this.http.post<Distributor>( GlobalVariable.SERVICE_API_URL +"Distributor/AddDistributor", Distributor, this.httpOptions);
}
GetAllDistributor() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Distributor/GetAllDistributor", this.httpOptions);
}
GetAllProductSpecification() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ProductSpecification/GetAllProductSpecification", this.httpOptions);
}
GetAllProductInstructions() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ProductInstructions/GetAllProductInstructions", this.httpOptions);
}
GetAllMainCategory() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"MainCategory/GetAllMainCategory", this.httpOptions);
}

GetAllSubCategory() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"SubCategory/GetAllSubCategory", this.httpOptions);
}
GetAllProductOffer() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ProductOffer/GetAllProductOffer", this.httpOptions);
}
GetDistributorById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Distributor/GetDistributorById?Id=" +Id, this.httpOptions);
}

DeleteDistributor(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Distributor/DeleteDistributor?Id="+Id,this.httpOptions);
}
DeleteProducts(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Products/DeleteProducts?Id="+Id,this.httpOptions);
}
DeleteProductSpecification(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ProductSpecification/DeleteProductSpecification?Id="+Id,this.httpOptions);
}
DeleteProductInstruction(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ProductInstructions/DeleteProductInstruction?Id="+Id,this.httpOptions);
}

DeleteSubscription(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"Subscription/DeleteSubscription?Id="+Id,this.httpOptions);
}

DeleteMainCategory(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"MainCategory/DeleteMainCategory?Id="+Id,this.httpOptions);
}

DeleteSubCategory(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"SubCategory/DeleteSubCategory?Id="+Id,this.httpOptions);
}

DeleteProductOffer(Id): Observable<any> {
  return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"ProductOffer/DeleteProductOffer?Id="+Id,this.httpOptions);
}
UpdateDistributorById(Distributor): Observable<any> {
  return this.http.put<Distributor>( GlobalVariable.SERVICE_API_URL +"Distributor/UpdateDistributorById", Distributor, this.httpOptions);
}

SaveDistributorImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"Distributor/SaveDistributorImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

AddProducts(Products): Observable<any> {
  return this.http.post<Products>( GlobalVariable.SERVICE_API_URL +"Products/AddProducts", Products, this.httpOptions);
}

GetAllProducts() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Products/GetAllProducts", this.httpOptions);
}

GetAllRegistration() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllRegistration", this.httpOptions);
}
SaveProductsImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"Products/SaveProductsImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}


AddSubscription(Subscription): Observable<any> {
  return this.http.post<Subscription>( GlobalVariable.SERVICE_API_URL +"Subscription/AddSubscription", Subscription, this.httpOptions);
}
GetAllSubscription() {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Subscription/GetAllSubscription", this.httpOptions);
}
DeleteSubscriptionById(Id): Observable<any> {
  return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Subscription/GetSubscriptionId?Id=" +Id, this.httpOptions);
}


SaveSubscriptionImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"Subscription/SaveSubscriptionImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

AddProductSpecifications(ProductSpecification): Observable<any> {
  return this.http.post<ProductSpecification>( GlobalVariable.SERVICE_API_URL +"ProductSpecifications/AddProductSpecifications", ProductSpecification, this.httpOptions);
}
AddProductInstructions(ProductInstructions): Observable<any> {
  return this.http.post<ProductInstructions>( GlobalVariable.SERVICE_API_URL +"ProductInstructions/AddProductInstructions", ProductInstructions, this.httpOptions);
}


AddMainCategory(MainCategory): Observable<any> {
  return this.http.post<MainCategory>( GlobalVariable.SERVICE_API_URL +"MainCategory/AddMainCategory", MainCategory, this.httpOptions);
}
SaveMainCategoryImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"MainCategory/SaveMainCategoryImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

AddSubCategory(SubCategory): Observable<any> {
  return this.http.post<SubCategory>( GlobalVariable.SERVICE_API_URL +"SubCategory/AddSubCategory", SubCategory, this.httpOptions);
}
SaveSubCategoryImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"SubCategory/SaveSubCategoryImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

AddProductOffer(ProductOffer): Observable<any> {
  return this.http.post<ProductOffer>( GlobalVariable.SERVICE_API_URL +"ProductOffer/AddProductOffer", ProductOffer, this.httpOptions);
}
SaveProductOfferImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"ProductOffer/SaveProductOfferImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

AddProductReview(ProductReview): Observable<any> {
  return this.http.post<ProductReview>( GlobalVariable.SERVICE_API_URL +"ProductReview/AddProductReview", ProductReview, this.httpOptions);
}
SaveProductReviewImage(formdata,Id): Observable<any> {
  const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"ProductReview/SaveProductReviewImage?Id="+Id, formdata, null );
  return this.http.request(uploadReq);
}

Login(Email,Password): Observable<any> {
  return this.http.get<Login>( GlobalVariable.SERVICE_API_URL +"Registration/Login?Email="+Email+"&Password="+Password);
}

AddRegistration(Registration): Observable<any> {
  return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/AddRegistration", Registration, this.httpOptions);
}

}



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
