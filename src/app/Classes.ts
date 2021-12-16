

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

export class ForgotPassword {
  Mobile: string;
  Otp: number;
}

export class ResetPassword {
  Otp: number;
  Password: string;
  ConfirmPassword: string;
}

export class Experience {
  Id: number
  Sid: number;
  FromDate: string;
  ToDate: string;
  Designation: string;
  OrganizationName: string;
  Role: string;
}

export class RegisterOTP {
  Id: number;
  OTP: string;
  Status: string;
  Mobile: string;
}

export class EducationMaster {
  Id: number;
  Sid: number;
  CollegeName: string;
  EnrollNo: string;
  Education: string;
  Branch: string;
  Passyear: string;
  Marks: string;
  Skill: string;
  Extraskill: string;
}

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

export class PostJobMaster {
  JobId : number;
  OrganizationId: number;
  Organization:OrganizationMaster;
  JobCategory: JobCategory;
  RequiredSkill: string;
  Role: string;
  JobTitle:string;
  MinQualification: string;
  ExtraSkill: string;
  MaxAge: number;
  ExpectedSalary: number;
  Experiance:string;
  WorkingHours: string;
  JobDescription: string;
  LastApplyDate: string;
  EntryDate: string;
  Status: string;
  City: City;
  State: State;
  Country: Country;
  CreatedBy: string;
  CreatedDate : string;
  UpdatedBy: string;
  UpdatedDate: string;
}


export class OrgType {
  Id: number;
  Title: string;
}
export class OrganizationMaster {
  Id: number;
  OrgType:OrgType;
  Name: string;
  GSTNo: number;
  Address: string;
Photo: string;
 City: City;
 State: State;
 Country: Country;
  Pincode: number;
  Mobile : string;
  Website: string;
  Email: string;
  // OrganizationTypeId: number
}
export class studentplandetails {
  
  Id: number;
  JobSeeker: JobSeeker;
  StudentPlansMaster : StudentPlanMaster;
  StartDate: string;
  EndDate: string;
  Status : string;
 
}
export class JobSeeker {
Id: number
EnRollNo : number
FirstName: string;
LastName: string;
Address: string;
CityId: string;
StateId: string;
Pincode: string;
DOB: string;
Gender: string;
MobileNo
EmailId: string;
Password: string;
EntryDate: string;
YearOfExperience: string;
Status: string;
Photo: string;
Skill: string;
ExtraSkill: string;
Role: string;

}
export class DashboardDetails {
  TotalMember : number;
  TotalInstructor:number;
  TotalWorkoutType :number;
  TotalMembershipPlan :number;
  TotalAppointment : number;
  TotalEnquiry : number;
 
 }
export class Orghrdetails {
  Id: number;
  FName : string;
  LName : string;
  Mobile : string;
  Email : string;
  Username : string;
  Password : string;
  EntryDate : string;
  OrganizationId: number;
  Status : string;
}

export class StudentPlanMaster {
  Id: number;
  Title: string;
  Price: string;
  Status: string;
}

export class AdminMaster {

  Id: number;
  Name : string;
  Mobile : string;
  Email : string;
  Password : string;
  EntryDate : string;
  Role : string;
}

export class Orgplandetails {
  
  Id: number;
  OrgnizationId: number;
  PlanId : string;
  Startdate: string;
  EndDate: string;
  Status : string;
 
}
// export class studentplandetails {
  
//   Id: number;
//   StudentId: number;
//   PlanId : string;
//   Startdate: string;
//   EndDate: string;
//   Status : string;
 
// }

export class UserDashboard {
  jobSeeker: Registration  
  education:EducationMaster[]  
  experiance: Experience []
}
export class Country {
  Id: number;
  CountryName: string;
}

export class State {
  State_Id: number;
  StateName: string;
  Country: Country;
}

export class City {
  City_Id: number;
  CityName: string;
  State: State;
}

export class Businesstype {
  
  Business_Id: number;
  Business_Type: string;
  Photo:string;
}

export class JobCategory {
  
  JobCategory_Id: number;
  JobCategory_Name: string;
  JobCatIcon: string;
}

export class Applicationdetails {
  Id:number;
  UserId: number;
  FranchId: number;
  Comment: string;
  Status: string;
}

export class Searchcriteria {
  
  Id: number;
  UserId: number;
  FromAmount: number;
  ToAmount: number;
 Area: string;

}
export class Franchisedetails {
  Id: number;
  BrandName : string;
  InvestmentAmount : string;
  BusinessDescription : string;
  Rules : string;
  City : City;
  FacilitiesProvided : string;
  BusinessType : Businesstype;
  Status : string;
  Photos: FranchisePhoto[];
  // Photo1: string;
  // Photo2: string;
  // Photo3: string;
}

export class FranchisePhoto {
  Id: number;
  FranchiseId: number;
  Photo: any;
}

export class OrganizationPlanMaster {
  Id: number;
  Title: string;
  Price: string;
  Status: string;
}
export class Investor{
  Id: number;
  FName: string;
  LName:string;
  Address: string;
  City: City;
  State: State;
  Mobile:string;
  Email:string;
  Photo: string;
}
export class InvestorDetails{
  Id: number;
  FName: string;
  LName:string;
  Address: string;
  City: City;
  State: State;
  Mobile:string;
  Email:string;
  Photo: string;
  Applicationdetails : Applicationdetails;
  Franchisedetails : Franchisedetails;
}

//////Classes for Gym Project********************************

export class MemberHealthInfo{
  Member: Member;
  Date:string;
  Time:string;
  Height:string;
  Weight:string;
  Status:string;
  Comment:string;
  //
  AverageWeight:string;
  TotalFat:string;
  AverageFat:string;
  //
  Age:string;
  BodyFat: string;
  BodyWater:string;
  VisceralFat:string;
  MusscleMass:string;
  Physique:string;
  BoneMass:string;
  DailyCalorie:string;
  MetabolicAge:string;

}

export class UserWorkoutDetails{
  Id: number;
  Member: Member;
  WorkoutType: WorkoutType;
  Instructor: Instructor;
  Status:string;
  StartDate: string;
  EndDate: string;
}


export class Instructor{
  Id: number;
  FirstName: string;
  LastName:string;
  DOB: string;
  Salary: number;
  Address: string;
  Email:string;
  Mobile:string;
  ProfessionalDetails:string;
Experience: string;
Status:string;
ThumbId: number;
Photo: string;
JoiningDate:string;
DateOfResign:string;
}

export class WorkoutType{
  Id: number;
  Name: string;
  Description:string;
  Status:string;
}

export class Member{
  Id: number;
  MemberHealthInfo:MemberHealthInfo;
  FirstName: string;
  LastName:string;
  Address: string;
  DOB: string;
  UserName : string;
  Password : string;
  ThumbId: number;
  Photo: string;
  Contact: string;
  EmergencyContact: string;
  DateOfJoining: string;
  DateOfCardIssue: string;
  Injuries: string;
  Age: string;
}



export class AttendenceStatus{
  Id: number;
  Title: string;
}

export class MembershipPlan{
  Id: number;
  Title: string;
  Price: number;
  Period: number;
  ValidTill:string;
  Description:string;
  Remarks:string;
}

export class UserPlanDetails{
  Id: number;
  Member: Member;
  UserId:string;
  MembershipPlan: MembershipPlan;
  Status:string;
  StartDate: string;
  EndDate: string;
}



export class ExerciseRoutine{
  Id: number;
  MemberId:number;
  Day1:string;
  Day2:string;
  Day3:string;
  Day4:string;
  Day5:string;
  Day6:string;
}


export class Exercise{
  Id: number;
  ExerciseId: number;
  Member:Member;
  MainExercise:MainExercise
  MemberId:string;
  SubExercise:SubExercise;
  Sets:string;
  Reps:string;
 
}
export class DietPlan{
  Id: number;
  Member: Member;

  // Age:string;
  
  MemberId:number;
  Height:string;
  Weight:string;
  // AverageWeight:string;
  // TotalFat:string;
  // AverageFat:string;
  DietTable:DietTable
  Status:string;
}
export class DietTable{
  Id: number;
  Member: Member;
  TypeOfDiet:string;
  Time:string;
  Menu:string;
  Qty:string;
  MemberId:number;
}
 export class CounsellingAppointment{
  Id : number;
  Candidate : string;
  FirstName: string;
  LastName : string;
  Address : string;
  Email : string;
  Contact : string;
  Age : string;
  Date : string;
  Description : string;
  GeneralCounselling :string;
  DietCounselling :string;
  AppointmentDate:string;
  AppointmentTime:string;
 }
 

export class PaymentHistory{
  Id: number;
  Member: Member;
  MemberId:number;
  PlanId:number;
  Price:number;
  ReceivedAmount:number;
  PendingAmount:number;
  PaidDate:string;
  UserPlanDetails:UserPlanDetails;
  MembershipPlan: MembershipPlan;
  
  
}
export class Inquiry{
  Id: number;
  InquiryType:string;
  Name: string;
  Address:string;
  Contact:string;
  Email:string;
  Gender:string;
  Age:string;
  // WorkoutType:string;
  // Injuries: string;
  // PreviousMember: string;
  Comment: string;
}
export class PaymentReceipt{
  Id : number;
  MemberId : number;
  TransactionDate : string;
  FirstName :string;
  LastName : string;
  Candidate: string;
  MembershipPlan : string;
  TotalAmount : string;
  ReceivedBy : string;
}

export class MainExercise{
  Id : number;
  Name : string;
  ExerciseDesc : string;
  CreatedDate :string;
  CreatedBy : string;
  UpdatedDate: string;
  UpdatedBy : string;
 
}

export class SubExercise{
  Id : number;
  MainExId : number;
  Name : string;
  MainExercise:MainExercise
  Description : string;
  CreatedDate :string;
  CreatedBy : string;
  UpdatedDate: string;
  UpdatedBy : string;
 
}

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

export class Product {
  ProductId: number;
  ProductName : string;
  ProductDescription:string;
  ProductCaption:string;
  ProdQuantityPerUnit : number;
  ProductPricePerUnit : string;
  ProductRating: string;
  ProductDiscount : string;
  ProductCompany:string;
  ProductSpecification:string;
  ProductAvailableSize : string;
  ProductAvailableColor : string;
  ProductMaterial: string;
  ProductUnitInStock : number;
  ProductUnitInOrder:number;
  ProductUnitWeight:string;
  ProductStatus:string;
  ProductStockStatus : string;
  MainCategoryId : number;
  SubCategoryId: number;
  SupplierId : number;
  OfferId:number;
  ReviewId:number;
  CreatedDate : string;
  CreatedBy : string;
  UpdatedDate : string;
  UpdatedBy : string;
  ProductImage1 : string;
  ProductImage2 : string;
  ProductImage3: string;
  // Photo1: string;
  // Photo2: string;
  // Photo3: string;
}




// *********Dairy Project*********************//

export class Distributor{
  Id: number;
  BuisnessName : string;
  Name:string;
  City: number;
  State: number;
  Country: number;
  PostalCode: string;
  Email: string;
  Address: string;
  Mobile:string;
  Photo: string;
StartDate:string;
EndDate:string;
}

export class Products {
  Id: number;
  ProductName : string;
  ProductDescription:string;
  ProductCaption:string;
  ProductCompany : number;
  ProductPricePerUnit : string;
  ProductDiscount : string;
  Productcompany:String;
  ProductInstructionId : number;
  ProductAvailableSize : string;
  ProductSpecificationId:number;
  ProductUnitInStock:number;
  ProductUnitInOrder:number;
  ProductUnitWeight:number;
  ProductStatus:string;
  ProductStockStatus : string;
  CategoryId : number;
  DistributorId : number;
  OfferId:number;
  ReviewId:number;
  CreatedDate : string;
  CreatedBy : string;
  UpdatedDate : string;
  UpdatedBy : string;
  ProductImage1 : string;
  ProductImage2 : string;
  ProductImage3: string;
  
}

export class Subscription{
  Id: number;
  // SubscriptionTypeId : number;
  SubscriptionTitle:string;
  SubscriptionDescription:string;
  Discount: number;
  Status: string;
  // EndDate: string;
  Image: string;
}


export class ProductReview{
  Id: number;
  ProductId: number;
  ReviewBy : string;
  ReviewText:string;
  ReviewRating: number;
  ReviewerImage: string;

}

export class ProductOffer{
  Id: number;
  OfferTitle : string;
  OfferDescription : string;
  OfferOccassion : string;
  OfferPercentOff: number;
  OfferStartDate : string;
  OfferEndtDate : string;
  OfferImage: string;

}

export class SubCategory{
  Id: number;
  MainCategoryId: number;
  SubCategoryName : string;
  SubCategoryDescription : string;
  SubCategoryImage1: string;
  SubCategoryImage2: string;

}

export class MainCategory{
  Id: number;
  CategoryName : string;
  CategoryDescription : string;
  MainCategoryImage1: string;
  MainCategoryImage2: string;

}

export class ProductInstructions{
  Id: number;
  InstructionTitle : string;
  ProductInstr1 : string;
  ProductInstr2 : string;
  ProductInstr3 : string;
  ProductInstr4 : string;
  ProductInstr5 : string;
  ProductInstr6 : string;


}


export class ProductSpecification{
  Id: number;
  SpecificationTitle : string;
  ServingSize : string;
  AmountPer: number;
  Energy: number;
  TotalFat: number;
  SaturatedFat: number;
  Carbohydrate: number;
  Protein: number;
  Calcium: number;
  Sodium: number;
  Sugar: number;
  AddedSugar: number;
  Packing: string;
  PackagingDate: number;
  BestBeforeDays: number;
  OtherNutritions : string;
  StorageTemp: number;
}


export class Registration {
  Id: number;
  Name: string;
  Email: string;
  Mobile: string;
  Password: string;
  Role:string;
 
}
export class Login {
  Email: string;
  Password: string;
}
