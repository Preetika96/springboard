 import { ShowSubjectsComponent } from './../../add-subject/show-subjects/show-subjects.component';
 import { AddSubjectComponent } from './../../add-subject/add-subject.component';
// import { ShowStudentListComponent } from './../../show-by-assessment/show-student-list/show-student-list.component';
 import { NoneComponentComponent } from './../../none-component/none-component.component';
// import { ShowByAssessmentComponent } from './../../show-by-assessment/show-by-assessment.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainerLayoutRoutes } from './trainer-layout.routing';
import { TrainerDashboardComponent } from '../../trainer-dashboard/trainer-dashboard.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { ShowScoreComponent } from '../../show-score/show-score.component';
import { AddAssessmentComponent } from '../../add-assessment/add-assessment.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { AddMaterialsComponent } from '../../add-materials/add-materials.component';
// import { AddMaterialsComponent } from '../../add-materials/add-materials.component';

// import { IconsComponent } from '../../icons/icons.component';
import { ShowScoreComponent } from '../../show-score/show-score.component';
import {MatDialogModule, MatFormFieldModule} from '@angular/material';
import { TrainingMaterialComponent } from '../../training-material/training-material.component';

// import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatFormField
} from '@angular/material';
import { ShowAssessmentListComponent } from '../../show-by-students/show-assessment-list/show-assessment-list.component';
import { ShowByAssessmentComponent } from '../../show-by-assessment/show-by-assessment.component';
import { ShowByStudentsComponent } from '../../show-by-students/show-by-students.component';
import { ShowStudentListComponent } from '../../show-by-assessment/show-student-list/show-student-list.component';
// import { ShowByStudentsComponent } from '../../show-by-students/show-by-students.component';
// import { ShowAssessmentListComponent } from '../../show-by-students/show-assessment-list/show-assessment-list.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TrainerLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule
   
  ],
  declarations: [
    // DashboardComponent,
    
    // TableListComponent,
     AddSubjectComponent,
    // IconsComponent,
    // ShowScoreComponent,
    // AddMaterialsComponent,
    AddAssessmentComponent,
    TrainerDashboardComponent,
    UserProfileComponent,
    AddMaterialsComponent,
    ShowScoreComponent,
    ShowAssessmentListComponent,
    ShowByAssessmentComponent,
    ShowByStudentsComponent,
    ShowStudentListComponent,
    // UpgradeComponent,
    // ShowByStudentsComponent,
    // ShowByAssessmentComponent,
    // ShowAssessmentListComponent,
     NoneComponentComponent,
    // ShowStudentListComponent,
     ShowSubjectsComponent,
     TrainingMaterialComponent
  ],
  bootstrap: [TrainerDashboardComponent],
})

export class TrainerLayoutModule {}
