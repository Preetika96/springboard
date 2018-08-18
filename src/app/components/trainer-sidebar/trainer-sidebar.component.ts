import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/trainer/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/trainer/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/typography', title: 'Training Materials',  icon:'library_books', class: '' },
    { path: '/trainer/add-assessment', title: 'Add Assessment Score', icon: 'content_paste', class: ''},
    { path: '/trainer/add-materials', title: 'Add Material', icon : 'library_books', class : ''},
    { path : '/trainer/show-score', title: 'Show Score', icon : 'bubble_chart', class : ''},
    { path: '/trainer/add-subject', title:'Add Subject', icon: 'unarchive', class :''}
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-trainer-sidebar',
  templateUrl: './trainer-sidebar.component.html',
  styleUrls: ['./trainer-sidebar.component.scss']
})
export class TrainerSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
