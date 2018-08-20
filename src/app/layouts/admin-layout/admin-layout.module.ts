import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { AssessmentComponent } from '../../assessment/assessment.component';
import { TrainingMaterialComponent } from '../../training-material/training-material.component';


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
    ReactiveFormsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
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
    TrainingMaterialComponent

    // DialogOverviewExampleDialog,
  
  ],
  entryComponents: [DashboardComponent],

  bootstrap: [DashboardComponent],

})

export class AdminLayoutModule {}
