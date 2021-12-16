import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClient } from '@angular/common/http';
// import { Observable} from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';
// import {
// Registration, Experience,RegisterOTP,EducationMaster,Login,ForgotPassword,ResetPassword,PostJobMaster, OrgType, OrganizationMaster, Orghrdetails, OrganizationPlanMaster, StudentPlanMaster, Orgplandetails, studentplandetails
// } from "./Classes";
// import { GlobalVariable } from "./Globals";
// import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class WebServiceService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     "Access-Control-Allow-Headers": "Content-Type",
  //     "Access-Control-Allow-Methods": 'GET, POST, OPTIONS'
  //   })
  // };

  // IsLogin: any;
  // constructor(private http: HttpClient) {
  //   this.IsLogin = false;
  //  }

  // Login(UserName,Password): Observable<any> {
  //   return this.http.get<Login>( GlobalVariable.SERVICE_API_URL +"Registration/Login?UserName="+UserName+"&Password="+Password);
  // }

  // ForgotPassword(ForgotPassword):Observable<any> {
  //   return this.http.post<ForgotPassword>( GlobalVariable.SERVICE_API_URL +"Registration/ForgotPassword", ForgotPassword, this.httpOptions);
  // }

  // ResetPassword(Mobile,Password):Observable<any> {
  //   return this.http.post<ResetPassword>( GlobalVariable.SERVICE_API_URL +"Registration/ResetPassword?Mobile="+Mobile+"&Password="+Password, this.httpOptions);
  // }

  // AddJobSeeker(Registration): Observable<any> {
  //   return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"JobSeeker/AddJobSeeker", Registration, this.httpOptions);
  // }

  // AddPostJob(PostJobMaster): Observable<any> {
  //   return this.http.post<PostJobMaster>( GlobalVariable.SERVICE_API_URL +"PostJobMaster/AddPostJobMaster", PostJobMaster, this.httpOptions);
  // }

  // AddExp(Experience): Observable<any> {
  //   return this.http.post<Experience>( GlobalVariable.SERVICE_API_URL +"ExperianceInfo/AddExperianceInfo", Experience, this.httpOptions);
  // }

  // AddOtpDetails(RegisterOTP): Observable<any> {
  //   return this.http.post<RegisterOTP>( GlobalVariable.SERVICE_API_URL +"OtpDetails/AddOtpDetails", RegisterOTP, this.httpOptions);
  // }

  // AddEducationDetails(EducationMaster): Observable<any> {
  //   return this.http.post<EducationMaster>( GlobalVariable.SERVICE_API_URL +"EducationMaster/AddEducationMaster", EducationMaster, this.httpOptions);
  // }

  // GetOtpDetailsByMobileNumber(Mobile): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OtpDetails/GetOtpDetailsByMobileNumber?Mobile="+Mobile, this.httpOptions);
  // }

  // GetAllForgotPasswordDetails() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllForgotPasswordDetails", this.httpOptions);
  // }

  // GetAllUser() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetAllRegistration", this.httpOptions);
  // }
  
  // GetAllCities() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"City/GetAllCity", this.httpOptions);
  // }

  // GetAllStates() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"State/GetAllState", this.httpOptions);
  // }

  // GetAllCountries() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Country/GetAllCountry", this.httpOptions);
  // }

  // GetUserById(Id): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"Registration/GetRegistrationById?Id="+Id, this.httpOptions);
  // }

  // GetAllEducationMaster(): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"EducationMaster/GetAllEducationMaster", this.httpOptions);
  // }

  // GetAllOtpDetails(): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OtpDetails/GetAllOtpDetails", this.httpOptions);
  // }

  // ResendOtp(Mobile,Otp): Observable<any> {
  //   return this.http.get<RegisterOTP>( GlobalVariable.SERVICE_API_URL +"OtpDetails/UpdateOtpByMobileNumber?Mobile="+Mobile+"&Otp="+Otp);
  // }

  // UpdateOtpStatus(mobile,otp): Observable<any> {
  //   return this.http.get<RegisterOTP>( GlobalVariable.SERVICE_API_URL +"OtpDetails/UpdateOtpStatus?otp="+otp+"&mobile="+mobile);
  // }

  // UpdateEducationDetails(EducationMaster): Observable<any> {
  //   return this.http.post<EducationMaster>( GlobalVariable.SERVICE_API_URL +"EducationMaster/UpdateEducationMaster",EducationMaster,this.httpOptions);
  // }

  // UpdateUser(Registration): Observable<any> {
  //   return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"Registration/UpdateRegistration", Registration, this.httpOptions);
  // }

  // UpdateRegistrationSkills(Registration): Observable<any> {
  //   return this.http.post<Registration>( GlobalVariable.SERVICE_API_URL +"JobSeeker/UpdateRegistrationSkills",Registration,this.httpOptions);
  // }

  // DeleteEducationDetailsById(Id): Observable<any> {
  //   return this.http.delete<any>( GlobalVariable.SERVICE_API_URL +"EducationMaster/DeleteEducationMaster?Id="+Id, this.httpOptions);
  // }

  // DeleteExperienceByID(id) {
  //   return this.http.delete<any>( GlobalVariable.SERVICE_API_URL + "ExperianceInfo/DeleteExperianceInfo?Id=" + id,this.httpOptions);
  // }

  // UpdateExperienceDetails(Experience): Observable<any> {
  //   return this.http.post<Experience>( GlobalVariable.SERVICE_API_URL +"ExperianceInfo/UpdateExperianceInfo",Experience,this.httpOptions);
  // }

  // GetAllExperiencMaster(): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ExperianceInfo/GetAllExperianceInfo", this.httpOptions);
  // }

  // AddOrgType(OrgType): Observable<any> {
  //   return this.http.post<OrgType>( GlobalVariable.SERVICE_API_URL +"OrganizationTypeMaster/AddOrganizationTypeMaster", OrgType, this.httpOptions);
  // }

  // AddOrganization(OrganizationMaster): Observable<any> {
  //   return this.http.post<OrganizationMaster>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/AddOrganizationMaster", OrganizationMaster, this.httpOptions);
  // }

  // AddOrgaHRDetails(Orghrdetails): Observable<any> {
  //   return this.http.post<Orghrdetails>( GlobalVariable.SERVICE_API_URL +"OrganizationHRDetails/AddOrganizationHRDetails", Orghrdetails, this.httpOptions);
  // }

  // AddOrganizationPlan(OrganizationPlan): Observable<any> {
  //   return this.http.post<OrganizationPlanMaster>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/AddOrganizationPlansMaster", OrganizationPlan, this.httpOptions);
  // }

  // AddStudentPlan(StudentPlanMaster): Observable<any> {
  //   return this.http.post<StudentPlanMaster>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/AddStudentPlansMaster", StudentPlanMaster, this.httpOptions);
  // }

  // GetAllOrg() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationMaster/GetAllOrganizationMaster", this.httpOptions);
  // }

  // GetAllOrgPlans() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"OrganizationPlansMaster/GetAllOrganizationPlansMaster", this.httpOptions);
  // }

  // AddOrgPlanDetails(Orgplandetails): Observable<any> {
  //   return this.http.post<Orgplandetails>( GlobalVariable.SERVICE_API_URL +"OrganizationPlanDetails/AddOrganizationPlanDetails", Orgplandetails, this.httpOptions);
  // }

  // GetAllJobSeekers() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetAllJobSeeker", this.httpOptions);
  // }

  // GetAllStudentsPlans() {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/GetAllStudentPlansMaster", this.httpOptions);
  // }

  // AddStudentsPlanDetails(studentplandetails): Observable<any> {
  //   return this.http.post<studentplandetails>( GlobalVariable.SERVICE_API_URL +"StudentPlanDetails/AddStudentPlanDetails", studentplandetails, this.httpOptions);
  // }

  // // GetUserDashboardById() {
  // //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetAllJobSeeker", this.httpOptions);
  // // }

  // GetUserDashboardById(Id): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"UserDashboard/GetJobSeekerById?Id=" +Id, this.httpOptions);
  // }

  // GetJobSeekerById(Id): Observable<any> {
  //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetJobSeekerById?Id=" +Id, this.httpOptions);
  // }

  // SaveResume(formdata,Id): Observable<any> {
  //   const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"EducationMaster/SaveResume?Id="+Id, formdata, null );
  //   return this.http.request(uploadReq);
  // }

  // SaveProfilePhoto(formdata,Id): Observable<any> {
  //   const uploadReq = new HttpRequest('Post',  GlobalVariable.SERVICE_API_URL +"JobSeeker/SaveProfilePhoto?Id="+Id, formdata, null );
  //   return this.http.request(uploadReq);
  // }

}