 import { ShowSubjectsComponent } from './../../add-subject/show-subjects/show-subjects.component';
 import { AddSubjectComponent } from './../../add-subject/add-subject.component';
 import { ShowStudentListComponent } from './../../show-by-assessment/show-student-list/show-student-list.component';
 import { ShowByAssessmentComponent } from './../../show-by-assessment/show-by-assessment.component';
import { Routes,RouterModule } from '@angular/router';
import { AddMaterialsComponent } from '../../add-materials/add-materials.component';

import { TrainerDashboardComponent } from '../../trainer-dashboard/trainer-dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { IconsComponent } from '../../icons/icons.component';
 import { ShowScoreComponent } from '../../show-score/show-score.component';
import { AddAssessmentComponent } from '../../add-assessment/add-assessment.component';
// import { AddMaterialsComponent } from '../../add-materials/add-materials.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';
 import { ShowByStudentsComponent } from '../../show-by-students/show-by-students.component';
 import { ShowAssessmentListComponent } from '../../show-by-students/show-assessment-list/show-assessment-list.component';
 import { NoneComponentComponent } from '../../none-component/none-component.component'; 
 import { TrainingMaterialComponent } from '../../training-material/training-material.component';


export const TrainerLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {path : '' ,component: TrainerDashboardComponent },
     { path: 'dashboard',      component: TrainerDashboardComponent },
    { path: 'user-profile',   component:  UserProfileComponent },
    { path: 'add-materials',   component: AddMaterialsComponent },
    { path: 'training-material',   component: TrainingMaterialComponent },
    // { path: 'table-list',     component: TableListComponent },
    
    // { path: 'icons',          component: IconsComponent },
  
    // { path: 'upgrade',      component: UpgradeComponent },
    { path: 'show-score', component : ShowScoreComponent, children : [
        {path : 'by-student', component : ShowByStudentsComponent , children : [
            {path : '' , component: NoneComponentComponent},
            {path : 'assessment-list' , component : ShowAssessmentListComponent}
        ]},
        {path : 'by-assessment', component : ShowByAssessmentComponent , children : [
            {path : '', component: NoneComponentComponent},
            {path : 'student-list', component : ShowStudentListComponent}
        ]}
    ]},
    { path: 'add-assessment', component :AddAssessmentComponent },
    
    // { path: 'add-materials', component:AddMaterialsComponent },
     { path: 'add-subject', component : AddSubjectComponent, children : [
      {path : '', component :NoneComponentComponent },
     {path : 'show-subjects' , component : ShowSubjectsComponent}
    ]}

];
