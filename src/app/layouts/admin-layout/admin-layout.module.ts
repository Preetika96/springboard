import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent,DialogOverviewExampleDialog } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { AssessmentComponent } from '../../assessment/assessment.component';


import {MatDialogModule} from '@angular/material';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogActions,
} from '@angular/material';
@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,

    MatDialogModule
 
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    AssessmentComponent,

    DialogOverviewExampleDialog,
  
  ],
  entryComponents: [DashboardComponent,DialogOverviewExampleDialog],

  bootstrap: [DashboardComponent],

})

export class AdminLayoutModule {}
