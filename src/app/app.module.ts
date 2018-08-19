import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatDialogModule} from '@angular/material';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HttpService } from './http.service';
import { ListuploadComponent } from './listupload/listupload.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AddAssessmentComponent } from './add-assessment/add-assessment.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';
import { TrainerLayoutComponent } from './layouts/trainer-layout/trainer-layout.component';
import { FrontComponent } from './front/front.component';
import { DevelopersComponent } from './developers/developers.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SessionService } from './session.service';


const appRoutes: Routes = [
  {path : '',component:FrontComponent,children:[
    {path : '' , component : LoginComponent},
    {path : 'register', component : RegisterComponent},
    {path : 'login', component : LoginComponent},
    {path : 'developer', component :DevelopersComponent }
  ]},

  {path : 'not-found', component : PageNotFoundComponent},
  {path: 'fileUpload', component: UploadComponent},
  {path: 'listUpload', component: ListuploadComponent},
  {path: 'attendance', component: AttendanceComponent},
  {path : '**', redirectTo : '/not-found'}
];

@NgModule({
  exports:[
    MatDialogModule,

  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,  
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    UploadComponent,
    ListuploadComponent,
    AttendanceComponent,
    TrainerLayoutComponent,
    FrontComponent,
    DevelopersComponent   
   
   

  ],  

  providers: [HttpService,SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
