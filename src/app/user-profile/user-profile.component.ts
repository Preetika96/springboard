import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Headers } from '@angular/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit { 

  updateProfileForm = new FormGroup({
    empcode: new FormControl(0),
    empname: new FormControl('jjj', [Validators.required]),
    contact: new FormControl(0, [Validators.required]),
    email: new FormControl('jjj', [Validators.required]),
    description: new FormControl('jjj', [Validators.required])
  });

  obj;
  response;
  records={'contact': '', 'email': '', 'description': ''};
  empname = this.session.getUsername();
  empcode = this.session.getEmployee_ID();
  data_body;
  constructor(private http: HttpService, 
              private session : SessionService, 
              private spinner : Ng4LoadingSpinnerService) {} 

  ngOnInit() {
    this.empname = this.session.getUsername();
    this.empcode = this.session.getEmployee_ID();
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

  onSubmit() {
    if (this.updateProfileForm.value.empcode === 0)
    {
        this.updateProfileForm.value.empcode = this.empcode;
    }
    if (this.updateProfileForm.value.empname === "jjj")
    {
      this.updateProfileForm.value.empname = this.empname;
    }
    if (this.updateProfileForm.value.email === "jjj")
    {
      this.updateProfileForm.value.email = this.records.email;
    }
    if (this.updateProfileForm.value.contact === 0)
    {
      this.updateProfileForm.value.contact = this.records.contact;
    }
    if (this.updateProfileForm.value.description === "jjj")
    {
      this.updateProfileForm.value.description = this.records.description;
    }

    this.spinner.show();
    const header = new Headers({ 'Content-Type': 'text/plain' });
    this.http.post_api(Constants.UPDATE_PROFILE, this.updateProfileForm.value, header)
      .subscribe(data => {
        this.spinner.hide();
        this.data_body = data;
        console.log(this.data_body);
      });
  }
}
