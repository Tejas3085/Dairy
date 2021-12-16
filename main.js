(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7ms":
/*!**********************************************************!*\
  !*** ./src/app/specification/specification.component.ts ***!
  \**********************************************************/
/*! exports provided: SpecificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationComponent", function() { return SpecificationComponent; });
/* harmony import */ var _raw_loader_specification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./specification.component.html */ "GpnP");
/* harmony import */ var _specification_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specification.component.css */ "PnHY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpecificationComponent = /** @class */ (function () {
    function SpecificationComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        this.productSpecification = new _Classes__WEBPACK_IMPORTED_MODULE_6__["ProductSpecification"]();
        this.productSpecificationlist = [];
    }
    SpecificationComponent.prototype.OnSubmit = function () {
        console.log(this.productSpecification);
        this.service.AddProductSpecifications(this.productSpecification).subscribe(function (result) {
            if (result == "Success") {
                alert("Something went wrong! Please try again.");
            }
            else {
                alert("Saved Successfully");
            }
        });
    };
    SpecificationComponent.prototype.ngOnInit = function () {
    };
    SpecificationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    SpecificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-specification',
            template: _raw_loader_specification_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_specification_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], SpecificationComponent);
    return SpecificationComponent;
}());



/***/ }),

/***/ "+XbK":
/*!********************************************************!*\
  !*** ./src/app/subscription/subscription.component.ts ***!
  \********************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var _raw_loader_subscription_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./subscription.component.html */ "46Z2");
/* harmony import */ var _subscription_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscription.component.css */ "nsxD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        this.subscription = new _Classes__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.subscriptionlist = [];
    }
    SubscriptionComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.subscription);
        this.service.AddSubscription(this.subscription).subscribe(function (result) {
            if (result > 0) {
                var formData = new FormData();
                _this.subscription.Image = _this.filesToUpload[0].name;
                formData.append('uploadedImage', _this.filesToUpload[0], _this.subscription.Image);
                _this.service.SaveDistributorImage(formData, result).subscribe(function (data) {
                    alert('Saved Successfully.');
                });
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    SubscriptionComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.selectedFileNames = [];
        for (var i = 0; i < this.filesToUpload.length; i++) {
            this.selectedFileNames.push(this.filesToUpload[i].name);
            this.subscription.Image = this.filesToUpload[i].name;
        }
    };
    SubscriptionComponent.prototype.ngOnInit = function () {
    };
    SubscriptionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    SubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-subscription',
            template: _raw_loader_subscription_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_subscription_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: WebServiceService, UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServiceService", function() { return WebServiceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "RU0v");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.css */ "9WCt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Globals */ "8XPr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WebServiceService = /** @class */ (function () {
    function WebServiceService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": 'GET, POST, OPTIONS'
            })
        };
        this.IsLogin = false;
    }
    // Login(UserName,Password): Observable<any> {
    //   return this.http.get<Login>( GlobalVariable.SERVICE_API_URL +"Registration/Login?UserName="+UserName+"&Password="+Password);
    // }
    WebServiceService.prototype.AdminLogin = function (UserName, Password) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/AdminLogin?UserName=" + UserName + "&Password=" + Password);
    };
    WebServiceService.prototype.ForgotPassword = function (ForgotPassword) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/ForgotPassword", ForgotPassword, this.httpOptions);
    };
    WebServiceService.prototype.ResetPassword = function (Mobile, Password) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/ResetAdminPassword?Mobile=" + Mobile + "&Password=" + Password, this.httpOptions);
    };
    WebServiceService.prototype.AddJobSeeker = function (Registration) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobSeeker/AddJobSeeker", Registration, this.httpOptions);
    };
    WebServiceService.prototype.AddPostJob = function (PostJobMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PostJobMaster/AddPostJobMaster", PostJobMaster, this.httpOptions);
    };
    WebServiceService.prototype.AddExp = function (Experience) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ExperianceInfo/AddExperianceInfo", Experience, this.httpOptions);
    };
    WebServiceService.prototype.AddOtpDetails = function (RegisterOTP) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OtpDetails/AddOtpDetails", RegisterOTP, this.httpOptions);
    };
    WebServiceService.prototype.AddEducationDetails = function (EducationMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "EducationMaster/AddEducationMaster", EducationMaster, this.httpOptions);
    };
    WebServiceService.prototype.GetOtpDetailsByMobileNumber = function (Mobile) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OtpDetails/GetOtpDetailsByMobileNumber?Mobile=" + Mobile, this.httpOptions);
    };
    WebServiceService.prototype.GetAllForgotPasswordDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/GetAllForgotPasswordDetails", this.httpOptions);
    };
    WebServiceService.prototype.GetAllUser = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/GetAllRegistration", this.httpOptions);
    };
    WebServiceService.prototype.GetUserById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/GetRegistrationById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllEducationMaster = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "EducationMaster/GetAllEducationMaster", this.httpOptions);
    };
    WebServiceService.prototype.GetAllOtpDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OtpDetails/GetAllOtpDetails", this.httpOptions);
    };
    WebServiceService.prototype.ResendOtp = function (Mobile, Otp) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OtpDetails/UpdateOtpByMobileNumber?Mobile=" + Mobile + "&Otp=" + Otp);
    };
    WebServiceService.prototype.UpdateOtpStatus = function (mobile, otp) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OtpDetails/UpdateOtpStatus?otp=" + otp + "&mobile=" + mobile);
    };
    WebServiceService.prototype.UpdateEducationDetails = function (EducationMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "EducationMaster/UpdateEducationMaster", EducationMaster, this.httpOptions);
    };
    WebServiceService.prototype.UpdateUser = function (Registration) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/UpdateRegistration", Registration, this.httpOptions);
    };
    WebServiceService.prototype.UpdateRegistrationSkills = function (Registration) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobSeeker/UpdateRegistrationSkills", Registration, this.httpOptions);
    };
    WebServiceService.prototype.DeleteEducationDetailsById = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "EducationMaster/DeleteEducationMaster?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteExperienceByID = function (id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ExperianceInfo/DeleteExperianceInfo?Id=" + id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateExperienceDetails = function (Experience) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ExperianceInfo/UpdateExperianceInfo", Experience, this.httpOptions);
    };
    WebServiceService.prototype.GetAllExperiencMaster = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ExperianceInfo/GetAllExperianceInfo", this.httpOptions);
    };
    WebServiceService.prototype.AddOrganization = function (OrganizationMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/AddOrganizationMaster", OrganizationMaster, this.httpOptions);
    };
    WebServiceService.prototype.AddOrgaHRDetails = function (Orghrdetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationHRDetails/AddOrganizationHRDetails", Orghrdetails, this.httpOptions);
    };
    WebServiceService.prototype.AddOrganizationPlan = function (OrganizationPlan) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlansMaster/AddOrganizationPlansMaster", OrganizationPlan, this.httpOptions);
    };
    WebServiceService.prototype.GetAllCities = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "City/GetAllCity", this.httpOptions);
    };
    WebServiceService.prototype.GetAllStates = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "State/GetAllState", this.httpOptions);
    };
    WebServiceService.prototype.GetAllCountries = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Country/GetAllCountry", this.httpOptions);
    };
    WebServiceService.prototype.GetAllOrg = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/GetAllOrganizationMaster", this.httpOptions);
    };
    WebServiceService.prototype.GetAllOrganizationMaster = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/GetAllOrganizationMaster", this.httpOptions);
    };
    WebServiceService.prototype.GetAllOrgPlans = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlansMaster/GetAllOrganizationPlansMaster", this.httpOptions);
    };
    WebServiceService.prototype.GetAllDashboardDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "DashboardDetails/GetAllDashboardDetails", this.httpOptions);
    };
    WebServiceService.prototype.AddOrganizationPlanDetails = function (Orgplandetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlanDetails/AddOrganizationPlanDetails", Orgplandetails, this.httpOptions);
    };
    WebServiceService.prototype.SaveFranchiseImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "FranchiseDetails/SaveFranchiseImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.GetAllApplyJobSeeker = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ApplyJobMaster/GetAllApplyJobSeeker", this.httpOptions);
    };
    WebServiceService.prototype.GetAllJobSeeker = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobSeeker/GetAllJobSeeker", this.httpOptions);
    };
    WebServiceService.prototype.GetAllJobSeekers = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobSeeker/GetAllJobSeeker", this.httpOptions);
    };
    // GetAllStudentsPlans() {
    //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"StudentPlansMaster/GetAllStudentPlansMaster", this.httpOptions);
    // }
    WebServiceService.prototype.GetAllAdminMaster = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "AdminMaster/GetAllAdminMaster", this.httpOptions);
    };
    WebServiceService.prototype.AddStudentsPlanDetails = function (studentplandetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlanDetails/AddStudentPlanDetails", studentplandetails, this.httpOptions);
    };
    WebServiceService.prototype.GetAllAppliDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "FranchiseDetails/GetAllAppliDetails", this.httpOptions);
    };
    // GetUserDashboardById() {
    //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"JobSeeker/GetAllJobSeeker", this.httpOptions);
    // }
    WebServiceService.prototype.GetUserDashboardById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserDashboard/GetJobSeekerById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetJobSeekerById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobSeeker/GetJobSeekerById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.SaveResume = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "EducationMaster/SaveResume?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.SaveProfilePhoto = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobSeeker/SaveProfilePhoto?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddBusiness = function (Businesstype) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "BusinessType/AddBusiness", Businesstype, this.httpOptions);
    };
    WebServiceService.prototype.GetAllBusinessTypes = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "BusinessType/GetAllBusiness", this.httpOptions);
    };
    WebServiceService.prototype.AddJobCategory = function (JobCategory) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobCategory/AddJobCategory", JobCategory, this.httpOptions);
    };
    WebServiceService.prototype.AddAdminMaster = function (AdminMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "AdminMaster/AddAdminMaster", AdminMaster, this.httpOptions);
    };
    WebServiceService.prototype.UpdateAdminMaster = function (AdminMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "AdminMaster/UpdateAdminMaster", AdminMaster, this.httpOptions);
    };
    WebServiceService.prototype.GetAllOrgTypes = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationTypeMaster/GetAllOrganizationTypeMaster", this.httpOptions);
    };
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
    WebServiceService.prototype.DeleteAdminProfile = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ApplicationDetails/DeleteApplicationDetails?Id=" + Id, this.httpOptions);
    };
    // GetApplicantsById(Id): Observable<any> {
    //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ApplicationDetails/GetApplicationDetailsById?Id=" +Id, this.httpOptions);
    // }
    WebServiceService.prototype.GetAdminById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "AdminMaster/GetAdminMasterById?Id=" + Id, this.httpOptions);
    };
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
    WebServiceService.prototype.AddSearchCriteria = function (SearchCriteria) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "SearchCriteria/AddSearchCriteria", SearchCriteria, this.httpOptions);
    };
    WebServiceService.prototype.GetAllPostJobs = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PostJobMaster/GetAllPostJobMaster", this.httpOptions);
    };
    WebServiceService.prototype.DeleteJob = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PostJobMaster/DeletePostJobMaster?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetJobById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PostJobMaster/GetPostJobMasterById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetInvestorDetailsById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Investor/GetInvestorDetailsById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllInvestorDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Investor/GetAllInvestorDetails", this.httpOptions);
    };
    WebServiceService.prototype.UpdatePostJob = function (PostJobMaster) {
        // alert(121);
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PostJobMaster/UpdatePostJobMaster", PostJobMaster, this.httpOptions);
    };
    WebServiceService.prototype.GetAllApplicationDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ApplicationDetails/GetAllApplicationDetails", this.httpOptions);
    };
    WebServiceService.prototype.GetApplicantsById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ApplicationDetails/GetApplicationDetailsById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddApplicationDetails = function (Applicationdetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ApplicationDetails/AddApplicationDetails", Applicationdetails, this.httpOptions);
    };
    WebServiceService.prototype.UpdateApplicationDetails = function (Applicationdetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ApplicationDetails/UpdateApplicationDetails", Applicationdetails, this.httpOptions);
    };
    WebServiceService.prototype.DeleteApplicationDetails = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ApplicationDetails/DeleteApplicationDetails?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllStudentsPlans = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlansMaster/GetAllStudentPlansMaster", this.httpOptions);
    };
    WebServiceService.prototype.GetStudentPlansMasterById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlansMaster/GetStudentPlansMasterById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteStudentPlanDetails = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlanDetails/DeleteStudentPlanDetails?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetStudentPlanDetailsById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlanDetails/GetStudentPlanDetailsById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateStudentPlanDetails = function (studentplandetails) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlanDetails/UpdateStudentPlanDetails", studentplandetails, this.httpOptions);
    };
    WebServiceService.prototype.AddStudentPlan = function (StudentPlanMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlansMaster/AddStudentPlansMaster", StudentPlanMaster, this.httpOptions);
    };
    WebServiceService.prototype.GetAllStudentsPlanDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlanDetails/GetAllStudentPlanDetails", this.httpOptions);
    };
    WebServiceService.prototype.UpdateStudentPlansMaster = function (Registration) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlansMaster/UpdateStudentPlansMaster", Registration, this.httpOptions);
    };
    WebServiceService.prototype.DeleteStudentPlansMaster = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "StudentPlansMaster/DeleteStudentPlansMaster?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllOrganizationType = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationTypeMaster/GetAllOrganizationTypeMaster", this.httpOptions);
    };
    WebServiceService.prototype.GetOrganizationTypeById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationTypeMaster/GetOrganizationTypeMasterById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddOrgType = function (OrgType) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationTypeMaster/AddOrganizationTypeMaster", OrgType, this.httpOptions);
    };
    WebServiceService.prototype.UpdateOrganizationType = function (OrgType) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationTypeMaster/UpdateOrganizationTypeMaster", OrgType, this.httpOptions);
    };
    WebServiceService.prototype.DeleteOrganizationType = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationTypeMaster/DeleteOrganizationTypeMaster?Id=" + Id, this.httpOptions);
    };
    //Rohan
    WebServiceService.prototype.GetAllOrganizationPlansMaster = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlansMaster/GetAllOrganizationPlansMaster", this.httpOptions);
    };
    WebServiceService.prototype.AddOrganizationPlansMaster = function (studentplandetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlansMaster/AddOrganizationPlansMaster", studentplandetails, this.httpOptions);
    };
    WebServiceService.prototype.UpdateOrganizationPlansMaster = function (FranchiseDetails) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlansMaster/UpdateOrganizationPlansMaster", FranchiseDetails, this.httpOptions);
    };
    WebServiceService.prototype.GetOrganizationPlansMasterById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlansMaster/GetOrganizationPlansMasterById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteOrganizationPlansMaster = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationPlansMaster/DeleteOrganizationPlansMaster?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddFranchiseDetails = function (FranchiseDetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "FranchiseDetails/AddFranchiseDetails", FranchiseDetails, this.httpOptions);
    };
    WebServiceService.prototype.UpdateFranchiseDetails = function (FranchiseDetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "FranchiseDetails/UpdateFranchiseDetails", FranchiseDetails, this.httpOptions);
    };
    WebServiceService.prototype.GetAllFranchiseDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "FranchiseDetails/GetAllFranchiseDetails", this.httpOptions);
    };
    WebServiceService.prototype.DeleteFranchiseDetails = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "FranchiseDetails/DeleteFranchiseDetails?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetFranchiseDetailsById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "FranchiseDetails/GetFranchiseDetailsById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteOrganizationMaster = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/DeleteOrganizationMaster?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddOrganizationMaster = function (studentplandetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/AddOrganizationMaster", studentplandetails, this.httpOptions);
    };
    WebServiceService.prototype.UpdateOrganizationMaster = function (FranchiseDetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/UpdateOrganizationMaster", FranchiseDetails, this.httpOptions);
    };
    WebServiceService.prototype.GetOrganizationMasterById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/GetOrganizationMasterById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateOrganization = function (OrganizationMaster) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/UpdateOrganizationMaster", OrganizationMaster, this.httpOptions);
    };
    WebServiceService.prototype.GetAllJobCategory = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobCategory/GetAllJobCategory", this.httpOptions);
    };
    WebServiceService.prototype.DeleteJobCategory = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobCategory/DeleteJobCategory?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateJobCategory = function (JobCategory) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobCategory/UpdateJobCategory", JobCategory, this.httpOptions);
    };
    WebServiceService.prototype.GetJobCategoryById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobCategory/GetJobCategoryById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllInvestor = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Investor/GetAllInvestor", this.httpOptions);
    };
    WebServiceService.prototype.GetAllBusiness = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "BusinessType/GetAllBusiness", this.httpOptions);
    };
    WebServiceService.prototype.DeleteBusinessCategory = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "BusinessType/DeleteBusiness?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateBusinessType = function (Businesstype) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "BusinessType/UpdateBusiness", Businesstype, this.httpOptions);
    };
    WebServiceService.prototype.GetBusinessTypeById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "BusinessType/GetBusinessById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.SaveJobCategoryImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "JobCategory/SaveCategoryPhoto?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.SaveOrganizationImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "OrganizationMaster/SaveOrganizationImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.SaveInstructorImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Instructor/SaveInstructorImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    //Gym Project
    WebServiceService.prototype.AddMemberHealthInfo = function (MemberHealthInfo) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MemberHealthInfo/AddMemberHealthInfo", MemberHealthInfo, this.httpOptions);
    };
    WebServiceService.prototype.AddUserWorkoutDetails = function (UserWorkoutDetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserWorkoutDetails/AddUserWorkoutDetails", UserWorkoutDetails, this.httpOptions);
    };
    WebServiceService.prototype.AddInstructor = function (Instructor) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Instructor/AddInstructor", Instructor, this.httpOptions);
    };
    WebServiceService.prototype.AddWorkoutType = function (WorkoutType) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "WorkoutType/AddWorkoutType", WorkoutType, this.httpOptions);
    };
    WebServiceService.prototype.AddMainExercise = function (MainExercise) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MainExercise/AddMainExercise", MainExercise, this.httpOptions);
    };
    WebServiceService.prototype.AddMember = function (Member) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Member/AddMember", Member, this.httpOptions);
    };
    WebServiceService.prototype.SaveMemberImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Member/SaveMemberImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddAttendenceStatus = function (AttendenceStatus) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "AttendenceStatus/AddAttendenceStatus", AttendenceStatus, this.httpOptions);
    };
    WebServiceService.prototype.AddMembershipPlan = function (MembershipPlan) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MembershipPlan/AddMembershipPlan", MembershipPlan, this.httpOptions);
    };
    WebServiceService.prototype.AddUserPlanDetails = function (UserPlanDetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserPlanDetails/AddUserPlanDetails", UserPlanDetails, this.httpOptions);
    };
    //
    WebServiceService.prototype.GetAllMembershipPlan = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MembershipPlan/GetAllMembershipPlan", this.httpOptions);
    };
    WebServiceService.prototype.DeleteMembershipPlan = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MembershipPlan/DeleteMembershipPlan?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateMembershipPlan = function (MembershipPlan) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MembershipPlan/UpdateMembershipPlan", MembershipPlan, this.httpOptions);
    };
    WebServiceService.prototype.GetMembershipPlanById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MembershipPlan/GetMembershipPlanById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllMember = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Member/GetAllMember", this.httpOptions);
    };
    WebServiceService.prototype.DeleteMember = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Member/DeleteMember?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateMember = function (Member) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Member/UpdateMember", Member, this.httpOptions);
    };
    WebServiceService.prototype.GetMemberById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Member/GetMemberById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllInstructor = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Instructor/GetAllInstructor", this.httpOptions);
    };
    WebServiceService.prototype.DeleteInstructor = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Instructor/DeleteInstructor?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateInstructor = function (Instructor) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Instructor/UpdateInstructor", Instructor, this.httpOptions);
    };
    WebServiceService.prototype.GetInstructorById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Instructor/GetInstructorById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllWorkoutType = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "WorkoutType/GetAllWorkoutType", this.httpOptions);
    };
    WebServiceService.prototype.DeleteWorkoutType = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "WorkoutType/DeleteWorkoutType?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateWorkoutType = function (WorkoutType) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "WorkoutType/UpdateWorkoutType", WorkoutType, this.httpOptions);
    };
    WebServiceService.prototype.GetWorkoutTypeById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "WorkoutType/GetWorkoutTypeById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllMemberHealthInfo = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MemberHealthInfo/GetAllMemberHealthInfo", this.httpOptions);
    };
    WebServiceService.prototype.DeleteMemberHealthInfo = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MemberHealthInfo/DeleteMemberHealthInfo?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateMemberHealthInfo = function (MemberHealthInfo) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MemberHealthInfo/UpdateMemberHealthInfo", MemberHealthInfo, this.httpOptions);
    };
    WebServiceService.prototype.GetMemberHealthInfoById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MemberHealthInfo/GetMemberHealthInfoById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllUserWorkoutDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserWorkoutDetails/GetAllUserWorkoutDetails", this.httpOptions);
    };
    WebServiceService.prototype.DeleteUserWorkoutDetails = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserWorkoutDetails/DeleteUserWorkoutDetails?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateUserWorkoutDetails = function (UserWorkoutDetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserWorkoutDetails/UpdateUserWorkoutDetails", UserWorkoutDetails, this.httpOptions);
    };
    WebServiceService.prototype.GetUserWorkoutDetailsById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserWorkoutDetails/GetUserWorkoutDetailsById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetAllUserPlanDetails = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserPlanDetails/GetAllUserPlanDetails", this.httpOptions);
    };
    WebServiceService.prototype.DeleteUserPlanDetails = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserPlanDetails/DeleteUserPlanDetails?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateUserPlanDetails = function (UserPlanDetails) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserPlanDetails/UpdateUserPlanDetails", UserPlanDetails, this.httpOptions);
    };
    WebServiceService.prototype.GetUserPlanDetailsById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "UserPlanDetails/GetUserPlanDetailsById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddExercise = function (Exercise) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Exercise/AddExercise", Exercise, this.httpOptions);
    };
    WebServiceService.prototype.GetAllExercise = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Exercise/GetAllExercise", this.httpOptions);
    };
    WebServiceService.prototype.DeleteExercise = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Exercise/DeleteExercise?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddDietPlan = function (DietPlan) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "DietPlan/AddDietPlan", DietPlan, this.httpOptions);
    };
    WebServiceService.prototype.AddDietTable = function (DietTable) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "DietTable/AddDietTable", DietTable, this.httpOptions);
    };
    WebServiceService.prototype.GetAllDietTable = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "DietTable/GetAllDietTable", this.httpOptions);
    };
    //GetExerciseRoutineById
    WebServiceService.prototype.DeleteDietTable = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "DietTable/DeleteDietTable?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetDietTableById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "DietTable/GetDietTableById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetExerciseById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Exercise/GetExerciseById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddExerciseRoutine = function (ExerciseRoutine) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ExerciseRoutine/AddExerciseRoutine", ExerciseRoutine, this.httpOptions);
    };
    // GetExerciseRoutineById(Id): Observable<any> {
    //   return this.http.get<any>( GlobalVariable.SERVICE_API_URL +"ExerciseRoutine/GetExerciseRoutineById?Id="+Id, this.httpOptions);
    // }
    WebServiceService.prototype.AddCounsellingAppointment = function (CounsellingAppointment) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "CounsellingAppointment/AddCounsellingAppointment", CounsellingAppointment, this.httpOptions);
    };
    WebServiceService.prototype.GetAllCounsellingAppointment = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "CounsellingAppointment/GetAllCounsellingAppointment", this.httpOptions);
    };
    WebServiceService.prototype.DeleteCounsellingAppointment = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "CounsellingAppointment/DeleteCounsellingAppointment?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.GetCounsellingAppointmentById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "CounsellingAppointment/GetCounsellingAppointmentById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateCounsellingAppointment = function (CounsellingAppointment) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "CounsellingAppointment/UpdateCounsellingAppointment", CounsellingAppointment, this.httpOptions);
    };
    //Paymemt DeleteExerciseRoutine
    WebServiceService.prototype.AddPaymentHistory = function (PaymentHistory) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PaymentHistory/AddPaymentHistory", PaymentHistory, this.httpOptions);
    };
    WebServiceService.prototype.GetAllPaymentHistory = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PaymentHistory/GetAllPaymentHistory", this.httpOptions);
    };
    //
    WebServiceService.prototype.GetAllExerciseRoutine = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ExerciseRoutine/GetAllExerciseRoutine", this.httpOptions);
    };
    WebServiceService.prototype.DeleteExerciseRoutine = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ExerciseRoutine/DeleteExerciseRoutine?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.AddInquiry = function (Inquiry) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Inquiry/AddInquiry", Inquiry, this.httpOptions);
    };
    WebServiceService.prototype.GetAllInquiry = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Inquiry/GetAllInquiry", this.httpOptions);
    };
    WebServiceService.prototype.GetInquiryById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Inquiry/GetInquiryById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteInquiry = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Inquiry/DeleteInquiry?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateInquiry = function (Inquiry) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Inquiry/UpdateInquiry", Inquiry, this.httpOptions);
    };
    WebServiceService.prototype.GetAllAttendenceStatus = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "AttendenceStatus/GetAllAttendenceStatus", this.httpOptions);
    };
    WebServiceService.prototype.GetPaymentHistoryById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "PaymentHistory/GetPaymentHistoryById?Id=" + Id, this.httpOptions);
    };
    //GetAllSubExercise
    WebServiceService.prototype.GetAllMainExercise = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MainExercise/GetAllMainExercise", this.httpOptions);
    };
    WebServiceService.prototype.GetAllSubExercise = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "SubExercise/GetAllSubExercise", this.httpOptions);
    };
    WebServiceService.prototype.AddSubExercise = function (SubExercise) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "SubExercise/AddSubExercise", SubExercise, this.httpOptions);
    };
    // Dairy Start********************
    WebServiceService.prototype.AddDistributor = function (Distributor) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Distributor/AddDistributor", Distributor, this.httpOptions);
    };
    WebServiceService.prototype.GetAllDistributor = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Distributor/GetAllDistributor", this.httpOptions);
    };
    WebServiceService.prototype.GetAllProductSpecification = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductSpecification/GetAllProductSpecification", this.httpOptions);
    };
    WebServiceService.prototype.GetAllProductInstructions = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductInstructions/GetAllProductInstructions", this.httpOptions);
    };
    WebServiceService.prototype.GetAllMainCategory = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MainCategory/GetAllMainCategory", this.httpOptions);
    };
    WebServiceService.prototype.GetAllSubCategory = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "SubCategory/GetAllSubCategory", this.httpOptions);
    };
    WebServiceService.prototype.GetAllProductOffer = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductOffer/GetAllProductOffer", this.httpOptions);
    };
    WebServiceService.prototype.GetDistributorById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Distributor/GetDistributorById?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteDistributor = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Distributor/DeleteDistributor?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteProducts = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Products/DeleteProducts?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteProductSpecification = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductSpecification/DeleteProductSpecification?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteProductInstruction = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductInstructions/DeleteProductInstruction?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteSubscription = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Subscription/DeleteSubscription?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteMainCategory = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MainCategory/DeleteMainCategory?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteSubCategory = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "SubCategory/DeleteSubCategory?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.DeleteProductOffer = function (Id) {
        return this.http.delete(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductOffer/DeleteProductOffer?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.UpdateDistributorById = function (Distributor) {
        return this.http.put(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Distributor/UpdateDistributorById", Distributor, this.httpOptions);
    };
    WebServiceService.prototype.SaveDistributorImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Distributor/SaveDistributorImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddProducts = function (Products) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Products/AddProducts", Products, this.httpOptions);
    };
    WebServiceService.prototype.GetAllProducts = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Products/GetAllProducts", this.httpOptions);
    };
    WebServiceService.prototype.GetAllRegistration = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/GetAllRegistration", this.httpOptions);
    };
    WebServiceService.prototype.SaveProductsImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Products/SaveProductsImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddSubscription = function (Subscription) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Subscription/AddSubscription", Subscription, this.httpOptions);
    };
    WebServiceService.prototype.GetAllSubscription = function () {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Subscription/GetAllSubscription", this.httpOptions);
    };
    WebServiceService.prototype.DeleteSubscriptionById = function (Id) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Subscription/GetSubscriptionId?Id=" + Id, this.httpOptions);
    };
    WebServiceService.prototype.SaveSubscriptionImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Subscription/SaveSubscriptionImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddProductSpecifications = function (ProductSpecification) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductSpecifications/AddProductSpecifications", ProductSpecification, this.httpOptions);
    };
    WebServiceService.prototype.AddProductInstructions = function (ProductInstructions) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductInstructions/AddProductInstructions", ProductInstructions, this.httpOptions);
    };
    WebServiceService.prototype.AddMainCategory = function (MainCategory) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MainCategory/AddMainCategory", MainCategory, this.httpOptions);
    };
    WebServiceService.prototype.SaveMainCategoryImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "MainCategory/SaveMainCategoryImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddSubCategory = function (SubCategory) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "SubCategory/AddSubCategory", SubCategory, this.httpOptions);
    };
    WebServiceService.prototype.SaveSubCategoryImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "SubCategory/SaveSubCategoryImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddProductOffer = function (ProductOffer) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductOffer/AddProductOffer", ProductOffer, this.httpOptions);
    };
    WebServiceService.prototype.SaveProductOfferImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductOffer/SaveProductOfferImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.AddProductReview = function (ProductReview) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductReview/AddProductReview", ProductReview, this.httpOptions);
    };
    WebServiceService.prototype.SaveProductReviewImage = function (formdata, Id) {
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpRequest"]('Post', _Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "ProductReview/SaveProductReviewImage?Id=" + Id, formdata, null);
        return this.http.request(uploadReq);
    };
    WebServiceService.prototype.Login = function (Email, Password) {
        return this.http.get(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/Login?Email=" + Email + "&Password=" + Password);
    };
    WebServiceService.prototype.AddRegistration = function (Registration) {
        return this.http.post(_Globals__WEBPACK_IMPORTED_MODULE_4__["GlobalVariable"].SERVICE_API_URL + "Registration/AddRegistration", Registration, this.httpOptions);
    };
    WebServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    WebServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], WebServiceService);
    return WebServiceService;
}());

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ctorParameters = function () { return []; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "/wys":
/*!**************************************************************!*\
  !*** ./src/app/instructionlist/instructionlist.component.ts ***!
  \**************************************************************/
/*! exports provided: InstructionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionlistComponent", function() { return InstructionlistComponent; });
/* harmony import */ var _raw_loader_instructionlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./instructionlist.component.html */ "g+vU");
/* harmony import */ var _instructionlist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructionlist.component.css */ "YDQV");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InstructionlistComponent = /** @class */ (function () {
    function InstructionlistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.InstructionList = [];
    }
    InstructionlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllProductInstructions().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.InstructionList.push(data);
            }
            console.log(_this.InstructionList);
        });
    };
    InstructionlistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteProductInstruction(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.InstructionList = _this.InstructionList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    InstructionlistComponent.prototype.search = function () {
    };
    InstructionlistComponent.prototype.reset = function () {
    };
    InstructionlistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"] }
    ]; };
    InstructionlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-instructionlist',
            template: _raw_loader_instructionlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_instructionlist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"]])
    ], InstructionlistComponent);
    return InstructionlistComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tushark\Downloads\GiftShop\newD\src\main.ts */"zUnb");


/***/ }),

/***/ "0NcT":
/*!*******************************************************************!*\
  !*** ./src/app/specificationlist/specificationlist.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZmljYXRpb25saXN0L3NwZWNpZmljYXRpb25saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "0xzo":
/*!*******************************************!*\
  !*** ./src/app/offer/offer.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmVyL29mZmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "1qpf":
/*!*********************************************************************!*\
  !*** ./src/app/updatesubscription/updatesubscription.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXN1YnNjcmlwdGlvbi91cGRhdGVzdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa-caret-down:before {\r\n    content: \"\\f0d7\";\r\n    margin-left: 5px;\r\n}\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font-family: FontAwesome;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    margin-right: px;\r\n    font-size: 13px;\r\n}\r\n\r\n.list-group.panel>.list-group-item {\r\n    border-bottom-right-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n    background-color: #384f31;\r\n    font-weight: 200;\r\n    color: #b8c7ce;\r\n    margin-bottom: -1px !important;\r\n    font-size: 14px;\r\n}\r\n\r\n.list-group-item {\r\n    background-color: white;\r\n}\r\n\r\n.list-group-submenu {\r\n    margin-left: 20px;\r\n    /* background-color: #afb8f3; */\r\n    /* color: rgb(46, 43, 43); */\r\n    color: #ffffff;\r\n}\r\n\r\n.strong {\r\n    font-weight: bold;\r\n}\r\n\r\na {\r\n    color: rgb(46, 43, 43);\r\n}\r\n\r\n/* .list-group.panel>.list-group-item:hover {\r\n    background-color: #4554A4;\r\n    color: #ffffff;\r\n} */\r\n\r\n#navcollapse a:active {\r\n    color: #0DB159;\r\n}\r\n\r\n/* .list-group.panel>.list-group-item.active .list-group-item,\r\n.list-group.panel>.list-group-item:active,\r\n.list-group.panel>.list-group-item:focus,\r\n.list-group.panel>.list-group-item:hover .list-group-item {\r\n    background-color: #4554A4;\r\n    color: #ffffff;\r\n} */\r\n\r\na.list-group-item {\r\n    color: rgb(46, 43, 43);\r\n}\r\n\r\n.list-group-item.active {\r\n    background-color: #046ca2;\r\n    color: #ffffff;\r\n}\r\n\r\na.list-group-item:hover {\r\n    background-color: #046ca2;\r\n    color: #ffffff;\r\n}\r\n\r\n.list-group-item[aria-expanded=\"true\"] {\r\n    /* background-color: #4554A4 !important; */\r\n    /* background-color: #4554A4 !important; */\r\n    color: #ffffff;\r\n    font-size: 15px !important;\r\n    border: 1px solid #E4E7ED !important;\r\n}\r\n\r\n.list-group-item:not(.collapsed) #one {\r\n    display: none;\r\n}\r\n\r\n.list-group-item.collapsed #two {\r\n    display: none;\r\n}\r\n\r\n.plus {\r\n    text-align: right;\r\n    display: block;\r\n    margin-top: -15px;\r\n}\r\n\r\n.submenufont {\r\n    font-size: 14px;\r\n}\r\n\r\n.list-group-item:hover {\r\n    background-color: #046ca2;\r\n    color: #ffffff;\r\n}\r\n\r\n.acountMob {\r\n    color: aliceblue !important;\r\n}\r\n\r\n.list-group-item {\r\n    border: 1px solid #E4E7ED !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFHQTs7O0dBR0c7O0FBRUg7SUFDSSxjQUFjO0FBQ2xCOztBQUdBOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtY2FyZXQtZG93bjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwZDdcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC5wYW5lbD4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0ZjMxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGNvbG9yOiAjYjhjN2NlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1zdWJtZW51IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2FmYjhmMzsgKi9cclxuICAgIC8qIGNvbG9yOiByZ2IoNDYsIDQzLCA0Myk7ICovXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogcmdiKDQ2LCA0MywgNDMpO1xyXG59XHJcblxyXG5cclxuLyogLmxpc3QtZ3JvdXAucGFuZWw+Lmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1NEE0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn0gKi9cclxuXHJcbiNuYXZjb2xsYXBzZSBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzBEQjE1OTtcclxufVxyXG5cclxuXHJcbi8qIC5saXN0LWdyb3VwLnBhbmVsPi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIC5saXN0LWdyb3VwLWl0ZW0sXHJcbi5saXN0LWdyb3VwLnBhbmVsPi5saXN0LWdyb3VwLWl0ZW06YWN0aXZlLFxyXG4ubGlzdC1ncm91cC5wYW5lbD4ubGlzdC1ncm91cC1pdGVtOmZvY3VzLFxyXG4ubGlzdC1ncm91cC5wYW5lbD4ubGlzdC1ncm91cC1pdGVtOmhvdmVyIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NTRBNDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59ICovXHJcblxyXG5hLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBjb2xvcjogcmdiKDQ2LCA0MywgNDMpO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2Y2EyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmEubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDZjYTI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1NEE0ICFpbXBvcnRhbnQ7ICovXHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1NEE0ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U0RTdFRCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOm5vdCguY29sbGFwc2VkKSAjb25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0uY29sbGFwc2VkICN0d28ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBsdXMge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG4uc3VibWVudWZvbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDZjYTI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmFjb3VudE1vYiB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U0RTdFRCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "346J":
/*!*****************************************************************!*\
  !*** ./src/app/subscriptionlist/subscriptionlist.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmlwdGlvbmxpc3Qvc3Vic2NyaXB0aW9ubGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "3i8z":
/*!******************************************************************************************!*\
  !*** ./src/app/updateusersubscriptiondetails/updateusersubscriptiondetails.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UpdateusersubscriptiondetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateusersubscriptiondetailsComponent", function() { return UpdateusersubscriptiondetailsComponent; });
/* harmony import */ var _raw_loader_updateusersubscriptiondetails_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./updateusersubscriptiondetails.component.html */ "ljPE");
/* harmony import */ var _updateusersubscriptiondetails_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateusersubscriptiondetails.component.css */ "Do/Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateusersubscriptiondetailsComponent = /** @class */ (function () {
    function UpdateusersubscriptiondetailsComponent() {
    }
    UpdateusersubscriptiondetailsComponent.prototype.ngOnInit = function () {
    };
    UpdateusersubscriptiondetailsComponent.ctorParameters = function () { return []; };
    UpdateusersubscriptiondetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-updateusersubscriptiondetails',
            template: _raw_loader_updateusersubscriptiondetails_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_updateusersubscriptiondetails_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateusersubscriptiondetailsComponent);
    return UpdateusersubscriptiondetailsComponent;
}());



/***/ }),

/***/ "43Ku":
/*!*******************************************************!*\
  !*** ./src/app/instruction/instruction.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9uL2luc3RydWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "46Z2":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscription/subscription.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\"style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <form #subscriptionForm=\"ngForm\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Subscription </h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n\n                                <!-- <div class=\"col-md-6\">\n                                    <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                        <label for=\"propeller-select\">SubscriptionTypeId</label>\n                                        <select id=\"propeller-select\" class=\"form-control\" name=\"SubscriptionTypeId\" [(ngModel)]=subscription.SubscriptionTypeId #SubscriptionTypeId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                            <option *ngFor=\"let SubscriptionType of SubscriptionTypelist\" [value]=\"SubscriptionType.Id\">\n                                                {{SubscriptionType.Name}} </option>\n                                                <option>OMd</option>\n                                        </select>\n                                    </div>\n\n                                </div> -->\n                                \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"SubscriptionTitle \" [(ngModel)]=\"subscription.SubscriptionTitle\" #SubscriptionTitleControl=\"ngModel\" name=\"SubscriptionTitle\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                    event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Discount Percent\" [(ngModel)]=\"subscription.Discount\" #DiscountControl=\"ngModel\" name=\"Discount\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"SubscriptionDescription\" [(ngModel)]=\"subscription.SubscriptionDescription\" #SubscriptionDescription=\"ngModel\" name=\"SubscriptionDescription\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n\n                                \n            \n\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                        <label for=\"propeller-select\">Status</label>\n                                        <select id=\"propeller-select\" class=\"form-control\" name=\"Status\" [(ngModel)]=subscription.Status #Status=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                            <!-- <option *ngFor=\"let SubscriptionType of SubscriptionTypelist\" [value]=\"SubscriptionType.Id\">\n                                                {{SubscriptionType.Name}} </option> -->\n                                                <option>Active</option>\n                                                <option>InActive</option>\n                                        </select>\n                                    </div>\n\n                                </div>\n                                <!-- <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"End Date\" [(ngModel)]=\"subscription.EndDate\" #EndDate=\"ngModel\" type=\"date\" name=\"EndDate\" required>\n                                    </mat-form-field>\n                                </div> -->\n                                <div class=\"col-md-6\">\n                                    <label for=\"avatar\">Upload Photo :</label>\n\n                                    <input type=\"file\" [(ngModel)]=\"subscription.Image\"  (change)=\"fileChangeEvent($event)\" #ImageControl=\"ngModel\" id=\"avatar\" name=\"Image\" accept=\"image/png, image/jpeg\" required>\n\n                                </div> \n\n                              \n                            </div>\n                            <div class=\"row\"style=\"margin:auto\">\n                                <div class=\"col-md-5\"></div>\n\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"subscriptionForm.invalid\" (click)=\"OnSubmit()\">Submit</button>\n                                <div class=\"clearfix\"></div>\n\n                                <div class=\"col-md-2\"></div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "5SLB":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offerlist/offerlist.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>offerlist works!</p>\n<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Distributor List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                        <th>Id</th> \n                                                         <th>OfferTitle</th> \n                                                        <th>OfferDescription</th>\n                                                        <th>OfferOccasion</th>\n                                                        <th>OfferPercentOff</th>\n                                                        <th>OfferstartDate</th>\n                                                        <th>OfferEndDate</th>\n                                                        <!-- <th>CreatedBy</th>\n                                                        <th>CreatedDate</th>\n                                                        <th>UpdatedBy</th>\n                                                        <th>UpdatedDate</th> -->\n                                                        <th>OfferImage</th>\n\n\n\n\n\n                                                        \n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of ProductOfferList\">\n                                                       \n                                                        <td>{{i.Id}}</td>\n                                                        <td>{{i.OfferTitle}}</td>\n                                                        <td>{{i.OfferDescription}}</td>\n                                                        <td>{{i.OfferOccassion}}</td>\n                                                      \n                                                        <td>{{i.OfferPercentOff}}</td>\n                                                        <td>{{i.OfferStartDate}}</td>\n\n                                                        <td>{{i.OfferEndDate}}</td>\n                                                  \n                                                        <!-- <td>{{i.CreatedBy}}</td>\n\n                                                        <td>{{i.CreatedDate}}</td>\n                                                        <td>{{i.UpdatedBy}}</td>\n                                                        <td>{{i.UpdatedDate}}</td> -->\n                                                        <td>{{i.OfferImage}}</td> \n\n\n\n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i><br>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> <br>\n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "5lyI":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./orders.component.html */ "9GKy");
/* harmony import */ var _orders_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.component.css */ "ruAh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent.ctorParameters = function () { return []; };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-orders',
            template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_orders_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "673O":
/*!**************************************************!*\
  !*** ./src/app/offerlist/offerlist.component.ts ***!
  \**************************************************/
/*! exports provided: OfferlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferlistComponent", function() { return OfferlistComponent; });
/* harmony import */ var _raw_loader_offerlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./offerlist.component.html */ "5SLB");
/* harmony import */ var _offerlist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offerlist.component.css */ "97J+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OfferlistComponent = /** @class */ (function () {
    function OfferlistComponent(service) {
        this.service = service;
        this.ProductOfferList = [];
        this.ProductOfferList = [];
    }
    OfferlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllProductOffer().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.ProductOfferList.push(data);
            }
            console.log(_this.ProductOfferList);
        });
    };
    OfferlistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteProductOffer(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.ProductOfferList = _this.ProductOfferList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    OfferlistComponent.ctorParameters = function () { return [
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["WebServiceService"] }
    ]; };
    OfferlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-offerlist',
            template: _raw_loader_offerlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_offerlist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["WebServiceService"]])
    ], OfferlistComponent);
    return OfferlistComponent;
}());



/***/ }),

/***/ "7BkA":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "7Dvk":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcategory/subcategory.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\"style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <form #subCategoryForm=\"ngForm\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Sub Category </h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                        <label for=\"propeller-select\">Main Category</label>\n                                        <select id=\"propeller-select\" class=\"form-control\" name=\"MainCategoryId\" [(ngModel)]=subCategory.MainCategoryId #MainCategoryId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                            <option *ngFor=\"let MainCategory of mainCategorylist\" [value]=\"MainCategory.Id\">\n                                                {{MainCategory.Name}} </option>\n                                                <option [value]=\"1\">1</option>\n                                        </select>\n                                    </div>\n\n                                </div>\n                                \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Sub Category Name \" [(ngModel)]=\"subCategory.SubCategoryName\" #SubCategoryNameControl=\"ngModel\" name=\"SubCategoryName\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                    event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"SubCategoryDescription\" [(ngModel)]=\"subCategory.SubCategoryDescription\" #SubCategoryDescriptionControl=\"ngModel\" name=\"SubCategoryDescription\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                              \n                                \n                            \n                                <div class=\"col-md-6\">\n                                    <label for=\"avatar\">Upload Sub Category Image1 :</label>\n\n                                    <input type=\"file\" [(ngModel)]=\"subCategory.SubCategoryImage1\"  (change)=\"fileChangeEvent($event)\" #SubCategoryImage1Control=\"ngModel\" id=\"avatar\" name=\"SubCategoryImage1\" accept=\"image/png, image/jpeg\" required>\n\n                                </div> \n                                <div class=\"col-md-6\">\n                                    <label for=\"avatar\">Upload Sub Category Image1 :</label>\n\n                                    <input type=\"file\" [(ngModel)]=\"subCategory.SubCategoryImage2\"  (change)=\"fileChangeEvent($event)\" #SubCategoryImage2Control=\"ngModel\" id=\"avatar\" name=\"SubCategoryImage2\" accept=\"image/png, image/jpeg\" required>\n\n                                </div> \n\n                              \n                            </div>\n                            <br>\n                            <div class=\"row\"style=\"margin:auto\">\n                                <div class=\"col-md-5\"></div>\n\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"subCategoryForm.invalid\" (click)=\"OnSubmit()\">Submit</button>\n                                <div class=\"clearfix\"></div>\n\n                                <div class=\"col-md-2\"></div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n    </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "8XPr":
/*!****************************!*\
  !*** ./src/app/Globals.ts ***!
  \****************************/
/*! exports provided: GlobalVariable, uses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalVariable", function() { return GlobalVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uses", function() { return uses; });
var GlobalVariable = Object({
    //   SERVICE_API_URL: 'http://gymapi.express-engg.com/api/', //For Server
    //SERVICE_API_URL: 'http://cakeshop.cyberscriptit.com/api/',
    // SERVICE_API_URL: 'http://localhost:44326/api/',
    SERVICE_API_URL: 'https://localhost:44377/api/',
    BASE_API_URL: 'https://localhost:44377/Content/',
    // UserName: 'orgasatva@gmail.com',
    Mobile: '',
    Address: '',
    CustomerId: 0,
    UserId: 0,
    AppVersion: 1,
    SId: '',
});
var uses = /** @class */ (function () {
    function uses() {
    }
    return uses;
}());

// https://localhost:44377/


/***/ }),

/***/ "97J+":
/*!***************************************************!*\
  !*** ./src/app/offerlist/offerlist.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmVybGlzdC9vZmZlcmxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "9GKy":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>orders works!</p>\n");

/***/ }),

/***/ "9WCt":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "9bVn":
/*!*****************************************************************!*\
  !*** ./src/app/maincategorylist/maincategorylist.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jYXRlZ29yeWxpc3QvbWFpbmNhdGVnb3J5bGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "9kOJ":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usersubscriptiondetails/usersubscriptiondetails.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-plan-detail works!</p>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\"></div>\n\n                    <div class=\"col-md-8\"style=\"padding-top:20px\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-danger\">\n                                <h4 class=\"card-title\">User Subscription Details</h4>\n\n                            </div>\n                            <div class=\"card-body\">\n                                <form #userPlanDetailsForm=\"ngForm\">\n\n\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">User</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Id\" [(ngModel)]=userPlanDetails.Member.Id #Id=\"ngModel\" (change)=\"UserChange($event)\">\n                                                    <option *ngFor=\"let Member of UserNames\" [value]=\"Member.Id\">\n                                                        {{Member.UserName}} </option>\n                                                </select>\n                                            </div>\n\n                                        </div>\n\n\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">Plan</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Id\" [(ngModel)]=userPlanDetails.MembershipPlan.Id #Id=\"ngModel\" (change)=\"planChange($event)\">\n                                                    <option *ngFor=\"let MembershipPlan of MembershipPlans\" [value]=\"MembershipPlan.Id\">\n                                                        {{MembershipPlan.Title}} </option>\n                                                </select>\n                                            </div>\n\n                                        </div>\n                                    </div>\n\n\n                                    <div class=\"row\">\n\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Start Date\" [(ngModel)]=\"userPlanDetails.StartDate\" #StartDate=\"ngModel\" type=\"date\" name=\"StartDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"End Date\" [(ngModel)]=\"userPlanDetails.EndDate\" #EndDate=\"ngModel\" type=\"date\" name=\"EndDate\" required>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <!-- <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Status\" [(ngModel)]=\"userPlanDetails.Status\" #Status=\"ngModel\" name=\"Status\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div> -->\n\n                                    </div>\n\n                                    <div class=\"row\"style=\"margin:auto\">\n                                        <div class=\"col-md-5\"></div>\n\n                                        <button mat-raised-button type=\"submit\" [disabled]=\"userPlanDetailsForm.invalid\" class=\"btn btn-danger\" (click)=\"OnSubmit()\">Save</button>\n\n                                        <div class=\"col-md-2\"></div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-2\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "A+2X":
/*!****************************************************************!*\
  !*** ./src/app/maincategorylist/maincategorylist.component.ts ***!
  \****************************************************************/
/*! exports provided: MaincategorylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaincategorylistComponent", function() { return MaincategorylistComponent; });
/* harmony import */ var _raw_loader_maincategorylist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./maincategorylist.component.html */ "dV5f");
/* harmony import */ var _maincategorylist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maincategorylist.component.css */ "9bVn");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaincategorylistComponent = /** @class */ (function () {
    function MaincategorylistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.maincategoryList = [];
    }
    MaincategorylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllMainCategory().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.maincategoryList.push(data);
            }
            console.log(_this.maincategoryList);
        });
    };
    MaincategorylistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteMainCategory(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.maincategoryList = _this.maincategoryList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    MaincategorylistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"] }
    ]; };
    MaincategorylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-maincategorylist',
            template: _raw_loader_maincategorylist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_maincategorylist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"]])
    ], MaincategorylistComponent);
    return MaincategorylistComponent;
}());



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" style=\"box-shadow: none;\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <!-- <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div> -->\n    </div>\n    <div class=\"main-panel\" > \n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <!-- <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </div> -->\n</div>\n<!-- Buy-Modal-angular -->\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-body text-center\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"margin-top\">\n                    Free Version\n                </h4>\n                <div class=\"separator\"></div>\n                <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                    <div class=\"wrapper-card\">\n                        <div class=\"image-container\">\n                            <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                        </div>\n                        Html5\n                        <div class=\"separator\"></div>\n                        <div class=\"product-type\">\n                            FREE\n                        </div>\n                    </div>\n                </a>\n                <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                    <div class=\"wrapper-card\">\n                        <div class=\"image-container image-angular-cli\">\n                            <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                        </div>\n                        Angular\n                        <div class=\"separator\"></div>\n                        <div class=\"product-type\">\n                            FREE\n                        </div>\n                    </div>\n                </a>\n                <h4>\n                    PRO Version\n                </h4>\n                <div class=\"separator\"></div>\n                <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"price\">\n                        from\n                        <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                    </div>\n                </a>\n                <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"price\">\n                        from\n                        <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "AetD":
/*!******************************************************!*\
  !*** ./src/app/distributor/distributor.component.ts ***!
  \******************************************************/
/*! exports provided: DistributorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorComponent", function() { return DistributorComponent; });
/* harmony import */ var _raw_loader_distributor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./distributor.component.html */ "kGYa");
/* harmony import */ var _distributor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distributor.component.css */ "cNGd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DistributorComponent = /** @class */ (function () {
    function DistributorComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        // this.instructor = new Instructor();
        // this.instructorlist = [];
        this.distributor = new _Classes__WEBPACK_IMPORTED_MODULE_6__["Distributor"]();
        this.distributorlist = [];
    }
    // OnSubmit() {
    //   console.log(this.instructor);
    //   this.service.AddInstructor(this.instructor).subscribe((result) => {
    //     if (result != "Success") {
    //       alert("Saved Successfully");
    //     } else {
    //       alert("Something went wrong! Please try again.");
    //     }
    //   });
    // }
    DistributorComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.distributor);
        this.service.AddDistributor(this.distributor).subscribe(function (result) {
            if (result > 0) {
                var formData = new FormData();
                _this.distributor.Photo = _this.filesToUpload[0].name;
                formData.append('uploadedImage', _this.filesToUpload[0], _this.distributor.Photo);
                _this.service.SaveDistributorImage(formData, result).subscribe(function (data) {
                    alert('Saved Successfully.');
                });
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    DistributorComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.selectedFileNames = [];
        for (var i = 0; i < this.filesToUpload.length; i++) {
            this.selectedFileNames.push(this.filesToUpload[i].name);
            this.distributor.Photo = this.filesToUpload[i].name;
        }
    };
    DistributorComponent.prototype.ngOnInit = function () {
    };
    DistributorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    DistributorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-distributor',
            template: _raw_loader_distributor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_distributor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], DistributorComponent);
    return DistributorComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "BY+L":
/*!****************************************************!*\
  !*** ./src/app/orderslist/orderslist.component.ts ***!
  \****************************************************/
/*! exports provided: OrderslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderslistComponent", function() { return OrderslistComponent; });
/* harmony import */ var _raw_loader_orderslist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./orderslist.component.html */ "TCzw");
/* harmony import */ var _orderslist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderslist.component.css */ "TDZI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderslistComponent = /** @class */ (function () {
    function OrderslistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.membershipplanList = [];
    }
    OrderslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllMembershipPlan().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.membershipplanList.push(data);
            }
            // console.log(this.organizationMasterList);
        });
    };
    OrderslistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteMembershipPlan(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.membershipplanList = _this.membershipplanList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    OrderslistComponent.prototype.Edit = function (Id) {
        try {
            this.router.navigateByUrl("/update-membership-plan/" + Id);
        }
        catch (error) {
            alert("certi-" + error);
        }
    };
    OrderslistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"] }
    ]; };
    OrderslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-orderslist',
            template: _raw_loader_orderslist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_orderslist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"]])
    ], OrderslistComponent);
    return OrderslistComponent;
}());



/***/ }),

/***/ "BlH5":
/*!******************************************************************!*\
  !*** ./src/app/specificationlist/specificationlist.component.ts ***!
  \******************************************************************/
/*! exports provided: SpecificationlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificationlistComponent", function() { return SpecificationlistComponent; });
/* harmony import */ var _raw_loader_specificationlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./specificationlist.component.html */ "bLWZ");
/* harmony import */ var _specificationlist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specificationlist.component.css */ "0NcT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpecificationlistComponent = /** @class */ (function () {
    function SpecificationlistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.ProductSpecificationList = [];
    }
    SpecificationlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllProductSpecification().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.ProductSpecificationList.push(data);
            }
            console.log(_this.ProductSpecificationList);
        });
    };
    SpecificationlistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteProductSpecification(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.ProductSpecificationList = _this.ProductSpecificationList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    SpecificationlistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["WebServiceService"] }
    ]; };
    SpecificationlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-specificationlist',
            template: _raw_loader_specificationlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_specificationlist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["WebServiceService"]])
    ], SpecificationlistComponent);
    return SpecificationlistComponent;
}());



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navPosition {\r\n    position: fixed;\r\n}\r\n\r\n.btn {\r\n    background-color: transparent !important;\r\n}\r\n\r\na.dropdown-item:hover {\r\n    background-color: #4554A4;\r\n}\r\n\r\n.container-fluid {\r\n    background-color: #384f31;\r\n    margin-bottom: -9px;\r\n}\r\n\r\n.Mobile {\r\n    /* margin-left: 737px;\r\n     */\r\n     margin-left: 28px;\r\n}\r\n\r\n.font {\r\n    margin-left: 8px;\r\n}\r\n\r\n.Emailid {\r\n    margin-left: 22px;\r\n}\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: 24px;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.navbar {\r\n    border: 0;\r\n    border-radius: 3px;\r\n    padding: 0.625rem 0;\r\n    margin-bottom: 20px;\r\n    color: #A7BEC9;\r\n    background-color: #fff !important;\r\n    box-shadow: 0 4px 18px 0px rgb(0 0 0 / 12%), 0 7px 10px -5px rgb(0 0 0 / 15%);\r\n}\r\n\r\n.navbar .collapse .navbar-nav .nav-item .nav-link .fa {\r\n    font-size: 2.25rem;\r\n    max-width: 24px;\r\n    /* margin-top: -1.1em; */\r\n    margin-top: 6px;\r\n}\r\n\r\n.navbar-toggler-icon .icon-bar {\r\n    color: #fff imp !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO01BQ0U7S0FDRCxpQkFBaUI7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsNkNBQTZDO0lBQzdDLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLDZFQUE2RTtBQUNqRjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZQb3NpdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTU0QTQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NGYzMTtcclxuICAgIG1hcmdpbi1ib3R0b206IC05cHg7XHJcbn1cclxuXHJcbi5Nb2JpbGUge1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDczN3B4O1xyXG4gICAgICovXHJcbiAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbn1cclxuXHJcbi5mb250IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5FbWFpbGlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcblxyXG4uZmEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMC42MjVyZW0gMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogI0E3QkVDOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggMHB4IHJnYigwIDAgMCAvIDEyJSksIDAgN3B4IDEwcHggLTVweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG59XHJcblxyXG4ubmF2YmFyIC5jb2xsYXBzZSAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIC5mYSB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDI0cHg7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAtMS4xZW07ICovXHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlci1pY29uIC5pY29uLWJhciB7XHJcbiAgICBjb2xvcjogI2ZmZiBpbXAgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "Do/Z":
/*!*******************************************************************************************!*\
  !*** ./src/app/updateusersubscriptiondetails/updateusersubscriptiondetails.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXVzZXJzdWJzY3JpcHRpb25kZXRhaWxzL3VwZGF0ZXVzZXJzdWJzY3JpcHRpb25kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "FvAq":
/*!*******************************************************!*\
  !*** ./src/app/productlist/productlist.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RsaXN0L3Byb2R1Y3RsaXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Ge6R":
/*!*********************************************************!*\
  !*** ./src/app/maincategory/maincategory.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jYXRlZ29yeS9tYWluY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Gicx":
/*!***************************************************************************************!*\
  !*** ./src/app/usersubscriptiondetailslist/usersubscriptiondetailslist.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzdWJzY3JpcHRpb25kZXRhaWxzbGlzdC91c2Vyc3Vic2NyaXB0aW9uZGV0YWlsc2xpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "GpnP":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specification/specification.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\"style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <form #SpecificationForm=\"ngForm\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Product Specification </h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n\n                           \n                                \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"SpecificationTitle\" [(ngModel)]=\"productSpecification.SpecificationTitle\" #SpecificationTitleControl=\"ngModel\" name=\"SpecificationTitle\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                    event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"ServingSize\" [(ngModel)]=\"productSpecification.ServingSize\" #ServingSizeControl=\"ngModel\" name=\"ServingSize\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <!--  -->\n           \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"AmountPer\" [(ngModel)]=\"productSpecification.AmountPer\" #AmountPerControl=\"ngModel\" name=\"AmountPer\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Energy\" [(ngModel)]=\"productSpecification.Energy\" #EnergyControl=\"ngModel\" name=\"Energy\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"TotalFat\" [(ngModel)]=\"productSpecification.TotalFat\" #TotalFatControl=\"ngModel\" name=\"TotalFat\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"SaturatedFat\" [(ngModel)]=\"productSpecification.SaturatedFat\" #SaturatedFatControl=\"ngModel\" name=\"SaturatedFat\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Carbohydrate\" [(ngModel)]=\"productSpecification.Carbohydrate\" #CarbohydrateControl=\"ngModel\" name=\"Carbohydrate\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Protein\" [(ngModel)]=\"productSpecification.Protein\" #ProteinControl=\"ngModel\" name=\"Protein\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Calcium\" [(ngModel)]=\"productSpecification.Calcium\" #CalciumControl=\"ngModel\" name=\"Calcium\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Sodium\" [(ngModel)]=\"productSpecification.Sodium\" #SodiumControl=\"ngModel\" name=\"Sodium\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Sugar\" [(ngModel)]=\"productSpecification.Sugar\" #SugarControl=\"ngModel\" name=\"Sugar\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"AddedSugar\" [(ngModel)]=\"productSpecification.AddedSugar\" #AddedSugarControl=\"ngModel\" name=\"AddedSugar\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n\n                                    <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Packing\" [(ngModel)]=\"productSpecification.Packing\" #PackingControl=\"ngModel\" name=\"Packing\" type=\"text\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"PackagingDate\" [(ngModel)]=\"productSpecification.PackagingDate\" #PackagingDateControl=\"ngModel\" type=\"date\" name=\"PackagingDate\" required>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"BestBeforeDays\" [(ngModel)]=\"productSpecification.BestBeforeDays\" #BestBeforeDaysControl=\"ngModel\" name=\"BestBeforeDays\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"OtherNutritions\" [(ngModel)]=\"productSpecification.OtherNutritions\" #OtherNutritionsControl=\"ngModel\" name=\"OtherNutritions\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n\n                                       <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"StorageTemp\" [(ngModel)]=\"productSpecification.StorageTemp\" #StorageTempControl=\"ngModel\" name=\"StorageTemp\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n\n                                <!--  -->\n\n                               \n                             \n\n                                \n            \n\n                            \n                               \n\n                              \n                            </div>\n                            <div class=\"row\"style=\"margin:auto\">\n                                <div class=\"col-md-5\"></div>\n\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"SpecificationForm.invalid\" (click)=\"OnSubmit()\">Submit</button>\n                                <div class=\"clearfix\"></div>\n\n                                <div class=\"col-md-2\"></div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "ITmw":
/*!**************************************************************!*\
  !*** ./src/app/distributorlist/distributorlist.component.ts ***!
  \**************************************************************/
/*! exports provided: DistributorlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorlistComponent", function() { return DistributorlistComponent; });
/* harmony import */ var _raw_loader_distributorlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./distributorlist.component.html */ "u+t1");
/* harmony import */ var _distributorlist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distributorlist.component.css */ "U58P");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Globals */ "8XPr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DistributorlistComponent = /** @class */ (function () {
    function DistributorlistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.imgPath = _Globals__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].BASE_API_URL;
        this.distributorList = [];
    }
    DistributorlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllDistributor().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.distributorList.push(data);
            }
            console.log(_this.distributorList);
        });
    };
    //Search
    DistributorlistComponent.prototype.Serach = function () {
        var _this = this;
        //  this.service.GetAllInstructor().subscribe((result) => {
        //    for (let data of result) {
        //      this.instructorList.push(data);  
        //    }
        this.distributorList = this.distributorList.filter(function (x) { return x.FirstName.toLowerCase().includes(_this.SearchText.toLowerCase()); });
        //});
    };
    DistributorlistComponent.prototype.Reset = function () {
        var _this = this;
        this.distributorList = [];
        this.service.GetAllDistributor().subscribe(function (result) {
            for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                var data = result_2[_i];
                _this.distributorList.push(data);
            }
        });
    };
    DistributorlistComponent.prototype.View = function () {
    };
    DistributorlistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteDistributor(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.distributorList = _this.distributorList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    DistributorlistComponent.prototype.Edit = function (Id) {
        try {
            this.router.navigateByUrl("/updatedistributor/" + Id);
        }
        catch (error) {
            alert("certi-" + error);
        }
    };
    DistributorlistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"] }
    ]; };
    DistributorlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-distributorlist',
            template: _raw_loader_distributorlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_distributorlist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"]])
    ], DistributorlistComponent);
    return DistributorlistComponent;
}());



/***/ }),

/***/ "J/EJ":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offer/offer.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\"style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <form #OfferForm=\"ngForm\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Offers </h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n\n                           \n                                \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"OfferTitle \" [(ngModel)]=\"productOffer.OfferTitle\" #OfferTitleControl=\"ngModel\" name=\"OfferTitle\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                    event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"OfferDescription\" [(ngModel)]=\"productOffer.OfferDescription\" #OfferDescription=\"ngModel\" name=\"OfferDescription\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"OfferOccassion \" [(ngModel)]=\"productOffer.OfferOccassion\" #OfferOccassionControl=\"ngModel\" name=\"OfferOccassion\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                    event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                    </mat-form-field>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"OfferPercentOff\" [(ngModel)]=\"productOffer.OfferPercentOff\" #OfferPercentOffControl=\"ngModel\" name=\"OfferPercentOff\" type=\"number\" required>\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"OfferStartDate\" [(ngModel)]=\"productOffer.OfferStartDate\" #OfferStartDate=\"ngModel\" type=\"date\" name=\"OfferStartDate\" required>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"OfferEndDate \" [(ngModel)]=\"productOffer.OfferEndDate\" #OfferEndDate=\"ngModel\" type=\"date\" name=\"OfferEndDate\" required>\n                                    </mat-form-field>\n                                </div>\n\n                                \n            \n\n                            \n                                <div class=\"col-md-6\">\n                                    <label for=\"avatar\">Upload Offer Image :</label>\n\n                                    <input type=\"file\" [(ngModel)]=\"productOffer.OfferImage\"  (change)=\"fileChangeEvent($event)\" #OfferImageControl=\"ngModel\" id=\"avatar\" name=\"OfferImage\" accept=\"image/png, image/jpeg\" required>\n\n                                </div> \n\n                              \n                            </div>\n                            <div class=\"row\"style=\"margin:auto\">\n                                <div class=\"col-md-5\"></div>\n\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"OfferForm.invalid\" (click)=\"OnSubmit()\">Submit</button>\n                                <div class=\"clearfix\"></div>\n\n                                <div class=\"col-md-2\"></div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "KJsa":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productlist/productlist.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Product List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                         <th>Id</th> \n                                                        <th>ProductName</th>\n                                                        <!-- <th>DOB</th> -->\n                                                        <th>ProductDescripton</th>\n                                                        <th>ProductCaption</th>\n                                                        <!-- <th>Email</th> -->\n                                                        <th>ProductQuantityPerUnit</th>\n                                                        <!-- <th>Professional Details</th> -->\n                                                        <!-- <th>Experience</th> -->\n                                                        <th>ProductPricePerUnit</th>\n                                                        <th>ProductDiscount</th>\n                                                        <th>ProductCompany</th>\n                                                        <th>ProductInstructionId</th>\n\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of ProductList\">\n                                                         <td>{{i.Id}}</td>\n                                                        <td>{{i.ProductName}} </td>\n                                                        <td>{{i.ProductCaption}}</td>\n                                                        <td>{{i.ProductCaption}}</td>\n                                                        <td>{{i.ProdQuantityPerUnit}}</td>\n                                                        <!-- <td>{{i.ProfessionalDetails}}</td> -->\n                                                      \n                                                        <td>{{i.ProductPricePerUnit}}</td>\n                                                        <td>{{i.ProductDiscount}}</td>\n                                                        <td>{{i.ProductCompany}}</td>\n                                                        <td>{{i.ProductInstructionId}}</td>\n\n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> \n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<br>\n<br>\n<br>\n<div class=\"sidebar-wrapper\">\n    <div *ngIf=\"isMobileMenu()\">\n        <form class=\"navbar-form\">\n            <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n        </form>\n        <ul class=\"nav navbar-nav nav-mobile-menu\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\n                    <i class=\"material-icons\">dashboard</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Stats</span>\n                    </p>\n                </a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">notifications</i>\n                    <span class=\"notification\">5</span>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                    </p>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\n                    <i class=\"material-icons\">person</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Account</span>\n                    </p>\n                </a>\n            </li>\n\n\n\n        </ul> -->\n\n<br>\n<br>\n<br>\n<div class=\"sidebar-wrapper\">\n    <div *ngIf=\"isMobileMenu()\">\n\n\n        <ul class=\"nav navbar-nav nav-mobile-menu\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"javascript:void(0)\">\n                    <i class=\"material-icons\">person</i>\n                    <p>\n                        <span class=\"d-lg-none d-md-block acountMob\">Account</span>\n                    </p>\n                </a>\n            </li>\n\n\n\n\n        </ul>\n    </div>\n    <!-- <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul> -->\n\n\n\n\n    <!--New Code-->\n    <div id=\"MainMenu\" *ngIf=\"!tp && !uses.flag\">\n\n        <div class=\"row\">\n            <div class=\"logo-img1\">\n                <img src=\"/assets/logodemo.jpeg\" style=\"    height: 90px;width: 260px; margin-left: 15px;\" />\n            </div>\n        </div>\n\n        <div class=\"list-group panel\">\n            <!-- <a routerLink=\"/dashboard\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"><i class=\"fa fa-th-large\" aria-hidden=\"true\" >     </i>     Dashboard </a> -->\n     \n\n\n            <!-- Dairy Start********************** -->\n            <a routerLink=\"/dashboard\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"><i class=\"fa fa-th-large\" aria-hidden=\"true\" >     </i>     Dashboard </a>\n\n            <a href=\"#demo21\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Distributor <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo21\">\n                <a routerLink=\"/distributor\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Distributor</a>\n                <a routerLink=\"/distributorlist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Distributor</a>\n            </div>\n\n            <a href=\"#demo22\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-bitbucket-square\" aria-hidden=\"true\"></i> Product <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo22\">\n                <a routerLink=\"/product\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Product</a>\n                <a routerLink=\"/productlist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Product</a>\n            </div>\n\n            <a href=\"#demo29\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Product Details <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo29\">\n                <a routerLink=\"/specification\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Product Specification</a>\n                <a routerLink=\"/specificationlist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Product Specification</a>\n                <a routerLink=\"/instruction\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Instruction</a>\n                <a routerLink=\"/instructionlist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Instruction</a>\n            </div>\n\n            <a href=\"#demo23\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-tags\" aria-hidden=\"true\"></i> Subscription <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo23\">\n                <a routerLink=\"/subscription\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Subscription</a>\n                <a routerLink=\"/subscriptionlist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Subscription</a>\n            </div>\n\n            <a href=\"#demo24\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> Orders <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo24\">\n                <!-- <a routerLink=\"/instructor\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Orders</a> -->\n                <a routerLink=\"/orderslist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Orders</a>\n            </div>\n            <a href=\"#demo28\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> Product Category <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo28\">\n                <a routerLink=\"/maincategory\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Main Category</a>\n                <a routerLink=\"/maincategorylist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Main Category</a>\n                <a routerLink=\"/subcategory\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Sub Category</a>\n                <a routerLink=\"/subcategorylist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Sub Category</a>\n            </div>\n\n            <a href=\"#demo25\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-tag\" aria-hidden=\"true\"></i> User Subscription Details <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo25\">\n                <a routerLink=\"/usersubscriptiondetails\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add User Subscription Details</a>\n                <a routerLink=\"/usersubscriptiondetailslist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View User Subscription Details</a>\n            </div>\n\n            <a href=\"#demo30\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-gift\" aria-hidden=\"true\"></i> Offers & Coupons <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo30\">\n                <a routerLink=\"/offer\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Offer</a>\n                <a routerLink=\"/offerlist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Offer</a>\n                \n            </div>\n\n            <a href=\"#demo26\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-area-chart\" aria-hidden=\"true\"></i> Report <i  id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo26\">\n\n                <a routerLink=\"/user-plan-detail-report\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  User Plan </a>\n                <a routerLink=\"/membership-plan-history\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Membership Plan</a>\n                <a routerLink=\"/user-workout-detail-history\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> User Workout </a>\n                <a routerLink=\"/total-leads\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Total Leads </a>\n                <a routerLink=\"/payment-history-list\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Payment History </a>\n\n            </div>\n\n      \n\n            <a href=\"#demo27\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"> </i> Admin Profile <i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo27\">\n\n                <a routerLink=\"/adminregistration\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Registration</a>\n                <a routerLink=\"/registrationlist\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Registration Details</a>\n\n\n            </div>\n\n            <a routerLink=\"/Admin-Login\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\" >     </i>   Logout</a>\n\n              <!-- Dairy End*********************** -->\n\n            <!-- <a routerLink=\"/AppointmentList\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"><i class=\"fa fa-list-alt\" aria-hidden=\"true\" >     </i>  Appointment List</a>\n\n\n            <a href=\"#demo1\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-user\" aria-hidden=\"true\"> </i>Product <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i> </a>\n            <div class=\"collapse submenufont\" id=\"demo1\">\n                <a routerLink=\"/Addproduct\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Add Product</a>\n                <a routerLink=\"/member-list\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Member</a>\n            </div>\n\n            <a href=\"#demo2\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"> </i> Membership plan <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo2\">\n                <a routerLink=\"/membership-plan\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Membership plan</a>\n                <a routerLink=\"/membership-plan-list\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Membership plan</a>\n            </div>\n\n            <a href=\"#demo3\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i> Instructor <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo3\">\n                <a routerLink=\"/instructor\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add Instructor</a>\n                <a routerLink=\"/instructor-list\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Instructor</a>\n            </div>\n\n            <a href=\"#demo4\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-universal-access\" aria-hidden=\"true\"></i> Workout Type <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i> </a>\n            <div class=\"collapse submenufont\" id=\"demo4\">\n                <a routerLink=\"/workout-type\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Add Workout Type</a>\n                <a routerLink=\"/workout-type-list\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Workout Type</a>\n            </div>\n\n\n            <a href=\"#demo5\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-heartbeat\" aria-hidden=\"true\"></i> Member Health Info <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i> </a>\n            <div class=\"collapse submenufont\" id=\"demo5\">\n                <a routerLink=\"/member-health-info\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Add Member Health Info</a>\n                <a routerLink=\"/member-health-info-list\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View Member Health Info</a>\n            </div>\n\n            <a href=\"#demo6\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"> </i> User Workout Details <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo6\">\n                <a routerLink=\"/user-workout-details\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Add  User Workout Details </a>\n                <a routerLink=\"/user-workout-details-list\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View User Workout Details </a>\n            </div>\n\n            <a href=\"#demo7\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i> User Plan Detail <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i><i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i> </a>\n            <div class=\"collapse submenufont\" id=\"demo7\">\n                <a routerLink=\"/user-plan-detail\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Add  User Plan Detail </a>\n                <a routerLink=\"/user-plan-details-list\" routerLinkActive=\"active\" class=\"list-group-item\"> <i class=\"fa fa-eye\" aria-hidden=\"true\"> </i>View User Plan Detail </a>\n            </div>\n            <a href=\"#demo13\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"> </i> Enquiry <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo13\">\n\n                <a routerLink=\"/inquiry\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Enquiry</a>\n                <a routerLink=\"/enquirylist\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Enquiry List</a>\n\n\n            </div>\n          \n            <a href=\"#demo11\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"> </i> Report <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo11\">\n\n                <a routerLink=\"/user-plan-detail-report\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  User Plan </a>\n                <a routerLink=\"/membership-plan-history\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i>  Membership Plan</a>\n                <a routerLink=\"/user-workout-detail-history\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> User Workout </a>\n                <a routerLink=\"/total-leads\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Total Leads </a>\n                <a routerLink=\"/payment-history-list\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Payment History </a>\n\n            </div>\n\n\n\n            <a href=\"#demo10\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"> <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"> </i> Admin Profile <i i id=\"one\" class=\"fa fa-angle-left plus\" aria-hidden=\"true\"> </i> <i id=\"two\" class=\"fa fa-angle-down plus\" aria-hidden=\"true\"></i></a>\n            <div class=\"collapse submenufont\" id=\"demo10\">\n\n                <a routerLink=\"/adminregistration\" routerLinkActive=\"active\" class=\"list-group-item\"><i class=\"fa fa-plus\" aria-hidden=\"true\"> </i> Registration</a>\n\n\n            </div>\n\n\n\n            <a routerLink=\"/mainexercise\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"><i class=\"fa fa-bookmark\" aria-hidden=\"true\" >     </i>   Add Main Exercise </a>\n\n            <a routerLink=\"/attendance-status\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"><i class=\"fa fa-bookmark\" aria-hidden=\"true\" >     </i>   Attendance Status </a>\n\n\n\n\n\n            <a routerLink=\"/Admin-Login\" class=\"list-group-item list-group-item-success strong\" data-toggle=\"collapse\" data-parent=\"#MainMenu\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\" >     </i>   Logout</a> -->\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./product.component.html */ "ez78");
/* harmony import */ var _product_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.component.css */ "7BkA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductComponent = /** @class */ (function () {
    function ProductComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        // this.instructor = new Instructor();
        // this.instructorlist = [];
        this.products = new _Classes__WEBPACK_IMPORTED_MODULE_6__["Products"]();
        this.productslist = [];
    }
    // OnSubmit() {
    //   console.log(this.instructor);
    //   this.service.AddInstructor(this.instructor).subscribe((result) => {
    //     if (result != "Success") {
    //       alert("Saved Successfully");
    //     } else {
    //       alert("Something went wrong! Please try again.");
    //     }
    //   });
    // }
    ProductComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.products);
        this.service.AddProducts(this.products).subscribe(function (result) {
            if (result > 0) {
                var formData = new FormData();
                _this.products.ProductImage1 = _this.filesToUpload[0].name;
                _this.products.ProductImage2 = _this.filesToUpload[1].name;
                _this.products.ProductImage3 = _this.filesToUpload[2].name;
                formData.append('uploadedImage', _this.filesToUpload[0], _this.products.ProductImage1);
                formData.append('uploadedImage', _this.filesToUpload[1], _this.products.ProductImage2);
                formData.append('uploadedImage', _this.filesToUpload[2], _this.products.ProductImage3);
                _this.service.SaveProductsImage(formData, result).subscribe(function (data) {
                    alert('Saved Successfully.');
                });
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    ProductComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.selectedFileNames = [];
        for (var i = 0; i < this.filesToUpload.length; i++) {
            this.selectedFileNames.push(this.filesToUpload[i].name);
            this.products.ProductImage1 = this.filesToUpload[i].name;
            this.products.ProductImage2 = this.filesToUpload[i].name;
            this.products.ProductImage3 = this.filesToUpload[i].name;
        }
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product',
            template: _raw_loader_product_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_product_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "M5pr":
/*!**********************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdateproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateproductComponent", function() { return UpdateproductComponent; });
/* harmony import */ var _raw_loader_updateproduct_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./updateproduct.component.html */ "Ml8+");
/* harmony import */ var _updateproduct_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateproduct.component.css */ "pNZJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateproductComponent = /** @class */ (function () {
    function UpdateproductComponent() {
    }
    UpdateproductComponent.prototype.ngOnInit = function () {
    };
    UpdateproductComponent.ctorParameters = function () { return []; };
    UpdateproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-updateproduct',
            template: _raw_loader_updateproduct_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_updateproduct_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateproductComponent);
    return UpdateproductComponent;
}());



/***/ }),

/***/ "MOtD":
/*!**************************************************************!*\
  !*** ./src/app/subcategorylist/subcategorylist.component.ts ***!
  \**************************************************************/
/*! exports provided: SubcategorylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategorylistComponent", function() { return SubcategorylistComponent; });
/* harmony import */ var _raw_loader_subcategorylist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./subcategorylist.component.html */ "NJfF");
/* harmony import */ var _subcategorylist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcategorylist.component.css */ "RidF");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubcategorylistComponent = /** @class */ (function () {
    function SubcategorylistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.SubCategoryList = [];
    }
    SubcategorylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllSubCategory().subscribe(function (data) {
            console.log(data);
            _this.SubCategoryList = data;
        });
    };
    SubcategorylistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteSubCategory(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.SubCategoryList = _this.SubCategoryList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    SubcategorylistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"] }
    ]; };
    SubcategorylistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-subcategorylist',
            template: _raw_loader_subcategorylist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_subcategorylist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"]])
    ], SubcategorylistComponent);
    return SubcategorylistComponent;
}());



/***/ }),

/***/ "Ml8+":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updateproduct/updateproduct.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>updateproduct works!</p>\n");

/***/ }),

/***/ "NJfF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcategorylist/subcategorylist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>subcategorylist works!</p>\n<p>specificationlist works!</p>\n<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Product List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                         <th>Id</th> \n                                                         <th> MainCategoryId</th>\n                                                         <th> SubCategoryName</th>\n                                                        <th>SubCategoryDescription</th>\n                                                        <th>SubcategoryImage1</th>\n                                                        <th> SubcategoryImage2</th>\n                                                        \n\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of SubCategoryList\">\n                                                       \n                                                        <td>{{i.Id}} </td>\n                                                        <td>{{i.MainCategoryId }}</td>\n\n                                                        <td>{{i.SubCategoryName }}</td>\n                                                        <td>{{i.SubCategoryDescription }}</td>\n                                                        <td>{{i.SubCategoryImage1 }}</td>\n                                                        <td>{{i.SubCategoryImage2 }}</td>\n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> \n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "OYGv":
/*!*******************************************************************!*\
  !*** ./src/app/updatedistributor/updatedistributor.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWRpc3RyaWJ1dG9yL3VwZGF0ZWRpc3RyaWJ1dG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    //   tp: boolean;
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //       this.tp = event.url != "/Admin-Login";
        //     }
        //     console.log(this.tp)
        //   });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "PnHY":
/*!***********************************************************!*\
  !*** ./src/app/specification/specification.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZmljYXRpb24vc3BlY2lmaWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "PstH":
/*!********************************************************!*\
  !*** ./src/app/updateorders/updateorders.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateordersComponent", function() { return UpdateordersComponent; });
/* harmony import */ var _raw_loader_updateorders_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./updateorders.component.html */ "fLrl");
/* harmony import */ var _updateorders_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateorders.component.css */ "reP1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateordersComponent = /** @class */ (function () {
    function UpdateordersComponent() {
    }
    UpdateordersComponent.prototype.ngOnInit = function () {
    };
    UpdateordersComponent.ctorParameters = function () { return []; };
    UpdateordersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-updateorders',
            template: _raw_loader_updateorders_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_updateorders_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpdateordersComponent);
    return UpdateordersComponent;
}());



/***/ }),

/***/ "RHET":
/*!******************************************!*\
  !*** ./src/app/offer/offer.component.ts ***!
  \******************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var _raw_loader_offer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./offer.component.html */ "J/EJ");
/* harmony import */ var _offer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer.component.css */ "0xzo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OfferComponent = /** @class */ (function () {
    function OfferComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        this.productOffer = new _Classes__WEBPACK_IMPORTED_MODULE_6__["ProductOffer"]();
        this.productOfferlist = [];
    }
    OfferComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.productOffer);
        this.service.AddProductOffer(this.productOffer).subscribe(function (result) {
            if (result > 0) {
                var formData = new FormData();
                _this.productOffer.OfferImage = _this.filesToUpload[0].name;
                formData.append('uploadedImage', _this.filesToUpload[0], _this.productOffer.OfferImage);
                _this.service.SaveProductOfferImage(formData, result).subscribe(function (data) {
                    alert('Saved Successfully.');
                });
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    OfferComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.selectedFileNames = [];
        for (var i = 0; i < this.filesToUpload.length; i++) {
            this.selectedFileNames.push(this.filesToUpload[i].name);
            this.productOffer.OfferImage = this.filesToUpload[i].name;
        }
    };
    OfferComponent.prototype.ngOnInit = function () {
    };
    OfferComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    OfferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-offer',
            template: _raw_loader_offer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_offer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], OfferComponent);
    return OfferComponent;
}());



/***/ }),

/***/ "RU0v":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Edit Profile</h4>\n                      <p class=\"card-category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Company (disabled)\" disabled>\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-3\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Username\">\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email address\" type=\"email\">\n                                  </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Last Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Adress\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"City\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Country\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <label>About Me</label>\n                                <mat-form-field class=\"example-full-width\">\n                                   <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n                                 </mat-form-field>\n                                  <!-- <div class=\"form-group\">\n\n                                      <div class=\"form-group\">\n                                          <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                          <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                      </div>\n                                  </div> -->\n                              </div>\n                          </div>\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"javascript:void(0)\">\n                          <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n                      </a>\n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <p class=\"card-description\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                      <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "RidF":
/*!***************************************************************!*\
  !*** ./src/app/subcategorylist/subcategorylist.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNhdGVnb3J5bGlzdC9zdWJjYXRlZ29yeWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <nav class=\"navbar navbar-expand-lg  navPosition  navbar-absolute fixed-top\">\n\n    <div class=\"container-fluid\">\n\n        <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n            <div class=\"Mobile\">\n                <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n\n                <span class=\"font\"> 9860738727</span>\n            </div>\n\n            <div class=\"Emailid\">\n                <i class=\"fa fa-envelope-open\" aria-hidden=\"true\"></i>\n\n                <span class=\"mail\"> imperialfit1998@gmail.com</span>\n            </div>\n\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n        \n            <ul class=\"navbar-nav\">\n       \n                <li class=\"nav-item\" *ngIf=\"!isVisible \">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-user-circle-o\"></i>\n                \n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" routerLink=\"/OTP\">Reset Password</a>\n                        <a class=\"dropdown-item\" routerLink=\"/Admin-Login\">Logout</a>\n\n                    </div>\n                </li>\n\n\n\n            </ul>\n        </div>\n    </div>\n</nav>\n -->\n\n\n<!--New Code-->\n\n<nav class=\"navbar navbar-expand-lg  navPosition  navbar-absolute fixed-top\">\n\n    <div class=\"container-fluid\">\n\n        <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-11\"></div>\n            <div class=\"col-md-1\">\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button><br>\n    </div>\n</div>\n\n        <!---->\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <div class=\"Mobile\">\n                    <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n\n                    <span class=\"font\"> 9898989898</span>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <div class=\"Emailid\">\n                    <i class=\"fa fa-envelope-open\" aria-hidden=\"true\"></i>\n\n                    <span class=\"mail\"> pranadairy21@gmail.com</span>\n                </div>\n\n            </li>\n\n\n\n\n        </ul>\n\n\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n\n            <ul class=\"navbar-nav\">\n\n                <li class=\"nav-item\" *ngIf=\"!isVisible \">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-user-circle-o\"></i>\n\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" routerLink=\"/OTP\">Reset Password</a>\n                        <a class=\"dropdown-item\" routerLink=\"/Admin-Login\">Logout</a>\n\n                    </div>\n                </li>\n\n\n\n            </ul>\n        </div>\n        <!---->\n        <!-- <div class=\"Mobile\">\n            <i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>\n\n            <span class=\"font\"> 9860738727</span>\n        </div>\n\n        <div class=\"Emailid\">\n            <i class=\"fa fa-envelope-open\" aria-hidden=\"true\"></i>\n\n            <span class=\"mail\"> imperialfit1998@gmail.com</span>\n        </div>\n\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n\n            <ul class=\"navbar-nav\">\n\n                <li class=\"nav-item\" *ngIf=\"!isVisible \">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fa fa-user-circle-o\"></i>\n\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" routerLink=\"/OTP\">Reset Password</a>\n                        <a class=\"dropdown-item\" routerLink=\"/Admin-Login\">Logout</a>\n\n                    </div>\n                </li>\n\n\n\n            </ul>\n        </div> -->\n    </div>\n</nav>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "TCzw":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderslist/orderslist.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\" style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Order List </h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n\n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                        <!-- <th>Id</th> -->\n\n                                                        <th>Title</th>\n                                                        <th>Price</th>\n                                                        <th>Month</th>\n                                                        <!-- <th>ValidTill</th> -->\n                                                        <th>Description</th>\n                                                        <th>Remarks</th>\n                                                        <th>Action</th>\n\n\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of membershipplanList\">\n                                                        <!-- <td>{{i.Id}}</td> -->\n                                                        <td>{{i.Title}}</td>\n                                                        <td>{{i.Price}}</td>\n                                                        <td>{{i.Period}}</td>\n                                                        <!-- <td>{{i.ValidTill}}</td> -->\n                                                        <td>{{i.Description}}</td>\n                                                        <td>{{i.Remarks}}</td>\n                                                        <td>\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\" style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 15px;\" aria-hidden=\"true\"></i>\n                                                            <i class=\"fa fa-trash\" (click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px;\" aria-hidden=\"true\"></i>\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "TDZI":
/*!*****************************************************!*\
  !*** ./src/app/orderslist/orderslist.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyc2xpc3Qvb3JkZXJzbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "U58P":
/*!***************************************************************!*\
  !*** ./src/app/distributorlist/distributorlist.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table_table-bordered{\r\n    border: 2px solid black;\r\n  }\r\n.table-bordered th, .table-bordered td {\r\n  border: 1px solid #56789621;\r\n}\r\n.th,\r\ntd {\r\n  border: 1px solid black;\r\n  text-align: center;\r\n}\r\n.titlecolor th{\r\n  color: #2b2626;;\r\n  font-weight: 500;\r\n  text-align: -webkit-center !important;\r\n  background-color: #f1efef;\r\n  font-size: 15px;\r\n}\r\n.card-title{\r\n  text-align: center;\r\n\r\n}\r\n.card {\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  transition: 0.3s;\r\n  /* width: 40%; */\r\n}\r\n.serchlist{\r\n  margin-left: 28px;\r\n  background-color: #046ca2 ;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.resetlist{\r\n  background-color: #046ca2 ;\r\n  color: white;\r\n  font-weight: bold;\r\n  margin-left: 10px;\r\n}\r\n.serchlist:hover{\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n  /* background-color: #4554A4; */\r\n}\r\n.resetlist:hover{\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n  /* background-color: #4554A4; */\r\n}\r\n.form-control{\r\n  background-color: #f1efef;\r\n}\r\n.btn1{\r\n\r\npadding-top: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpYnV0b3JsaXN0L2Rpc3RyaWJ1dG9ybGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0VBQ3pCO0FBQ0Y7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTs7RUFFRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCOztBQUVwQjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwwRUFBMEU7RUFDMUUsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSwwRUFBMEU7RUFDMUUsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlidXRvcmxpc3QvZGlzdHJpYnV0b3JsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVfdGFibGUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbi50YWJsZS1ib3JkZXJlZCB0aCwgLnRhYmxlLWJvcmRlcmVkIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNTY3ODk2MjE7XHJcbn0gXHJcbi50aCxcclxudGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0bGVjb2xvciB0aHtcclxuICBjb2xvcjogIzJiMjYyNjs7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLmNhcmQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIC8qIHdpZHRoOiA0MCU7ICovXHJcbn1cclxuLnNlcmNobGlzdHtcclxuICBtYXJnaW4tbGVmdDogMjhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2Y2EyIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnJlc2V0bGlzdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ2Y2EyIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnNlcmNobGlzdDpob3ZlcntcclxuICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksIDAgMTdweCA1MHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU1NEE0OyAqL1xyXG59XHJcbi5yZXNldGxpc3Q6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMjQpLCAwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ1NTRBNDsgKi9cclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWVmZWY7XHJcbn1cclxuLmJ0bjF7XHJcblxyXG5wYWRkaW5nLXRvcDogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "UdSu":
/*!**************************************************************************************!*\
  !*** ./src/app/usersubscriptiondetailslist/usersubscriptiondetailslist.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UsersubscriptiondetailslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersubscriptiondetailslistComponent", function() { return UsersubscriptiondetailslistComponent; });
/* harmony import */ var _raw_loader_usersubscriptiondetailslist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./usersubscriptiondetailslist.component.html */ "lcLV");
/* harmony import */ var _usersubscriptiondetailslist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersubscriptiondetailslist.component.css */ "Gicx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersubscriptiondetailslistComponent = /** @class */ (function () {
    function UsersubscriptiondetailslistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.userPlanDetailList = [];
    }
    UsersubscriptiondetailslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllUserPlanDetails().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.userPlanDetailList.push(data);
            }
            // console.log(this.organizationMasterList);
        });
    };
    UsersubscriptiondetailslistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteUserPlanDetails(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.userPlanDetailList = _this.userPlanDetailList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    UsersubscriptiondetailslistComponent.prototype.Serach = function () {
        var _this = this;
        this.userPlanDetailList = this.userPlanDetailList.filter(function (x) { return x.Member.UserName.toLowerCase().includes(_this.SearchText.toLowerCase()); });
    };
    UsersubscriptiondetailslistComponent.prototype.Select = function () {
        var _this = this;
        this.userPlanDetailList = this.userPlanDetailList.filter(function (x) { return x.StartDate.toLowerCase() >= (_this.StartDate1.toLowerCase()) && x.StartDate.toLowerCase() <= (_this.EndDate1.toLowerCase()); });
        //
        console.log(this.userPlanDetailList);
    };
    UsersubscriptiondetailslistComponent.prototype.Reset = function () {
        var _this = this;
        this.userPlanDetailList = [];
        this.service.GetAllUserPlanDetails().subscribe(function (result) {
            for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                var data = result_2[_i];
                _this.userPlanDetailList.push(data);
            }
        });
    };
    UsersubscriptiondetailslistComponent.prototype.Edit = function (Id) {
        try {
            this.router.navigateByUrl("/update-user-plan-details/" + Id);
        }
        catch (error) {
            alert("certi-" + error);
        }
    };
    UsersubscriptiondetailslistComponent.prototype.Payment = function (Id) {
        try {
            this.router.navigateByUrl("/payment-history/" + Id);
        }
        catch (error) {
            alert("certi-" + error);
        }
    };
    UsersubscriptiondetailslistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"] }
    ]; };
    UsersubscriptiondetailslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-usersubscriptiondetailslist',
            template: _raw_loader_usersubscriptiondetailslist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_usersubscriptiondetailslist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"]])
    ], UsersubscriptiondetailslistComponent);
    return UsersubscriptiondetailslistComponent;
}());



/***/ }),

/***/ "Ungv":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updatedistributor/updatedistributor.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-2\"></div>\r\n\r\n                    <div class=\"col-md-8\"style=\"padding-top:13px\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header card-header-danger\">\r\n                                <h4 class=\"card-title\">Distributor</h4>\r\n                                <!-- <p class=\"card-category\">Complete your profile</p> -->\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                <form #distributorForm=\"ngForm\">\r\n\r\n                                    <div class=\"row\">\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Buisness Name\" [(ngModel)]=\"distributor.BuisnessName\" #BuisnessNameControl=\"ngModel\" name=\"BuisnessName\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \r\n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Name\" [(ngModel)]=\"distributor.Name\" #NameControl=\"ngModel\" name=\"Name\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \r\n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <textarea matInput placeholder=\"Address\" [(ngModel)]=\"distributor.Address\" #AddressControl=\"ngModel\" name=\"Address\" class=\"example-full-width\" type=\"text\" required></textarea>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <!-- <div class=\"col-md-6\">\r\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\r\n                                                <label for=\"propeller-select\">Country</label>\r\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.Country #Country=\"ngModel\" (change)=\"MainExeChange($event)\">\r\n                                                    <option *ngFor=\"let Country of distributorlist\" [value]=\"Country.Id\">\r\n                                                        {{Country.Name}} </option>\r\n                                                        <option [value]=\"1\">India</option>\r\n                                                </select>\r\n                                            </div>\r\n        \r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\r\n                                                <label for=\"propeller-select\">State</label>\r\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.State #State=\"ngModel\" (change)=\"MainExeChange($event)\">\r\n                                                    <option *ngFor=\"let State of distributorlist\" [value]=\"State.Id\">\r\n                                                        {{State.Name}} </option>\r\n                                                        <option [value]=\"1\">Maharashtra</option>\r\n                                                </select>\r\n                                            </div>\r\n        \r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\r\n                                                <label for=\"propeller-select\">City</label>\r\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"City\" [(ngModel)]=distributor.City #City=\"ngModel\" (change)=\"MainExeChange($event)\">\r\n                                                    <option *ngFor=\"let State of distributorlist\" [value]=\"City.Id\">\r\n                                                        {{City.Name}} </option>\r\n                                                    <option [value]=\"1\">Pune</option>\r\n                                                </select>\r\n                                            </div> \r\n        \r\n                                        </div> -->\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Email ID\" [(ngModel)]=\"distributor.Email\" #EmailControl=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" name=\"Email\" type=\"email\" required>\r\n                                            </mat-form-field>\r\n                                            <div class=\"help-block\" *ngIf=\" EmailControl.errors?.pattern && EmailControl.touched \">Email is invalid</div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"distributor.Mobile\" #MobileControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"Mobile\" type=\"number\" required>\r\n                                            </mat-form-field>\r\n                                            <div class=\"help-block\" *ngIf=\" MobileControl.touched && MobileControl.errors?.pattern \">Mobile number is invalid</div>\r\n                                        </div>\r\n                                       \r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"PostalCode Number\" [(ngModel)]=\"distributor.PostalCode\" #PostalCodeControl=\"ngModel\" onKeyPress=\"if(this.value.length==6) return false;\" name=\"PostalCode\" type=\"number\" required>\r\n                                            </mat-form-field>\r\n                                            <div class=\"help-block\" *ngIf=\" PostalCodeControl.touched && PostalCodeControl.errors?.pattern \">PostalCode number is invalid</div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Start Date\" [(ngModel)]=\"distributor.StartDate\" #StartDate=\"ngModel\" type=\"date\" name=\"StartDate\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"End Date\" [(ngModel)]=\"distributor.EndDate\" #EndDate=\"ngModel\" type=\"date\" name=\"EndDate\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <!-- <div class=\"col-md-12\">\r\n                                            <label for=\"avatar\">Upload Photo:</label>\r\n\r\n                                            <input type=\"file\" [(ngModel)]=\"distributor.Photo\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"Photo\" accept=\"image/png, image/jpeg\" required>\r\n\r\n                                        </div>\r\n                                         <div class=\"col-md-6\"> -->\r\n                                            <!-- <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\r\n                                                <label for=\"propeller-select\">Country</label>\r\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.Country.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\r\n                                                    <option *ngFor=\"let Country of CountryList\" [value]=\"Country.Id\">\r\n                                                        {{Country.Name}} </option>\r\n                                                </select>\r\n                                            </div>\r\n        \r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\r\n                                                <label for=\"propeller-select\">State</label>\r\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"State\" [(ngModel)]=distributor.State.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\r\n                                                    <option *ngFor=\"let State of StateList\" [value]=\"State.Id\">\r\n                                                        {{State.Name}} </option>\r\n                                                </select>\r\n                                            </div>\r\n        \r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\r\n                                                <label for=\"propeller-select\">City</label>\r\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"City\" [(ngModel)]=distributor.City.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\r\n                                                    <option *ngFor=\"let City of Citylist\" [value]=\"City.Id\">\r\n                                                        {{City.Name}} </option>\r\n                                                </select>\r\n                                            </div>\r\n        \r\n                                        </div> -->\r\n\r\n                                        <!-- <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"DOB\" [(ngModel)]=\"instructor.DOB\" #DOBControl=\"ngModel\" type=\"date\" name=\"DOB\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Salary\" [(ngModel)]=\"instructor.Salary\" #SalaryControl=\"ngModel\" type=\"number\" name=\"Salary\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Email ID\" [(ngModel)]=\"instructor.Email\" #EmailControl=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" name=\"Email\" type=\"email\" required>\r\n                                            </mat-form-field>\r\n                                            <div class=\"help-block\" *ngIf=\" EmailControl.errors?.pattern && EmailControl.touched \">Email is invalid</div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"instructor.Mobile\" #MobileControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"Mobile\" type=\"number\" required>\r\n                                            </mat-form-field>\r\n                                            <div class=\"help-block\" *ngIf=\" MobileControl.touched && MobileControl.errors?.pattern \">Mobile number is invalid</div>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <textarea matInput placeholder=\"Address\" [(ngModel)]=\"instructor.Address\" #AddressControl=\"ngModel\" name=\"Address\" class=\"example-full-width\" type=\"text\" required></textarea>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-12\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <textarea matInput placeholder=\"Professional Details\" [(ngModel)]=\"instructor.ProfessionalDetails\" #ProfessionalDetailsControl=\"ngModel\" name=\"ProfessionalDetails\" class=\"example-full-width\" type=\"text\" required></textarea>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Experience\" [(ngModel)]=\"instructor.Experience\" #ExperienceControl=\"ngModel\" name=\"Experience\" class=\"example-full-width\" type=\"text\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Thumb Id\" [(ngModel)]=\"instructor.ThumbId\" #ThumbIdControl=\"ngModel\" name=\"ThumbId\" class=\"example-full-width\" type=\"number\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Joining Date\" [(ngModel)]=\"instructor.JoiningDate\" #JoiningDate=\"ngModel\" type=\"date\" name=\"JoiningDate\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <mat-form-field class=\"example-full-width\">\r\n                                                <input matInput placeholder=\"Date Of Resign\" [(ngModel)]=\"instructor.DateOfResign\" #DateOfResign=\"ngModel\" type=\"date\" name=\"DateOfResign\" required>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                       \r\n                                        <div class=\"col-md-12\">\r\n                                            <label for=\"avatar\">Upload Photo:</label>\r\n\r\n                                            <input type=\"file\" [(ngModel)]=\"instructor.Photo\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"Photo\" accept=\"image/png, image/jpeg\" required>\r\n\r\n                                        </div> -->\r\n\r\n\r\n                                    </div>\r\n\r\n                                    <div class=\"row\"style=\"margin:auto\">\r\n                                        <div class=\"col-md-5\"></div>\r\n\r\n                                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\"  (click)=\"OnSubmit()\">Update</button>\r\n\r\n                                        <div class=\"col-md-2\"></div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-2\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n</router-outlet>");

/***/ }),

/***/ "W3ZI":
/*!*******************************************************************!*\
  !*** ./src/app/registration-list/registration-list.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi1saXN0L3JlZ2lzdHJhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "WV7s":
/*!****************************!*\
  !*** ./src/app/Classes.ts ***!
  \****************************/
/*! exports provided: ForgotPassword, ResetPassword, Experience, RegisterOTP, EducationMaster, PostJobMaster, OrgType, OrganizationMaster, studentplandetails, JobSeeker, DashboardDetails, Orghrdetails, StudentPlanMaster, AdminMaster, Orgplandetails, UserDashboard, Country, State, City, Businesstype, JobCategory, Applicationdetails, Searchcriteria, Franchisedetails, FranchisePhoto, OrganizationPlanMaster, Investor, InvestorDetails, MemberHealthInfo, UserWorkoutDetails, Instructor, WorkoutType, Member, AttendenceStatus, MembershipPlan, UserPlanDetails, ExerciseRoutine, Exercise, DietPlan, DietTable, CounsellingAppointment, PaymentHistory, Inquiry, PaymentReceipt, MainExercise, SubExercise, Product, Distributor, Products, Subscription, ProductReview, ProductOffer, SubCategory, MainCategory, ProductInstructions, ProductSpecification, Registration, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword", function() { return ForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return ResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experience", function() { return Experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterOTP", function() { return RegisterOTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationMaster", function() { return EducationMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobMaster", function() { return PostJobMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgType", function() { return OrgType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationMaster", function() { return OrganizationMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studentplandetails", function() { return studentplandetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSeeker", function() { return JobSeeker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDetails", function() { return DashboardDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orghrdetails", function() { return Orghrdetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPlanMaster", function() { return StudentPlanMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMaster", function() { return AdminMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orgplandetails", function() { return Orgplandetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboard", function() { return UserDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Businesstype", function() { return Businesstype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCategory", function() { return JobCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Applicationdetails", function() { return Applicationdetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searchcriteria", function() { return Searchcriteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Franchisedetails", function() { return Franchisedetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranchisePhoto", function() { return FranchisePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationPlanMaster", function() { return OrganizationPlanMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Investor", function() { return Investor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestorDetails", function() { return InvestorDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberHealthInfo", function() { return MemberHealthInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWorkoutDetails", function() { return UserWorkoutDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instructor", function() { return Instructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutType", function() { return WorkoutType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceStatus", function() { return AttendenceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipPlan", function() { return MembershipPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPlanDetails", function() { return UserPlanDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseRoutine", function() { return ExerciseRoutine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exercise", function() { return Exercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietPlan", function() { return DietPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DietTable", function() { return DietTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounsellingAppointment", function() { return CounsellingAppointment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistory", function() { return PaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inquiry", function() { return Inquiry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentReceipt", function() { return PaymentReceipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainExercise", function() { return MainExercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubExercise", function() { return SubExercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distributor", function() { return Distributor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReview", function() { return ProductReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOffer", function() { return ProductOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategory", function() { return SubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCategory", function() { return MainCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInstructions", function() { return ProductInstructions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSpecification", function() { return ProductSpecification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registration", function() { return Registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
// export class Registration {
//     EnrollNo: number;
//     FName: string;
//     LName: string;
//     Address: string;
//     CityId: number;
//     StateId: number;
//     Pincode: number;
//     DOB: string;
//     Gender: string;
//     Mobile: string;
//     Email: string;
//     Username: string;
//     Password: string;
//     EntryDate: string;
//     YearofExperiance: string;
//     Status: string;
//     Photo: string;
//   }
//   export class login {
//     UserName: string;
//     Password: string;
//   }
//   export class ForgotPassword {
//     Mobile: string;
//     Otp: number;
//   }
//   export class ResetPassword {
//     Otp: number;
//     Password: string;
//     ConfirmPassword: string;
//   }
//   export class Experience {
//     Id: number
//     Sid: number;
//     FromDate: string;
//     ToDate: string;
//     Designation: string;
//     OrganizationName: string;
//     Role: string;
//   }
//   export class RegisterOTP {
//     Id: number;
//     OTP: string;
//     Status: string;
//     Mobile: string;
//   }
//   export class EducationMaster {
//     Id: number;
//     Sid: number;
//     CollegeName: string;
//     EnrollNo: string;
//     Education: string;
//     Branch: string;
//     Passyear: string;
//     Marks: string;
//     Skill: string;
//     Extraskill: string;
//   }
//   export class PostJob{
//     JobId : number;
//     OrganizationId: number;
//     JobCategory: string;
//     RequiredSkill: string;
//     Role: string;
//     MinQualification: string;
//     ExtraSkill: string;
//     MaxAge: number;
//     ExpectedSalary: number;
//     JobLocation: string;
//     WorkingHours: string;
//     JobDescription: string;
//     LastApplyDate: string;
//     EntryDate: string;
//     Status: string;
//     CityId: number;
//     StateId: number;
//     CountryId: number;
//     CreatedBy: string;
//     CreatedDate : string;
//     UpdatedBy: string;
//     UpdatedDate: string;
//   }
//   export class OrgTypeMaster {
//     Id: number;
//     Title: string;
//   }
//   export class OrganizationMaster {
//     Id: number;
//     Name: string;
//     GSTNo: number;
//     Address: string;
//     CityId: number;
//     StateId: number;
//     CountryId: number;
//     Pincode: number;
//     Mobile : string;
//     Website: string;
//     OrganizationTypeId: number
//   }
//   export class Orghrdetails {
//     Id: number;
//     FName : string;
//     LName : string;
//     Mobile : string;
//     Email : string;
//     Username : string;
//     Password : string;
//     EntryDate : string;
//     OrganizationId: number;
//     Status : string;
//   }
//   export class organizationplan {
//     Id: number;
//     Title: string;
//     Price: string;
//     Status: string;
//   }
//   export class OrganizationPlanDetailsMaster {
//     Id: number;
//     OrganizationId: number;
//     PlanId: number;
//     Startdate:string;
//     EndDate: string;
//   }
//   export class studentplan {
//     Id: number;
//     Title: string;
//     Price: string;
//     Status: string;
//   }
//   export class AdminMaster {
//     Id: number;
//     FName : string;
//     Mobile : string;
//     Email : string;
//     Username : string;
//     Password : string;
//     EntryDate : string;
//   }
//   export class Orgplandetails {
//     Id: number;
//     OrgnizationId: number;
//     PlanId : string;
//     Startdate: string;
//     EndDate: string;
//     Status : string;
//   }
//   export class studentplandetails {
//     Id: number;
//     StudentId: number;
//     PlanId : string;
//     Startdate: string;
//     EndDate: string;
//     Status : string;
//   }
//   export class UserDashboard {
//     jobSeeker: Registration  
//     education:EducationMaster[]  
//     experiance: Experience []
//   }
// export class Registration {
//   EnrollNo: number;
//   FName: string;
//   LName: string;
//   Address: string;
//   CityId: number;
//   StateId: number;
//   Pincode: number;
//   DOB: string;
//   Gender: string;
//   Mobile: string;
//   Email: string;
//   Username: string;
//   Password: string;
//   EntryDate: string;
//   YearofExperiance: string;
//   Status: string;
//   Photo: string;
// }
// export class Login {
//   UserName: string;
//   Password: string;
// }
var ForgotPassword = /** @class */ (function () {
    function ForgotPassword() {
    }
    return ForgotPassword;
}());

var ResetPassword = /** @class */ (function () {
    function ResetPassword() {
    }
    return ResetPassword;
}());

var Experience = /** @class */ (function () {
    function Experience() {
    }
    return Experience;
}());

var RegisterOTP = /** @class */ (function () {
    function RegisterOTP() {
    }
    return RegisterOTP;
}());

var EducationMaster = /** @class */ (function () {
    function EducationMaster() {
    }
    return EducationMaster;
}());

// export class PostJobMaster {
//   JobId : number;
//   OrganizationId: number;
//   JobCategory: string;
//   RequiredSkill: string;
//   Role: string;
//   MinQualification: string;
//   ExtraSkill: string;
//   MaxAge: number;
//   ExpectedSalary: number;
//   JobLocation: string;
//   WorkingHours: string;
//   JobDescription: string;
//   LastApplyDate: string;
//   EntryDate: string;
//   Status: string;
//   City: City;
//   State: State;
//   Country: Country;
//   CreatedBy: string;
//   CreatedDate : string;
//   UpdatedBy: string;
//   UpdatedDate: string;
// }
var PostJobMaster = /** @class */ (function () {
    function PostJobMaster() {
    }
    return PostJobMaster;
}());

var OrgType = /** @class */ (function () {
    function OrgType() {
    }
    return OrgType;
}());

var OrganizationMaster = /** @class */ (function () {
    function OrganizationMaster() {
    }
    return OrganizationMaster;
}());

var studentplandetails = /** @class */ (function () {
    function studentplandetails() {
    }
    return studentplandetails;
}());

var JobSeeker = /** @class */ (function () {
    function JobSeeker() {
    }
    return JobSeeker;
}());

var DashboardDetails = /** @class */ (function () {
    function DashboardDetails() {
    }
    return DashboardDetails;
}());

var Orghrdetails = /** @class */ (function () {
    function Orghrdetails() {
    }
    return Orghrdetails;
}());

var StudentPlanMaster = /** @class */ (function () {
    function StudentPlanMaster() {
    }
    return StudentPlanMaster;
}());

var AdminMaster = /** @class */ (function () {
    function AdminMaster() {
    }
    return AdminMaster;
}());

var Orgplandetails = /** @class */ (function () {
    function Orgplandetails() {
    }
    return Orgplandetails;
}());

// export class studentplandetails {
//   Id: number;
//   StudentId: number;
//   PlanId : string;
//   Startdate: string;
//   EndDate: string;
//   Status : string;
// }
var UserDashboard = /** @class */ (function () {
    function UserDashboard() {
    }
    return UserDashboard;
}());

var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());

var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());

var Businesstype = /** @class */ (function () {
    function Businesstype() {
    }
    return Businesstype;
}());

var JobCategory = /** @class */ (function () {
    function JobCategory() {
    }
    return JobCategory;
}());

var Applicationdetails = /** @class */ (function () {
    function Applicationdetails() {
    }
    return Applicationdetails;
}());

var Searchcriteria = /** @class */ (function () {
    function Searchcriteria() {
    }
    return Searchcriteria;
}());

var Franchisedetails = /** @class */ (function () {
    function Franchisedetails() {
    }
    return Franchisedetails;
}());

var FranchisePhoto = /** @class */ (function () {
    function FranchisePhoto() {
    }
    return FranchisePhoto;
}());

var OrganizationPlanMaster = /** @class */ (function () {
    function OrganizationPlanMaster() {
    }
    return OrganizationPlanMaster;
}());

var Investor = /** @class */ (function () {
    function Investor() {
    }
    return Investor;
}());

var InvestorDetails = /** @class */ (function () {
    function InvestorDetails() {
    }
    return InvestorDetails;
}());

//////Classes for Gym Project********************************
var MemberHealthInfo = /** @class */ (function () {
    function MemberHealthInfo() {
    }
    return MemberHealthInfo;
}());

var UserWorkoutDetails = /** @class */ (function () {
    function UserWorkoutDetails() {
    }
    return UserWorkoutDetails;
}());

var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    return Instructor;
}());

var WorkoutType = /** @class */ (function () {
    function WorkoutType() {
    }
    return WorkoutType;
}());

var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());

var AttendenceStatus = /** @class */ (function () {
    function AttendenceStatus() {
    }
    return AttendenceStatus;
}());

var MembershipPlan = /** @class */ (function () {
    function MembershipPlan() {
    }
    return MembershipPlan;
}());

var UserPlanDetails = /** @class */ (function () {
    function UserPlanDetails() {
    }
    return UserPlanDetails;
}());

var ExerciseRoutine = /** @class */ (function () {
    function ExerciseRoutine() {
    }
    return ExerciseRoutine;
}());

var Exercise = /** @class */ (function () {
    function Exercise() {
    }
    return Exercise;
}());

var DietPlan = /** @class */ (function () {
    function DietPlan() {
    }
    return DietPlan;
}());

var DietTable = /** @class */ (function () {
    function DietTable() {
    }
    return DietTable;
}());

var CounsellingAppointment = /** @class */ (function () {
    function CounsellingAppointment() {
    }
    return CounsellingAppointment;
}());

var PaymentHistory = /** @class */ (function () {
    function PaymentHistory() {
    }
    return PaymentHistory;
}());

var Inquiry = /** @class */ (function () {
    function Inquiry() {
    }
    return Inquiry;
}());

var PaymentReceipt = /** @class */ (function () {
    function PaymentReceipt() {
    }
    return PaymentReceipt;
}());

var MainExercise = /** @class */ (function () {
    function MainExercise() {
    }
    return MainExercise;
}());

var SubExercise = /** @class */ (function () {
    function SubExercise() {
    }
    return SubExercise;
}());

// export class SubEx{
//   Id : number;
//   MainExId : number;
//   SubExercise:string;
//   MainExercise:MainExercise
//   CreatedDate :string;
//   CreatedBy : string;
//   UpdatedDate: string;
//   UpdatedBy : string;
// }
//giftshop
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

// *********Dairy Project*********************//
var Distributor = /** @class */ (function () {
    function Distributor() {
    }
    return Distributor;
}());

var Products = /** @class */ (function () {
    function Products() {
    }
    return Products;
}());

var Subscription = /** @class */ (function () {
    function Subscription() {
    }
    return Subscription;
}());

var ProductReview = /** @class */ (function () {
    function ProductReview() {
    }
    return ProductReview;
}());

var ProductOffer = /** @class */ (function () {
    function ProductOffer() {
    }
    return ProductOffer;
}());

var SubCategory = /** @class */ (function () {
    function SubCategory() {
    }
    return SubCategory;
}());

var MainCategory = /** @class */ (function () {
    function MainCategory() {
    }
    return MainCategory;
}());

var ProductInstructions = /** @class */ (function () {
    function ProductInstructions() {
    }
    return ProductInstructions;
}());

var ProductSpecification = /** @class */ (function () {
    function ProductSpecification() {
    }
    return ProductSpecification;
}());

var Registration = /** @class */ (function () {
    function Registration() {
    }
    return Registration;
}());

var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());



/***/ }),

/***/ "WnqM":
/*!****************************************************************!*\
  !*** ./src/app/subscriptionlist/subscriptionlist.component.ts ***!
  \****************************************************************/
/*! exports provided: SubscriptionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionlistComponent", function() { return SubscriptionlistComponent; });
/* harmony import */ var _raw_loader_subscriptionlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./subscriptionlist.component.html */ "h6u5");
/* harmony import */ var _subscriptionlist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptionlist.component.css */ "346J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubscriptionlistComponent = /** @class */ (function () {
    function SubscriptionlistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.SubscriptionList = [];
    }
    SubscriptionlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllSubscription().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.SubscriptionList.push(data);
            }
            console.log(_this.SubscriptionList);
        });
    };
    SubscriptionlistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteSubscription(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.SubscriptionList = _this.SubscriptionList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    SubscriptionlistComponent.prototype.Edit = function (Id) {
        try {
            this.router.navigateByUrl("/update-membership-plan/" + Id);
        }
        catch (error) {
            alert("certi-" + error);
        }
    };
    SubscriptionlistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"] }
    ]; };
    SubscriptionlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-subscriptionlist',
            template: _raw_loader_subscriptionlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_subscriptionlist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"]])
    ], SubscriptionlistComponent);
    return SubscriptionlistComponent;
}());



/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer> -->\n");

/***/ }),

/***/ "YDQV":
/*!***************************************************************!*\
  !*** ./src/app/instructionlist/instructionlist.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc3RydWN0aW9ubGlzdC9pbnN0cnVjdGlvbmxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _maincategory_maincategory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./maincategory/maincategory.component */ "z9tB");
/* harmony import */ var _subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subcategory/subcategory.component */ "oKGB");
/* harmony import */ var _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./distributor/distributor.component */ "AetD");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subscription/subscription.component */ "+XbK");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./orders/orders.component */ "5lyI");
/* harmony import */ var _usersubscriptiondetails_usersubscriptiondetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./usersubscriptiondetails/usersubscriptiondetails.component */ "a4gn");
/* harmony import */ var _updatedistributor_updatedistributor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./updatedistributor/updatedistributor.component */ "xtDZ");
/* harmony import */ var _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./updateproduct/updateproduct.component */ "M5pr");
/* harmony import */ var _updatesubscription_updatesubscription_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./updatesubscription/updatesubscription.component */ "gfx1");
/* harmony import */ var _updateorders_updateorders_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./updateorders/updateorders.component */ "PstH");
/* harmony import */ var _updateusersubscriptiondetails_updateusersubscriptiondetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./updateusersubscriptiondetails/updateusersubscriptiondetails.component */ "3i8z");
/* harmony import */ var _distributorlist_distributorlist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./distributorlist/distributorlist.component */ "ITmw");
/* harmony import */ var _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./productlist/productlist.component */ "aPpE");
/* harmony import */ var _subscriptionlist_subscriptionlist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./subscriptionlist/subscriptionlist.component */ "WnqM");
/* harmony import */ var _orderslist_orderslist_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./orderslist/orderslist.component */ "BY+L");
/* harmony import */ var _usersubscriptiondetailslist_usersubscriptiondetailslist_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./usersubscriptiondetailslist/usersubscriptiondetailslist.component */ "UdSu");
/* harmony import */ var _specification_specification_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./specification/specification.component */ "+7ms");
/* harmony import */ var _specificationlist_specificationlist_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./specificationlist/specificationlist.component */ "BlH5");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./instruction/instruction.component */ "iAtR");
/* harmony import */ var _instructionlist_instructionlist_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./instructionlist/instructionlist.component */ "/wys");
/* harmony import */ var _maincategorylist_maincategorylist_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./maincategorylist/maincategorylist.component */ "A+2X");
/* harmony import */ var _subcategorylist_subcategorylist_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./subcategorylist/subcategorylist.component */ "MOtD");
/* harmony import */ var _offer_offer_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./offer/offer.component */ "RHET");
/* harmony import */ var _offerlist_offerlist_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./offerlist/offerlist.component */ "673O");
/* harmony import */ var _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./registration-list/registration-list.component */ "poGh");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// 
























// 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"],
                _maincategory_maincategory_component__WEBPACK_IMPORTED_MODULE_15__["MaincategoryComponent"],
                _subcategory_subcategory_component__WEBPACK_IMPORTED_MODULE_16__["SubcategoryComponent"],
                _distributor_distributor_component__WEBPACK_IMPORTED_MODULE_17__["DistributorComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_18__["ProductComponent"],
                _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_19__["SubscriptionComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_20__["OrdersComponent"],
                _usersubscriptiondetails_usersubscriptiondetails_component__WEBPACK_IMPORTED_MODULE_21__["UsersubscriptiondetailsComponent"],
                _updatedistributor_updatedistributor_component__WEBPACK_IMPORTED_MODULE_22__["UpdatedistributorComponent"],
                _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_23__["UpdateproductComponent"],
                _updatesubscription_updatesubscription_component__WEBPACK_IMPORTED_MODULE_24__["UpdatesubscriptionComponent"],
                _updateorders_updateorders_component__WEBPACK_IMPORTED_MODULE_25__["UpdateordersComponent"],
                _updateusersubscriptiondetails_updateusersubscriptiondetails_component__WEBPACK_IMPORTED_MODULE_26__["UpdateusersubscriptiondetailsComponent"],
                _distributorlist_distributorlist_component__WEBPACK_IMPORTED_MODULE_27__["DistributorlistComponent"],
                _productlist_productlist_component__WEBPACK_IMPORTED_MODULE_28__["ProductlistComponent"],
                _subscriptionlist_subscriptionlist_component__WEBPACK_IMPORTED_MODULE_29__["SubscriptionlistComponent"],
                _orderslist_orderslist_component__WEBPACK_IMPORTED_MODULE_30__["OrderslistComponent"],
                _usersubscriptiondetailslist_usersubscriptiondetailslist_component__WEBPACK_IMPORTED_MODULE_31__["UsersubscriptiondetailslistComponent"],
                _specification_specification_component__WEBPACK_IMPORTED_MODULE_32__["SpecificationComponent"],
                _specificationlist_specificationlist_component__WEBPACK_IMPORTED_MODULE_33__["SpecificationlistComponent"],
                _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_34__["InstructionComponent"],
                _instructionlist_instructionlist_component__WEBPACK_IMPORTED_MODULE_35__["InstructionlistComponent"],
                _maincategorylist_maincategorylist_component__WEBPACK_IMPORTED_MODULE_36__["MaincategorylistComponent"],
                _subcategorylist_subcategorylist_component__WEBPACK_IMPORTED_MODULE_37__["SubcategorylistComponent"],
                _offer_offer_component__WEBPACK_IMPORTED_MODULE_38__["OfferComponent"],
                _offerlist_offerlist_component__WEBPACK_IMPORTED_MODULE_39__["OfferlistComponent"],
                _registration_list_registration_list_component__WEBPACK_IMPORTED_MODULE_40__["RegistrationListComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZS2r":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instruction/instruction.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\"style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <form #InstructionsForm=\"ngForm\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Product Instructions </h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n\n                           \n                                \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"InstructionTitle \" [(ngModel)]=\"productInstructions.InstructionTitle\" #InstructionTitleControl=\"ngModel\" name=\"InstructionTitle\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                    event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"ProductInstr1\" [(ngModel)]=\"productInstructions.ProductInstr1\" #ProductInstr1=\"ngModel\" name=\"ProductInstr1\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"ProductInstr2\" [(ngModel)]=\"productInstructions.ProductInstr2\" #ProductInstr2=\"ngModel\" name=\"ProductInstr2\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"ProductInstr3\" [(ngModel)]=\"productInstructions.ProductInstr3\" #ProductInstr3=\"ngModel\" name=\"ProductInstr3\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"ProductInstr4\" [(ngModel)]=\"productInstructions.ProductInstr4\" #ProductInstr4=\"ngModel\" name=\"ProductInstr4\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"ProductInstr5\" [(ngModel)]=\"productInstructions.ProductInstr5\" #ProductInstr5=\"ngModel\" name=\"ProductInstr5\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"ProductInstr6\" [(ngModel)]=\"productInstructions.ProductInstr6\" #ProductInstr6=\"ngModel\" name=\"ProductInstr6\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                             \n\n\n                              \n                            </div>\n                            <div class=\"row\"style=\"margin:auto\">\n                                <div class=\"col-md-5\"></div>\n\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"InstructionsForm.invalid\" (click)=\"OnSubmit()\">Submit</button>\n                                <div class=\"clearfix\"></div>\n\n                                <div class=\"col-md-2\"></div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "a4gn":
/*!******************************************************************************!*\
  !*** ./src/app/usersubscriptiondetails/usersubscriptiondetails.component.ts ***!
  \******************************************************************************/
/*! exports provided: UsersubscriptiondetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersubscriptiondetailsComponent", function() { return UsersubscriptiondetailsComponent; });
/* harmony import */ var _raw_loader_usersubscriptiondetails_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./usersubscriptiondetails.component.html */ "9kOJ");
/* harmony import */ var _usersubscriptiondetails_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersubscriptiondetails.component.css */ "d7FR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersubscriptiondetailsComponent = /** @class */ (function () {
    function UsersubscriptiondetailsComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.userPlanDetails = new _Classes__WEBPACK_IMPORTED_MODULE_6__["UserPlanDetails"]();
        this.userPlanDetails.Member = new _Classes__WEBPACK_IMPORTED_MODULE_6__["Member"]();
        this.userPlanDetails.MembershipPlan = new _Classes__WEBPACK_IMPORTED_MODULE_6__["MembershipPlan"]();
        this.UserNames = [];
        this.userPlanDetailslist = [];
        this.MembershipPlans = [];
    }
    UsersubscriptiondetailsComponent.prototype.UserChange = function (event) {
        console.log('UserId:', event.target.value);
        this.userPlanDetails.Member.Id = event.target.value;
    };
    UsersubscriptiondetailsComponent.prototype.getAllMember = function () {
        var _this = this;
        this.service.GetAllMember().subscribe(function (result) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.UserNames.push(data);
            }
            console.log("UserName" + _this.UserNames);
        });
    };
    UsersubscriptiondetailsComponent.prototype.planChange = function (event) {
        console.log('UserId:', event.target.value);
        this.userPlanDetails.MembershipPlan.Id = event.target.value;
    };
    UsersubscriptiondetailsComponent.prototype.getAllMembershipPlan = function () {
        var _this = this;
        this.service.GetAllMembershipPlan().subscribe(function (result) {
            for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
                var data = result_2[_i];
                _this.MembershipPlans.push(data);
            }
            console.log("Plan" + _this.MembershipPlans);
        });
    };
    UsersubscriptiondetailsComponent.prototype.OnSubmit = function () {
        console.log(this.userPlanDetails);
        this.service.AddUserPlanDetails(this.userPlanDetails).subscribe(function (result) {
            if (result == "Success") {
                alert("Saved Successfully");
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    UsersubscriptiondetailsComponent.prototype.ngOnInit = function () {
        this.getAllMember();
        this.getAllMembershipPlan();
    };
    UsersubscriptiondetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    UsersubscriptiondetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-usersubscriptiondetails',
            template: _raw_loader_usersubscriptiondetails_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_usersubscriptiondetails_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], UsersubscriptiondetailsComponent);
    return UsersubscriptiondetailsComponent;
}());



/***/ }),

/***/ "aPpE":
/*!******************************************************!*\
  !*** ./src/app/productlist/productlist.component.ts ***!
  \******************************************************/
/*! exports provided: ProductlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductlistComponent", function() { return ProductlistComponent; });
/* harmony import */ var _raw_loader_productlist_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./productlist.component.html */ "KJsa");
/* harmony import */ var _productlist_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productlist.component.css */ "FvAq");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Globals */ "8XPr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductlistComponent = /** @class */ (function () {
    function ProductlistComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.imgPath = _Globals__WEBPACK_IMPORTED_MODULE_6__["GlobalVariable"].BASE_API_URL;
        this.ProductList = [];
        // this.distributorList=[];
    }
    ProductlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllProducts().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.ProductList.push(data);
            }
            console.log(_this.ProductList);
        });
    };
    //Search
    ProductlistComponent.prototype.Serach = function () {
        //  this.service.GetAllInstructor().subscribe((result) => {
        //    for (let data of result) {
        //      this.instructorList.push(data);  
        //    }
        //  this.instructorList = this.instructorList.filter(x => x.FirstName.toLowerCase().includes(this.SearchText.toLowerCase()));
        //});
    };
    //  Reset(){
    //    this.ProductList = [];
    //    this.service.GetAllInstructor().subscribe((result) => {
    //      for (let data of result) {
    //        this.ProductList.push(data);
    //      }
    //    });
    //  }
    ProductlistComponent.prototype.View = function () {
    };
    ProductlistComponent.prototype.Delete = function (Id) {
        var _this = this;
        alert('Are you sure you want to delete?');
        this.service.DeleteProducts(Id).subscribe(function (result) {
            if (result == "Success") {
                _this.ProductList = _this.ProductList.filter(function (item) { return item.Id != Id; });
                alert("Deleted Successfully");
            }
            else {
                alert("Somthing went wrong! please try again.");
            }
        });
    };
    ProductlistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"] }
    ]; };
    ProductlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-productlist',
            template: _raw_loader_productlist_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_productlist_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["WebServiceService"]])
    ], ProductlistComponent);
    return ProductlistComponent;
}());



/***/ }),

/***/ "bLWZ":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specificationlist/specificationlist.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>specificationlist works!</p>\n<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Product List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                         <th>Id</th> \n                                                        <th>SpecificationTitle</th>\n                                                        <!-- <th>DOB</th> -->\n                                                        <th>ServingSize</th>\n                                                        <th>AmountPer</th>\n                                                        <!-- <th>Email</th> -->\n                                                        <th>Energy</th>\n                                                        <th> TotalFat</th>\n                                                        <th>SaturatedFat</th>\n                                                        <th>Carbohydrate</th>\n                                                        <th>Protein</th>\n                                                        <th>Calcium</th>\n                                                        <th>Sodium</th>\n                                                        <th>Sugar</th>\n                                                        <th>AddedSugar</th>\n                                                        <th>Packing</th>\n                                                         <th>PackingDate</th>\n                                                         <th>BestBeforeDays</th>\n                                                         <th>OtherNutritions</th>\n                                                         <th>Storagetemp</th>\n                                                         \n\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of ProductSpecificationList\">\n                                                       \n                                                        <td>{{i.Id}} </td>\n                                                        <td>{{i.SpecificationTitle }}</td>\n                                                        <td>{{i.ServingSize }}</td>\n                                                        <td>{{i.AmountPer }}</td>\n                                                        <td>{{i.Energy}}</td>\n                                                         <td>{{i.TotalFat}}</td> \n                                                        <td>{{i.SaturatedFat}}</td>\n                                                        <td>{{i.Carbohydrate}}</td>\n                                                        <td>{{i.Protein}}</td>\n                                                        <td>{{i.Calcium}}</td>\n                                                        <td>{{i.Sodium}}</td>\n                                                        <td>{{i.Sugar}}</td>\n                                                        <td>{{i.AddedSugar}}</td>\n                                                      \n                                                        <td>{{i.Packing}}</td>\n                                                        <td>{{i.PackagingDate}}</td>\n                                                        <td>{{i.BestBeforeDays}}</td>\n                                                        <td>{{i.OtherNutritions}}</td>\n\n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> \n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'Admin-Login',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: false,
                    relativeLinkResolution: 'legacy'
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "cNGd":
/*!*******************************************************!*\
  !*** ./src/app/distributor/distributor.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3RyaWJ1dG9yL2Rpc3RyaWJ1dG9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "d7FR":
/*!*******************************************************************************!*\
  !*** ./src/app/usersubscriptiondetails/usersubscriptiondetails.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzdWJzY3JpcHRpb25kZXRhaWxzL3VzZXJzdWJzY3JpcHRpb25kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "dV5f":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maincategorylist/maincategorylist.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Distributor List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                        <th>CategoryId</th> \n                                                         <th>CategoryName</th> \n                                                        <th>CategoryDescription</th>\n                                                        <th>MainCategoryImage1</th>\n                                                        <th>MainCategoryImage1</th>\n                                                        \n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of maincategoryList\">\n                                                       \n                                                        <td>{{i.Id}}</td>\n                                                        <td>{{i.CategoryName}}</td>\n                                                        <td>{{i.CategoryDescription}}</td>\n                                                        <td>{{i.MainCategoryImage1}}</td>\n                                                      \n                                                        <td>{{i.MainCategoryImage2}}</td>\n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i><br>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> <br>\n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "ez78":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\"></div>\n\n                    <div class=\"col-md-8\"style=\"padding-top:13px\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-danger\">\n                                <h4 class=\"card-title\">Product</h4>\n                                <!-- <p class=\"card-category\">Complete your profile</p> -->\n                            </div>\n                            <div class=\"card-body\">\n                                <form #productsForm=\"ngForm\">\n\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Product Name\" [(ngModel)]=\"products.ProductName\" #ProductNameControl=\"ngModel\" name=\"ProductName\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput placeholder=\"Product Description\" [(ngModel)]=\"products.ProductDescription\" #AddressControl=\"ngModel\" name=\"ProductDescription\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Product Caption\" [(ngModel)]=\"products.ProductCaption\" #ProductCaptionControl=\"ngModel\" name=\"ProductCaption\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Product Company\" [(ngModel)]=\"products.ProductCompany\" #ProductCompanyControl=\"ngModel\" name=\"ProductCompany\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Product Quantity per Unit\" [(ngModel)]=\"products.ProdQuantityPerUnit\" #ProdQuantityPerUnitControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"ProdQuantityPerUnit\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" ProdQuantityPerUnitControl.touched && ProdQuantityPerUnitControl.errors?.pattern \">ProductQuantityPerUnit is invalid</div>\n                                        </div>\n                                        \n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Product Price per Unit\" [(ngModel)]=\"products.ProductPricePerUnit\" #ProductPricePerUnitControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"ProductPricePerUnit\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" ProductPricePerUnitControl.touched && ProductPricePerUnitControl.errors?.pattern \">ProductPricePerUnit is invalid</div>\n                                        </div>\n\n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Product Discount\" [(ngModel)]=\"products.ProductDiscount\" #ProductDiscountControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"ProductDiscount\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" ProductDiscountControl.touched && ProductDiscountControl.errors?.pattern \">ProductDiscount is invalid</div>\n                                        </div>\n\n                                   \n                                   \n                                      \n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"ProductUnitInStock\" [(ngModel)]=\"products.ProductUnitInStock\" #ProductUnitInStockControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"ProductUnitInStock\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" ProductUnitInStockControl.touched && ProductUnitInStockControl.errors?.pattern \">ProductUnitInStock is invalid</div>\n                                        </div>\n                                        \n\n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"ProductUnitInOrder\" [(ngModel)]=\"products.ProductUnitInOrder\" #ProductUnitInOrderControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"ProductUnitInOrder\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\"ProductUnitInOrderControl.touched && ProductUnitInOrderControl.errors?.pattern \">ProductUnitInOrder is invalid</div>\n                                        </div>\n                                       \n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"ProductUnitWeight\" [(ngModel)]=\"products.ProductUnitWeight\" #ProductUnitWeightControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"ProductUnitWeight\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\"ProductUnitWeightControl.touched && ProductUnitWeightControl.errors?.pattern \">ProductUnitWeight is invalid</div>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"ProductAvailableSize\" [(ngModel)]=\"products.ProductAvailableSize\" #ProductAvailableSizeControl=\"ngModel\" name=\"ProductAvailableSize\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">ProductInstructionId</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"ProductInstructionId\" [(ngModel)]=products.ProductInstructionId #ProductInstructionId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Instruction of Instructionlist\" [value]=\"Instruction.Id\">\n                                                        {{Instruction.Name}} </option>\n                                                        <option [value]=\"2\">2</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">ProductSpecificationId</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"ProductSpecificationId\" [(ngModel)]=products.ProductSpecificationId #ProductSpecificationId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Specification of Specificationlist\" [value]=\"Specification.Id\">\n                                                        {{Specification.Name}} </option>\n                                                        <option [value]=\"2\">2</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">ProductStatus</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"ProductStatus\" [(ngModel)]=products.ProductStatus #ProductStatus=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <!-- <option *ngFor=\"let Specification of Specificationlist\" [value]=\"Specification.Id\">\n                                                        {{ProductStatus.Name}} </option> -->\n                                                        <option [value]=\"1\">Active</option>\n                                                        <option [value]=\"2\">InActive</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        \n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">ProductStockStatus</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"ProductStockStatus\" [(ngModel)]=products.ProductStockStatus #ProductStockStatus=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <!-- <option *ngFor=\"let Specification of Specificationlist\" [value]=\"Specification.Id\">\n                                                        {{ProductStatus.Name}} </option> -->\n                                                        <option [value]=\"2\">2</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">CategoryId</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"CategoryId\" [(ngModel)]=products.CategoryId #CategoryId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Category of Categorylist\" [value]=\"Category.Id\">\n                                                        {{Category.Name}} </option>\n                                                        <option [value]=\"2\">2</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">Distributor</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"DistributorId\" [(ngModel)]=products.DistributorId #DistributorId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Distributor of Distributorlist\" [value]=\"Distributor.Id\">\n                                                        {{Distributor.Name}} </option>\n                                                        <option [value]=\"2\">2</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        \n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">OfferId</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"OfferId\" [(ngModel)]=products.OfferId #OfferId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Offer of Offerlist\" [value]=\"Distributor.Id\">\n                                                        {{Offer.Name}} </option>\n                                                        <option [value]=\"2\">2</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">ReviewId</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"ReviewId\" [(ngModel)]=products.ReviewId #ReviewId=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Review of ReviewIlist\" [value]=\"Review.Id\">\n                                                        {{Review.Name}} </option>\n                                                        <option [value]=\"2\">2</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-4\">\n                                            <label for=\"avatar\">Upload Photo 1:</label>\n\n                                            <input type=\"file\" [(ngModel)]=\"products.ProductImage1\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"ProductImage1\" accept=\"image/png, image/jpeg\" required>\n\n                                        </div> \n\n                                        <div class=\"col-md-4\">\n                                            <label for=\"avatar\">Upload Photo 2:</label>\n\n                                            <input type=\"file\" [(ngModel)]=\"products.ProductImage2\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"ProductImage2\" accept=\"image/png, image/jpeg\" required>\n\n                                        </div> \n                                        <div class=\"col-md-4\">\n                                            <label for=\"avatar\">Upload Photo 3:</label>\n\n                                            <input type=\"file\" [(ngModel)]=\"products.ProductImage3\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"ProductImage3\" accept=\"image/png, image/jpeg\" required>\n\n                                        </div> \n\n<!--  -->\n\n\n                                        <!-- <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Name\" [(ngModel)]=\"distributor.Name\" #NameControl=\"ngModel\" name=\"Name\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput placeholder=\"Address\" [(ngModel)]=\"distributor.Address\" #AddressControl=\"ngModel\" name=\"Address\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">Country</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.Country #Country=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Country of distributorlist\" [value]=\"Country.Id\">\n                                                        {{Country.Name}} </option>\n                                                        <option>OMd</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">State</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.State #State=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let State of distributorlist\" [value]=\"State.Id\">\n                                                        {{State.Name}} </option>\n                                                        <option>OMm</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">City</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"City\" [(ngModel)]=distributor.City #City=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let State of distributorlist\" [value]=\"City.Id\">\n                                                        {{City.Name}} </option>\n                                                    <option>OM</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Email ID\" [(ngModel)]=\"distributor.Email\" #EmailControl=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" name=\"Email\" type=\"email\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" EmailControl.errors?.pattern && EmailControl.touched \">Email is invalid</div>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"distributor.Mobile\" #MobileControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"Mobile\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" MobileControl.touched && MobileControl.errors?.pattern \">Mobile number is invalid</div>\n                                        </div>\n                                       \n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"PostalCode Number\" [(ngModel)]=\"distributor.PostalCode\" #PostalCodeControl=\"ngModel\" onKeyPress=\"if(this.value.length==6) return false;\" name=\"PostalCode\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" PostalCodeControl.touched && PostalCodeControl.errors?.pattern \">PostalCode number is invalid</div>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Start Date\" [(ngModel)]=\"distributor.StartDate\" #StartDate=\"ngModel\" type=\"date\" name=\"StartDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"End Date\" [(ngModel)]=\"distributor.EndDate\" #EndDate=\"ngModel\" type=\"date\" name=\"EndDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <label for=\"avatar\">Upload Photo:</label>\n\n                                            <input type=\"file\" [(ngModel)]=\"distributor.Photo\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"Photo\" accept=\"image/png, image/jpeg\" required>\n\n                                        </div> -->\n                                        <!-- <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">Country</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.Country.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Country of CountryList\" [value]=\"Country.Id\">\n                                                        {{Country.Name}} </option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">State</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"State\" [(ngModel)]=distributor.State.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let State of StateList\" [value]=\"State.Id\">\n                                                        {{State.Name}} </option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">City</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"City\" [(ngModel)]=distributor.City.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let City of Citylist\" [value]=\"City.Id\">\n                                                        {{City.Name}} </option>\n                                                </select>\n                                            </div>\n        \n                                        </div> -->\n\n                                        <!-- <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"DOB\" [(ngModel)]=\"instructor.DOB\" #DOBControl=\"ngModel\" type=\"date\" name=\"DOB\" required>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Salary\" [(ngModel)]=\"instructor.Salary\" #SalaryControl=\"ngModel\" type=\"number\" name=\"Salary\" required>\n                                            </mat-form-field>\n                                        </div>\n\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Email ID\" [(ngModel)]=\"instructor.Email\" #EmailControl=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" name=\"Email\" type=\"email\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" EmailControl.errors?.pattern && EmailControl.touched \">Email is invalid</div>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"instructor.Mobile\" #MobileControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"Mobile\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" MobileControl.touched && MobileControl.errors?.pattern \">Mobile number is invalid</div>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput placeholder=\"Address\" [(ngModel)]=\"instructor.Address\" #AddressControl=\"ngModel\" name=\"Address\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput placeholder=\"Professional Details\" [(ngModel)]=\"instructor.ProfessionalDetails\" #ProfessionalDetailsControl=\"ngModel\" name=\"ProfessionalDetails\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Experience\" [(ngModel)]=\"instructor.Experience\" #ExperienceControl=\"ngModel\" name=\"Experience\" class=\"example-full-width\" type=\"text\" required>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Thumb Id\" [(ngModel)]=\"instructor.ThumbId\" #ThumbIdControl=\"ngModel\" name=\"ThumbId\" class=\"example-full-width\" type=\"number\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Joining Date\" [(ngModel)]=\"instructor.JoiningDate\" #JoiningDate=\"ngModel\" type=\"date\" name=\"JoiningDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Date Of Resign\" [(ngModel)]=\"instructor.DateOfResign\" #DateOfResign=\"ngModel\" type=\"date\" name=\"DateOfResign\" required>\n                                            </mat-form-field>\n                                        </div>\n                                       \n                                        <div class=\"col-md-12\">\n                                            <label for=\"avatar\">Upload Photo:</label>\n\n                                            <input type=\"file\" [(ngModel)]=\"instructor.Photo\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"Photo\" accept=\"image/png, image/jpeg\" required>\n\n                                        </div> -->\n\n\n                                    </div>\n                                    <br>\n\n                                    <div class=\"row\"style=\"margin:auto\">\n                                        <div class=\"col-md-5\"></div>\n\n                                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"productsForm.invalid\" (click)=\"OnSubmit()\">Save</button>\n\n                                        <div class=\"col-md-2\"></div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-2\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "fLrl":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updateorders/updateorders.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>updateorders works!</p>\n");

/***/ }),

/***/ "g+vU":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instructionlist/instructionlist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Distributor List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                        <th>Id</th>\n                                                        <th>InstructionTitle</th> \n                                                         <th>ProductInstr1</th> \n                                                        <th>ProductInstr2</th>\n                                                        <th>ProductInstr3</th>\n                                                        <th>ProductInstr4</th>\n                                                        <th>ProductInstr5</th>\n                                                        <th>ProductInstr6</th>                           \n                                                       \n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of InstructionList\">\n                                                         <!-- <td>\n                                                            <img src=\"{{imgPath}}Distributor/{{i.Photo}}\" style=\"height: 80px;width: 80px;\">\n                                                        </td> \n                                                        -->\n                                                        <td>{{i.Id}}</td>\n                                                        <td>{{i.InstructionTitle}}</td>\n                                                        <td>{{i.ProductInstr1}}</td>\n                                                        <td>{{i.ProductInstr2}}</td>\n                                                        <td>{{i.ProductInstr3}}</td>\n                                                      \n                                                        <td>{{i.ProductInstr4}}</td>\n                                                        <td>{{i.ProductInstr5}}</td>\n                                                        <td>{{i.ProductInstr6}}</td>\n                                                       \n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i><br>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> <br>\n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "gZbb":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updatesubscription/updatesubscription.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>updatesubscription works!</p>\n");

/***/ }),

/***/ "gfx1":
/*!********************************************************************!*\
  !*** ./src/app/updatesubscription/updatesubscription.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdatesubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesubscriptionComponent", function() { return UpdatesubscriptionComponent; });
/* harmony import */ var _raw_loader_updatesubscription_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./updatesubscription.component.html */ "gZbb");
/* harmony import */ var _updatesubscription_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatesubscription.component.css */ "1qpf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatesubscriptionComponent = /** @class */ (function () {
    function UpdatesubscriptionComponent() {
    }
    UpdatesubscriptionComponent.prototype.ngOnInit = function () {
    };
    UpdatesubscriptionComponent.ctorParameters = function () { return []; };
    UpdatesubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-updatesubscription',
            template: _raw_loader_updatesubscription_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_updatesubscription_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UpdatesubscriptionComponent);
    return UpdatesubscriptionComponent;
}());



/***/ }),

/***/ "h6u5":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subscriptionlist/subscriptionlist.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>membership-plan-list works!</p>\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\" style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Subscription List </h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n\n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                        <!-- <th>Id</th> -->\n\n                                                        <th>Id</th>\n                                                        <th>SubscriptionTitle</th>\n                                                        <th>SubscriptionDescription</th>\n                                                        <!-- <th>ValidTill</th> -->\n                                                        <th>Discount</th>\n                                                        <th>Remarks</th>\n                                                        <th>Action</th>\n\n\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of SubscriptionList\">\n                                                        <!-- <td>{{i.Id}}</td> -->\n                                                        <td>{{i.Id}}</td>\n                                                        <td>{{i.SubscriptionTitle}}</td>\n                                                        <td>{{i.SubscriptionDescription}}</td>\n                                                        <!-- <td>{{i.ValidTill}}</td> -->\n                                                        <td>{{i.Discount}}</td>\n                                                        <!-- <td>{{i.Remarks}}</td> -->\n                                                        <td>\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\" style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 15px;\" aria-hidden=\"true\"></i>\n                                                            <i class=\"fa fa-trash\" (click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px;\" aria-hidden=\"true\"></i>\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
        if (window.location.href == "http://jobadmin.cyberscriptit.com/Admin-Login") {
            this.isVisible = true;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
        //   return window.location.href ;
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "iAtR":
/*!******************************************************!*\
  !*** ./src/app/instruction/instruction.component.ts ***!
  \******************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var _raw_loader_instruction_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./instruction.component.html */ "ZS2r");
/* harmony import */ var _instruction_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instruction.component.css */ "43Ku");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InstructionComponent = /** @class */ (function () {
    function InstructionComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        this.productInstructions = new _Classes__WEBPACK_IMPORTED_MODULE_6__["ProductInstructions"]();
        this.productInstructionslist = [];
    }
    InstructionComponent.prototype.OnSubmit = function () {
        console.log(this.productInstructions);
        this.service.AddProductInstructions(this.productInstructions).subscribe(function (result) {
            if (result == "Success") {
                alert("Something went wrong! Please try again.");
            }
            else {
                alert("Saved Successfully");
            }
        });
    };
    InstructionComponent.prototype.ngOnInit = function () {
    };
    InstructionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    InstructionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-instruction',
            template: _raw_loader_instruction_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_instruction_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], InstructionComponent);
    return InstructionComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

;


/***/ }),

/***/ "kGYa":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distributor/distributor.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\"></div>\n\n                    <div class=\"col-md-8\"style=\"padding-top:13px\">\n                        <div class=\"card\">\n                            <div class=\"card-header card-header-danger\">\n                                <h4 class=\"card-title\">Distributor</h4>\n                                <!-- <p class=\"card-category\">Complete your profile</p> -->\n                            </div>\n                            <div class=\"card-body\">\n                                <form #distributorForm=\"ngForm\">\n\n                                    <div class=\"row\">\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Buisness Name\" [(ngModel)]=\"distributor.BuisnessName\" #BuisnessNameControl=\"ngModel\" name=\"BuisnessName\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Name\" [(ngModel)]=\"distributor.Name\" #NameControl=\"ngModel\" name=\"Name\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                            event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput placeholder=\"Address\" [(ngModel)]=\"distributor.Address\" #AddressControl=\"ngModel\" name=\"Address\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">Country</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.Country #Country=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Country of distributorlist\" [value]=\"Country.Id\">\n                                                        {{Country.Name}} </option>\n                                                        <option [value]=\"1\">India</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">State</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.State #State=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let State of distributorlist\" [value]=\"State.Id\">\n                                                        {{State.Name}} </option>\n                                                        <option [value]=\"1\">Maharashtra</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">City</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"City\" [(ngModel)]=distributor.City #City=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let State of distributorlist\" [value]=\"City.Id\">\n                                                        {{City.Name}} </option>\n                                                    <option [value]=\"1\">Pune</option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Email ID\" [(ngModel)]=\"distributor.Email\" #EmailControl=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" name=\"Email\" type=\"email\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" EmailControl.errors?.pattern && EmailControl.touched \">Email is invalid</div>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"distributor.Mobile\" #MobileControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"Mobile\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" MobileControl.touched && MobileControl.errors?.pattern \">Mobile number is invalid</div>\n                                        </div>\n                                       \n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"PostalCode Number\" [(ngModel)]=\"distributor.PostalCode\" #PostalCodeControl=\"ngModel\" onKeyPress=\"if(this.value.length==6) return false;\" name=\"PostalCode\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" PostalCodeControl.touched && PostalCodeControl.errors?.pattern \">PostalCode number is invalid</div>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Start Date\" [(ngModel)]=\"distributor.StartDate\" #StartDate=\"ngModel\" type=\"date\" name=\"StartDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"End Date\" [(ngModel)]=\"distributor.EndDate\" #EndDate=\"ngModel\" type=\"date\" name=\"EndDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <label for=\"avatar\">Upload Photo:</label>\n\n                                            <input type=\"file\" [(ngModel)]=\"distributor.Photo\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"Photo\" accept=\"image/png, image/jpeg\" required>\n\n                                        </div>\n                                        <!-- <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">Country</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"Country\" [(ngModel)]=distributor.Country.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let Country of CountryList\" [value]=\"Country.Id\">\n                                                        {{Country.Name}} </option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">State</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"State\" [(ngModel)]=distributor.State.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let State of StateList\" [value]=\"State.Id\">\n                                                        {{State.Name}} </option>\n                                                </select>\n                                            </div>\n        \n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <div class=\"form-group pmd-textfield pmd-textfield-floating-label example-full-width\">\n                                                <label for=\"propeller-select\">City</label>\n                                                <select id=\"propeller-select\" class=\"form-control\" name=\"City\" [(ngModel)]=distributor.City.Id #Id=\"ngModel\" (change)=\"MainExeChange($event)\">\n                                                    <option *ngFor=\"let City of Citylist\" [value]=\"City.Id\">\n                                                        {{City.Name}} </option>\n                                                </select>\n                                            </div>\n        \n                                        </div> -->\n\n                                        <!-- <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"DOB\" [(ngModel)]=\"instructor.DOB\" #DOBControl=\"ngModel\" type=\"date\" name=\"DOB\" required>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Salary\" [(ngModel)]=\"instructor.Salary\" #SalaryControl=\"ngModel\" type=\"number\" name=\"Salary\" required>\n                                            </mat-form-field>\n                                        </div>\n\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Email ID\" [(ngModel)]=\"instructor.Email\" #EmailControl=\"ngModel\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" name=\"Email\" type=\"email\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" EmailControl.errors?.pattern && EmailControl.touched \">Email is invalid</div>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Mobile Number\" [(ngModel)]=\"instructor.Mobile\" #MobileControl=\"ngModel\" onKeyPress=\"if(this.value.length==10) return false;\" name=\"Mobile\" type=\"number\" required>\n                                            </mat-form-field>\n                                            <div class=\"help-block\" *ngIf=\" MobileControl.touched && MobileControl.errors?.pattern \">Mobile number is invalid</div>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput placeholder=\"Address\" [(ngModel)]=\"instructor.Address\" #AddressControl=\"ngModel\" name=\"Address\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput placeholder=\"Professional Details\" [(ngModel)]=\"instructor.ProfessionalDetails\" #ProfessionalDetailsControl=\"ngModel\" name=\"ProfessionalDetails\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Experience\" [(ngModel)]=\"instructor.Experience\" #ExperienceControl=\"ngModel\" name=\"Experience\" class=\"example-full-width\" type=\"text\" required>\n                                            </mat-form-field>\n                                        </div>\n\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Thumb Id\" [(ngModel)]=\"instructor.ThumbId\" #ThumbIdControl=\"ngModel\" name=\"ThumbId\" class=\"example-full-width\" type=\"number\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Joining Date\" [(ngModel)]=\"instructor.JoiningDate\" #JoiningDate=\"ngModel\" type=\"date\" name=\"JoiningDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Date Of Resign\" [(ngModel)]=\"instructor.DateOfResign\" #DateOfResign=\"ngModel\" type=\"date\" name=\"DateOfResign\" required>\n                                            </mat-form-field>\n                                        </div>\n                                       \n                                        <div class=\"col-md-12\">\n                                            <label for=\"avatar\">Upload Photo:</label>\n\n                                            <input type=\"file\" [(ngModel)]=\"instructor.Photo\"  (change)=\"fileChangeEvent($event)\" #PhotoControl=\"ngModel\" id=\"avatar\" name=\"Photo\" accept=\"image/png, image/jpeg\" required>\n\n                                        </div> -->\n\n\n                                    </div>\n\n                                    <div class=\"row\"style=\"margin:auto\">\n                                        <div class=\"col-md-5\"></div>\n\n                                        <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"distributorForm.invalid\" (click)=\"OnSubmit()\">Save</button>\n\n                                        <div class=\"col-md-2\"></div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-md-2\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "lcLV":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usersubscriptiondetailslist/usersubscriptiondetailslist.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>user-plan-detail-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:20px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">User Subscription Detail List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n                        <form #orgTypeForm=\"ngForm\">\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                  <div class=\"col-md-6\">\n                                      <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"From Date\" [(ngModel)]=\"StartDate1\" #StartDate=\"ngModel\" type=\"date\" name=\"StartDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"To Date\" [(ngModel)]=\"EndDate1\" #EndDate=\"ngModel\" type=\"date\" name=\"EndDate\" required>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <button type=\"submit\" class=\" btn btn-success serchlist\" (click)=\"Select()\">Select</button>\n                                        </div>\n                                      </div>\n                                     <div class=\"row\">\n                                         <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by User Name ...\" [(ngModel)]=\"SearchText\" class=\"form-control\" >\n                                           \n                                         </div>\n                                         <div class=\"col-md-3\">\n                                            <button type=\"submit\" class=\"btn btn-success   serchlist\" (click)=\"Serach()\">SEARCH</button>\n                                        </div>\n                                         <div class=\"col-md-3\">\n                                            <button type=\"submit\" class=\"btn btn-success     fw-btn-fill btn-gradient-yellow\" (click)=\"Reset()\">RESET</button>\n                                        </div>\n                                     </div>\n                                  </div>\n                                    <div class=\"col-md-6\">\n                                    </div>\n                                </div>\n                            </div>\n    \n\n\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                <div class=\"col-md-12\">\n                                  \n                                    <div class=\"table-responsive\">\n                                        <table class=\"table table-bordered\">\n                                            <thead class=\"thh\">\n                                                <tr class=\"titlecolor\">\n                                                    <!-- <th>Id</th> -->\n                                                    <th>Member ID</th>\n                                                    <th>Member Name</th>\n                                                    <th>Plan Detail</th>\n                                                    <th>Price</th>\n                                                    <th>Duration</th>\n                                                    <th>Start Date</th>\n                                                    <th>End Date</th>\n                                                    <th>Status</th>\n                                                    <th>Payment</th>\n                                                    <th>Action</th>\n                                                    <!-- <th>Delete</th> -->\n\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let i of userPlanDetailList\">\n                                                    <!-- <td>{{i.Id}}</td> -->\n                                                    <td>{{i.Member.Id}}</td>\n                                                    <td>{{i.Member.UserName}}</td>\n                                                    <td>{{i.MembershipPlan.Title}}</td>\n                                                    <td>{{i.MembershipPlan.Price}}</td>\n                                                    <td>{{i.MembershipPlan.Period}}</td>\n                                                    <td>{{i.StartDate}}</td>\n                                                    <td>{{i.EndDate}}</td>\n                                                    <td>{{i.Status}}</td>\n                                                    <td (click)=\"Payment(i.Member.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-inr\" aria-hidden=\"true\" ></i> <span class=\"pay\">Payment</span></td>\n\n                                                    <td ><i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 15px;\"  aria-hidden=\"true\" ></i> \n                                                        <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px;\"   aria-hidden=\"true\" ></i></td> \n\n                                                    <!-- <td (click)=\"Edit(i.Member.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                    <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "ljPE":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/updateusersubscriptiondetails/updateusersubscriptiondetails.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>updateusersubscriptiondetails works!</p>\n");

/***/ }),

/***/ "nsxD":
/*!*********************************************************!*\
  !*** ./src/app/subscription/subscription.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "oKGB":
/*!******************************************************!*\
  !*** ./src/app/subcategory/subcategory.component.ts ***!
  \******************************************************/
/*! exports provided: SubcategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcategoryComponent", function() { return SubcategoryComponent; });
/* harmony import */ var _raw_loader_subcategory_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./subcategory.component.html */ "7Dvk");
/* harmony import */ var _subcategory_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcategory.component.css */ "ptvK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubcategoryComponent = /** @class */ (function () {
    function SubcategoryComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        this.subCategory = new _Classes__WEBPACK_IMPORTED_MODULE_6__["SubCategory"]();
        this.subCategorylist = [];
    }
    SubcategoryComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.subCategory);
        this.service.AddSubCategory(this.subCategory).subscribe(function (result) {
            if (result > 0) {
                var formData = new FormData();
                _this.subCategory.SubCategoryImage1 = _this.filesToUpload[0].name;
                _this.subCategory.SubCategoryImage2 = _this.filesToUpload[1].name;
                formData.append('uploadedImage', _this.filesToUpload[0], _this.subCategory.SubCategoryImage1);
                formData.append('uploadedImage', _this.filesToUpload[1], _this.subCategory.SubCategoryImage2);
                _this.service.SaveSubCategoryImage(formData, result).subscribe(function (data) {
                    alert('Saved Successfully.');
                });
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    SubcategoryComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.selectedFileNames = [];
        for (var i = 0; i < this.filesToUpload.length; i++) {
            this.selectedFileNames.push(this.filesToUpload[i].name);
            this.subCategory.SubCategoryImage1 = this.filesToUpload[i].name;
            this.subCategory.SubCategoryImage2 = this.filesToUpload[i].name;
        }
    };
    SubcategoryComponent.prototype.ngOnInit = function () {
    };
    SubcategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    SubcategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-subcategory',
            template: _raw_loader_subcategory_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_subcategory_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], SubcategoryComponent);
    return SubcategoryComponent;
}());



/***/ }),

/***/ "pNZJ":
/*!***********************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXByb2R1Y3QvdXBkYXRlcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "poGh":
/*!******************************************************************!*\
  !*** ./src/app/registration-list/registration-list.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationListComponent", function() { return RegistrationListComponent; });
/* harmony import */ var _raw_loader_registration_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./registration-list.component.html */ "urFo");
/* harmony import */ var _registration_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-list.component.css */ "W3ZI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationListComponent = /** @class */ (function () {
    function RegistrationListComponent(service) {
        this.service = service;
        this.RegistrationList = [];
    }
    RegistrationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.GetAllRegistration().subscribe(function (result) {
            // console.log(result);
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var data = result_1[_i];
                _this.RegistrationList.push(data);
            }
            console.log(_this.RegistrationList);
        });
    };
    RegistrationListComponent.ctorParameters = function () { return [
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["WebServiceService"] }
    ]; };
    RegistrationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-registration-list',
            template: _raw_loader_registration_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_registration_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["WebServiceService"]])
    ], RegistrationListComponent);
    return RegistrationListComponent;
}());



/***/ }),

/***/ "ptvK":
/*!*******************************************************!*\
  !*** ./src/app/subcategory/subcategory.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNhdGVnb3J5L3N1YmNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "qHgr":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maincategory/maincategory.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"col-md-8\"style=\"padding-top:15px\">\n                <div class=\"card\">\n                    <form #mainCategoryForm=\"ngForm\">\n                        <div class=\"card-header card-header-danger\">\n                            <h4 class=\"card-title\">Main Category </h4>\n                        </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n\n                           \n                                \n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Main Category Name \" [(ngModel)]=\"mainCategory.CategoryName\" #MainCategoryNameControl=\"ngModel\" name=\"CategoryName\" class=\"example-full-width\" type=\"text\" required onkeypress=\"return (event.charCode > 64 && \n                                    event.charCode < 91 ) || (event.charCode > 96 && event.charCode < 123) || (event.charCode == 32)\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput placeholder=\"MainCategoryDescription\" [(ngModel)]=\"mainCategory.CategoryDescription\" #MainCategoryDescriptionControl=\"ngModel\" name=\"CategoryDescription\" class=\"example-full-width\" type=\"text\" required></textarea>\n                                    </mat-form-field>\n                                </div>\n                              \n                                \n                            \n                                <div class=\"col-md-6\">\n                                    <label for=\"avatar\">Upload Main Category Image1 :</label>\n\n                                    <input type=\"file\" [(ngModel)]=\"mainCategory.MainCategoryImage1\"  (change)=\"fileChangeEvent($event)\" #MainCategoryImage1Control=\"ngModel\" id=\"avatar\" name=\"MainCategoryImage1\" accept=\"image/png, image/jpeg\" required>\n\n                                </div> \n                                <div class=\"col-md-6\">\n                                    <label for=\"avatar\">Upload Main Category Image1 :</label>\n\n                                    <input type=\"file\" [(ngModel)]=\"mainCategory.MainCategoryImage2\"  (change)=\"fileChangeEvent($event)\" #MainCategoryImage2Control=\"ngModel\" id=\"avatar\" name=\"MainCategoryImage2\" accept=\"image/png, image/jpeg\" required>\n\n                                </div> \n\n                              \n                            </div>\n                            <br>\n                            <div class=\"row\"style=\"margin:auto\">\n                                <div class=\"col-md-5\"></div>\n\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"mainCategoryForm.invalid\" (click)=\"OnSubmit()\">Submit</button>\n                                <div class=\"clearfix\"></div>\n\n                                <div class=\"col-md-2\"></div>\n                            </div>\n\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "reP1":
/*!*********************************************************!*\
  !*** ./src/app/updateorders/updateorders.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZW9yZGVycy91cGRhdGVvcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ruAh":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "u+t1":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/distributorlist/distributorlist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Distributor List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                        <th>Id</th> \n                                                        <th>Distributor</th> \n                                                         <th>Business Name</th> \n                                                        <th>Distributor Name</th>\n                                                        <th>Address</th>\n                                                        <th>Contact</th>\n                                                        <th>Email</th>\n                                                        <th>City</th>                           \n                                                        <th>Postal Code</th>\n                                                        <th>Start Date </th>\n                                                        <th>End Date</th>\n                                                        <th>Action</th>\n\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of distributorList\">\n                                                         <!-- <td>\n                                                            <img src=\"{{imgPath}}Distributor/{{i.Photo}}\" style=\"height: 80px;width: 80px;\">\n                                                        </td>  -->\n                                                        <td>{{i.Id}}</td>\n                                                        <td>{{i.BuisnessName}}</td>\n                                                        <td>{{i.Name}}</td>\n                                                        <td>{{i.Address}}</td>\n                                                        <td>{{i.Mobile}}</td>\n                                                        <td>{{i.Email}}</td>\n                                                      \n                                                        <td>{{i.City}}</td>\n                                                        <td>{{i.PostalCode}}</td>\n                                                        <td>{{i.StartDate}}</td>\n                                                        <td>{{i.EndDate}}</td>\n                                                       \n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i><br>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> <br>\n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "urFo":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration-list/registration-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>registration-list works!</p>\n<p>specificationlist works!</p>\n<p>instructor-list works!</p>\n\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <div class=\"col-md-2\"></div> -->\n            <div class=\"col-md-12\"style=\"padding-top:13px\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Product List</h4>\n                        <p class=\"card-category\"></p>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <div class=\"row\">\n                        \n                          \n                               \n                                        <div class=\"col-md-6\">\n                                            <input name=\"SearchText\" type=\"text\" placeholder=\"Search by FirstName ...\" [(ngModel)]=\"SearchText\" class=\"form-control\">\n\n                                        </div>\n                                        <div class=\"col-md-6 btn1\" >\n                                            <button type=\"submit\" class=\"serchlist\" (click)=\"Serach()\">Search</button>\n                                       \n                                            <button type=\"submit\" class=\"resetlist\" (click)=\"Reset()\">Reset</button>\n                                        </div>\n                           \n                               \n                           \n                        </div>\n\n                        <form #orgTypeForm=\"ngForm\">\n                            <div class=\"row\">\n                                <div class=\"card\">\n                                    <div class=\"col-md-12\">\n                                  \n                                        <div class=\"table-responsive\">\n                                            <table class=\"table table-bordered\">\n                                                <thead class=\"thh\">\n                                                    <tr class=\"titlecolor\">\n                                                         <th>Id</th> \n                                                        <th>SpecificationTitle</th>\n                                                        <!-- <th>DOB</th> -->\n                                                        <th>ServingSize</th>\n                                                        <th>AmountPer</th>\n                                                        <!-- <th>Email</th> -->\n                                                        <th>Energy</th>\n                                                        <th> TotalFat</th>\n                                                        <th>SaturatedFat</th>\n                                                        <th>Carbohydrate</th>\n                                                        <th>Protein</th>\n                                                        <th>Calcium</th>\n                                                        <th>Sodium</th>\n                                                        <th>Sugar</th>\n                                                        <th>AddedSugar</th>\n                                                        <th>Packing</th>\n                                                         <th>PackingDate</th>\n                                                         <th>BestBeforeDays</th>\n                                                         <th>OtherNutritions</th>\n                                                         <th>Storagetemp</th>\n                                                         \n\n                                                    </tr>\n                                                </thead>\n                                                <tbody>\n                                                    <tr *ngFor=\"let i of RegistrationList\">\n                                                       \n                                                        <td>{{i.Id}} </td>\n                                                        <td>{{i.SpecificationTitle }}</td>\n                                                        <td>{{i.ServingSize }}</td>\n                                                        <td>{{i.AmountPer }}</td>\n                                                        <td>{{i.Energy}}</td>\n                                                         <td>{{i.TotalFat}}</td> \n                                                        <td>{{i.SaturatedFat}}</td>\n                                                        <td>{{i.Carbohydrate}}</td>\n                                                        <td>{{i.Protein}}</td>\n                                                        <td>{{i.Calcium}}</td>\n                                                        <td>{{i.Sodium}}</td>\n                                                        <td>{{i.Sugar}}</td>\n                                                        <td>{{i.AddedSugar}}</td>\n                                                      \n                                                        <td>{{i.Packing}}</td>\n                                                        <td>{{i.PackagingDate}}</td>\n                                                        <td>{{i.BestBeforeDays}}</td>\n                                                        <td>{{i.OtherNutritions}}</td>\n\n                                                        \n                                                        <td > <i class=\"fa fa-eye\"(click)=\"View(i.Id)\" style=\"cursor: pointer;   color:  rgb(9, 97, 138); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i>\n\n                                                            <i class=\"fa fa-pencil\" (click)=\"Edit(i.Id)\"   style=\"cursor: pointer; color: green;  font-size: 20px;  margin-right: 10px;\"  aria-hidden=\"true\" ></i> \n                                                            <i class=\"fa fa-trash\"(click)=\"Delete(i.Id)\" style=\"cursor: pointer;   color:  rgb(199, 56, 5); font-size: 20px; margin-right: 10px;\"   aria-hidden=\"true\" ></i></td> \n                                                        <!-- <td (click)=\"Edit(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-pencil\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Edit</td>\n                                                        <td (click)=\"Delete(i.Id)\" style=\"cursor: pointer;\"><i class=\"fa fa-trash\" aria-hidden=\"true\" style=\"margin-right: 7px;\"></i>Delete</td> -->\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n\n                                </div>\n                            </div>\n\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "xtDZ":
/*!******************************************************************!*\
  !*** ./src/app/updatedistributor/updatedistributor.component.ts ***!
  \******************************************************************/
/*! exports provided: UpdatedistributorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatedistributorComponent", function() { return UpdatedistributorComponent; });
/* harmony import */ var _raw_loader_updatedistributor_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./updatedistributor.component.html */ "Ungv");
/* harmony import */ var _updatedistributor_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatedistributor.component.css */ "OYGv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdatedistributorComponent = /** @class */ (function () {
    function UpdatedistributorComponent(router, http, service, route) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.service = service;
        this.route = route;
        this.distributor = [];
        this.route.params.subscribe(function (params) {
            _this.Id = params.id;
            console.log(_this.Id);
            _this.service.GetDistributorById(_this.Id).subscribe(function (result) {
                //  console.log(result)
                _this.distributor = result;
                console.log(_this.distributor);
            });
        });
    }
    UpdatedistributorComponent.prototype.OnSubmit = function () {
        this.service.UpdateDistributorById(this.distributor).subscribe(function (result) {
            if (result == "Success") {
                alert("Saved Successfully");
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    UpdatedistributorComponent.prototype.ngOnInit = function () {
    };
    UpdatedistributorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    UpdatedistributorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-updatedistributor',
            template: _raw_loader_updatedistributor_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_updatedistributor_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpdatedistributorComponent);
    return UpdatedistributorComponent;
}());



/***/ }),

/***/ "z9tB":
/*!********************************************************!*\
  !*** ./src/app/maincategory/maincategory.component.ts ***!
  \********************************************************/
/*! exports provided: MaincategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaincategoryComponent", function() { return MaincategoryComponent; });
/* harmony import */ var _raw_loader_maincategory_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./maincategory.component.html */ "qHgr");
/* harmony import */ var _maincategory_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maincategory.component.css */ "Ge6R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _Classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Classes */ "WV7s");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MaincategoryComponent = /** @class */ (function () {
    function MaincategoryComponent(router, http, service) {
        this.router = router;
        this.http = http;
        this.service = service;
        this.isEdit = false;
        this.selectedFileNames = [];
        this.mainCategory = new _Classes__WEBPACK_IMPORTED_MODULE_6__["MainCategory"]();
        this.mainCategorylist = [];
    }
    MaincategoryComponent.prototype.OnSubmit = function () {
        var _this = this;
        console.log(this.mainCategory);
        this.service.AddMainCategory(this.mainCategory).subscribe(function (result) {
            if (result > 0) {
                var formData = new FormData();
                _this.mainCategory.MainCategoryImage1 = _this.filesToUpload[0].name;
                _this.mainCategory.MainCategoryImage2 = _this.filesToUpload[1].name;
                formData.append('uploadedImage', _this.filesToUpload[0], _this.mainCategory.MainCategoryImage1);
                formData.append('uploadedImage', _this.filesToUpload[1], _this.mainCategory.MainCategoryImage2);
                _this.service.SaveMainCategoryImage(formData, result).subscribe(function (data) {
                    alert('Saved Successfully.');
                });
            }
            else {
                alert("Something went wrong! Please try again.");
            }
        });
    };
    MaincategoryComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.selectedFileNames = [];
        for (var i = 0; i < this.filesToUpload.length; i++) {
            this.selectedFileNames.push(this.filesToUpload[i].name);
            this.mainCategory.MainCategoryImage1 = this.filesToUpload[i].name;
            this.mainCategory.MainCategoryImage2 = this.filesToUpload[i].name;
        }
    };
    MaincategoryComponent.prototype.ngOnInit = function () {
    };
    MaincategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"] }
    ]; };
    MaincategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-maincategory',
            template: _raw_loader_maincategory_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_maincategory_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["WebServiceService"]])
    ], MaincategoryComponent);
    return MaincategoryComponent;
}());



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Globals */ "8XPr");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    // { path: '/Login', title: ' Login',  icon:'library_books', class: '' },
    { path: '/adminregistration', title: 'Registration', icon: 'person', class: '' },
    // { path: '/Admin-Login', title: 'Admin-Login',  icon:'person', class: '' },
    { path: '/PostJobList', title: 'Post Job List', icon: 'person', class: '' },
    { path: '/updatePostJob', title: 'Update Post Job ', icon: 'person', class: '' },
    { path: '/postjob', title: 'Post Job', icon: 'library_books', class: '' },
    { path: '/All-Jobs', title: 'All Jobs', icon: 'library_books', class: '' },
    { path: '/organizationtype', title: 'Add Organization Type', icon: 'person', class: '' },
    { path: '/orgnization-types-list', title: ' Orgnization Types List ', icon: 'library_books', class: '' },
    { path: '/organization', title: 'Organization', icon: 'library_books', class: '' },
    { path: '/organizationlist', title: 'organizationlist', icon: 'library_books', class: '' },
    { path: '/updateorganization', title: 'Update Org', icon: 'library_books', class: '' },
    // { path: '/studentplan', title: 'Student Plan',  icon:'library_books', class: '' },
    { path: '/applicationdetails', title: 'Application Details', icon: 'library_books', class: '' },
    // { path: '/updateapplicationdetails', title: ' Update Application Details',  icon:'library_books', class: '' },
    { path: '/applicationdetailslist', title: 'Application Details List', icon: 'library_books', class: '' },
    { path: '/studentplandetails', title: 'Student Plan Details', icon: 'library_books', class: '' },
    // { path: '/organizationplan', title: 'Organization Plan',  icon:'library_books', class: '' },
    // { path: '/orghrdetails', title: 'Organization HR Details',  icon:'library_books', class: '' },
    // { path: '/org-plan-details', title: 'Organization Plan Details',  icon:'library_books', class: '' },
    { path: '/jobcategory', title: 'Add Job Category', icon: 'library_books', class: '' },
    { path: '/Job-Category-List', title: 'Job Category List', icon: 'library_books', class: '' },
    { path: '/businesstypes', title: 'Add Business Types', icon: 'library_books', class: '' },
    // { path: '/UpdateAdminProfile', title: 'Update Admin Profile',  icon:'library_books', class: '' },
    { path: '/admin-profile-list', title: 'Admin Profile List', icon: 'library_books', class: '' },
    { path: '/investordetails', title: 'Investor Details ', icon: 'person', class: '' },
    // { path: '/orgnization-types-list', title: ' Orgnization Types List ',  icon:'library_books', class: ''  },
    { path: '/studentplan', title: 'Student Plan', icon: 'library_books', class: '' },
    { path: '/student-plans-list', title: ' Students Plans List ', icon: 'library_books', class: '' },
    { path: '/organizationplan', title: 'Organization Plan', icon: 'library_books', class: '' },
    { path: '/organizationplanlist', title: 'Organization Plan List', icon: 'library_books', class: '' },
    { path: '/ApplyJobMasterList', title: 'ApplyJobMasterList', icon: 'library_books', class: '' },
    { path: '/jobseekerlist', title: 'jobseekerlist', icon: 'library_books', class: '' },
    { path: '/application-details', title: 'Application Details', icon: 'library_books', class: '' },
    { path: '/application-details-list', title: 'Application Details List', icon: 'library_books', class: '' },
    // { path: '/updateorganizationplan', title: 'Update Organization Plan',  icon:'library_books', class: '' },
    { path: '/franchisedetails', title: 'Franchise Details', icon: 'library_books', class: '' },
    { path: '/franchisedetailslist', title: 'Franchise Details list', icon: 'person', class: '' },
    { path: '/org-plan-details', title: 'Organization Plan Details', icon: 'library_books', class: '' },
    { path: '/investorlist', title: 'Investor List ', icon: 'person', class: '' },
    { path: '/updateorganizationplan', title: 'Update Org Plan ', icon: 'person', class: '' },
    // { path: '/updatefranchisedetails', title: 'Update Franchise Details ',  icon:'person', class: '' },
    // { path: '/OrganizationPlanDetails', title: 'OrganizationPlanDetails',  icon:'library_books', class: '' },
    // { path: '/smstemplate', title: 'SMS Template',  icon:'person', class: '' },
    // { path: '/addmember', title: 'Add Member',  icon:'person', class: '' },
    // { path: '/Attendance', title: 'Attendance',  icon:'person', class: '' },
    // { path: '/gymprofile', title: 'Gym Profile',  icon:'person', class: '' },
    // { path: '/Inventory', title: 'Inventory Managemaent',  icon:'person', class: '' },
    // { path: '/Reports', title: 'Reports',  icon:'person', class: '' },
    //  { path: '/members', title: 'Members',  icon:'library_books', class: '' },
    // { path: '/unpaidmembers', title: 'Unpaid Members',  icon:'bubble_chart', class: '' },
    // { path: '/enquiry', title: 'Enquiry',  icon:'location_on', class: '' },
    // { path: '/totalcollection', title: 'Total Collection',  icon:'location_on', class: '' },
    // { path: '/gymtrainerprofile', title: 'Gym Trainer Profile',  icon:'location_on', class: '' },
    // { path: '/plans', title: ' Plan',  icon:'notifications', class: '' },
    { path: '/AppointmentList', title: 'Appointment ', icon: 'person', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(service, router) {
        this.service = service;
        this.router = router;
        // console.log(this.service.flag);
        this.uses = new _Globals__WEBPACK_IMPORTED_MODULE_3__["uses"];
        this.login = _Globals__WEBPACK_IMPORTED_MODULE_3__["GlobalVariable"].isLogged;
        console.log(this.uses.flag);
        // alert(this.uses.flag);
        console.log(window.location.href);
        //     if(window.location.href == "http://jobadmin.cyberscriptit.com/Admin-Login"){
        // this.uses.flag = true;
        //    }
        if (window.location.href == "http://localhost:4200/Admin-Login") {
            this.uses.flag = true;
        }
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                console.log(event.url);
                _this.tp = event.url == "/Admin-Login";
            }
            console.log(_this.tp);
        });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return [
        { type: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["WebServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());

//hide Icon
// $(document).ready(function() {
// $('[data-toggle="collapse"]').click(function() {
//   $(this).toggleClass( "active" );
//   if ($(this).hasClass("active")) {
//     $(this).text("Hide");
//   } else {
//     $(this).text("Show");
//   }
// });
// })
// $(function() {
//   $('#ChangeToggle').click(function() {
//     $('#navbar-hamburger').toggleClass('hidden');
//     $('#navbar-close').toggleClass('hidden');  
//   });
// });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map