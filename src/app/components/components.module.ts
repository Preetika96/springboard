import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TrainerSidebarComponent } from './trainer-sidebar/trainer-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TrainerSidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    TrainerSidebarComponent
  ]
})
export class ComponentsModule { }
