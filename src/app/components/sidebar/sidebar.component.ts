import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/student/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/student/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/student/assessment', title: 'Assessment',  icon:'content_paste', class: '' },
    { path: '/student/training-material', title: 'Training Materials',  icon:'library_books', class: '' },
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
