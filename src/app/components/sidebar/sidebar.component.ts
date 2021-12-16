import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { GlobalVariable, uses } from "../../Globals";
import { WebServiceService } from '../../user-profile/user-profile.component';
declare const $: any;
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  // { path: '/Login', title: ' Login',  icon:'library_books', class: '' },
  { path: '/adminregistration', title: 'Registration',  icon:'person', class: '' },
  // { path: '/Admin-Login', title: 'Admin-Login',  icon:'person', class: '' },

  { path: '/PostJobList', title: 'Post Job List',  icon:'person', class: '' },
  { path: '/updatePostJob', title: 'Update Post Job ',  icon:'person', class: '' },

  { path: '/postjob', title: 'Post Job',  icon:'library_books', class: '' },
  { path: '/All-Jobs', title: 'All Jobs',  icon:'library_books', class: '' },

  { path: '/organizationtype', title: 'Add Organization Type',  icon:'person', class: '' },
  { path: '/orgnization-types-list', title: ' Orgnization Types List ',  icon:'library_books', class: ''  },
 
  { path: '/organization', title: 'Organization',  icon:'library_books', class: '' },
  { path: '/organizationlist', title: 'organizationlist',  icon:'library_books', class: '' },
  { path: '/updateorganization', title: 'Update Org',  icon:'library_books', class: '' },
  // { path: '/studentplan', title: 'Student Plan',  icon:'library_books', class: '' },
 
  { path: '/applicationdetails', title: 'Application Details',  icon:'library_books', class: '' },
  // { path: '/updateapplicationdetails', title: ' Update Application Details',  icon:'library_books', class: '' },
  { path: '/applicationdetailslist', title: 'Application Details List',  icon:'library_books', class: '' },
  { path: '/studentplandetails', title: 'Student Plan Details',  icon:'library_books', class: '' },
  // { path: '/organizationplan', title: 'Organization Plan',  icon:'library_books', class: '' },
  
  // { path: '/orghrdetails', title: 'Organization HR Details',  icon:'library_books', class: '' },
  
  // { path: '/org-plan-details', title: 'Organization Plan Details',  icon:'library_books', class: '' },
  { path: '/jobcategory', title: 'Add Job Category',  icon:'library_books', class: '' },
  { path: '/Job-Category-List', title: 'Job Category List',  icon:'library_books', class: '' },


  { path: '/businesstypes', title: 'Add Business Types',  icon:'library_books', class: '' },
  // { path: '/UpdateAdminProfile', title: 'Update Admin Profile',  icon:'library_books', class: '' },
  { path: '/admin-profile-list', title: 'Admin Profile List',  icon:'library_books', class: '' },
  { path: '/investordetails', title: 'Investor Details ',  icon:'person', class: '' },
  // { path: '/orgnization-types-list', title: ' Orgnization Types List ',  icon:'library_books', class: ''  },
  { path: '/studentplan', title: 'Student Plan',  icon:'library_books', class: '' },
  { path: '/student-plans-list', title: ' Students Plans List ',  icon:'library_books', class: ''  },
  
  { path: '/organizationplan', title: 'Organization Plan',  icon:'library_books', class: '' },
  { path: '/organizationplanlist', title: 'Organization Plan List',  icon:'library_books', class: '' },

  { path: '/ApplyJobMasterList', title: 'ApplyJobMasterList',  icon:'library_books', class: '' },
  { path: '/jobseekerlist', title: 'jobseekerlist',  icon:'library_books', class: '' },
  { path: '/application-details', title: 'Application Details',  icon:'library_books', class: ''  },
  { path: '/application-details-list', title: 'Application Details List',  icon:'library_books', class: ''  },


  
 
  // { path: '/updateorganizationplan', title: 'Update Organization Plan',  icon:'library_books', class: '' },
 
  { path: '/franchisedetails', title: 'Franchise Details',  icon:'library_books', class: '' },
  { path: '/franchisedetailslist', title: 'Franchise Details list',  icon:'person', class: '' },
  
  
  { path: '/org-plan-details', title: 'Organization Plan Details',  icon:'library_books', class: '' },
  
  { path: '/investorlist', title: 'Investor List ',  icon:'person', class: '' },
  { path: '/updateorganizationplan', title: 'Update Org Plan ',  icon:'person', class: '' },
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
    { path: '/AppointmentList', title: 'Appointment ',  icon:'person', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  menuItems: any[];
login: any
uses: uses;
tp: boolean;
  constructor(private service: WebServiceService, private router: Router) {
    // console.log(this.service.flag);
    this.uses = new uses
    this.login = GlobalVariable.isLogged;
    console.log(this.uses.flag);
    // alert(this.uses.flag);
    console.log(window.location.href)
//     if(window.location.href == "http://jobadmin.cyberscriptit.com/Admin-Login"){
// this.uses.flag = true;

//    }
if(window.location.href == "http://localhost:4200/Admin-Login"){
  this.uses.flag = true;
  
     }
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.tp = event.url == "/Admin-Login";
      }
      console.log(this.tp)
    });
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}


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
