import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  obj;
  response;
  records;
  empname = this.session.getUsername();
  empcode = this.session.getEmployee_ID();
  role = this.session.getRole();  
  
  constructor(private http: HttpService, private session : SessionService, private spinner : Ng4LoadingSpinnerService) {}

  // if(this.role === "student")
  // {
  //   this.role = "Associate Software Engineer";
  
  // }else{
  //   this.role = "Trainer";
  // } 

  ngOnInit() {
    this.spinner.show();
      this.obj =
      {
        'empcode': this.empcode
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
    this.http.post_api(Constants.USER_PROFILE, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
        this.records = JSON.parse(this.response._body)['records'][0];
        this.spinner.hide();
      });

  }
  

}
