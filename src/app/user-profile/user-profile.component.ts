import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Headers } from '@angular/http';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  updateProfileForm: FormGroup;
  contact;
  obj;
  response;
  records;
  empname ;
  empcode ;
  role = this.session.getRole();  
  data_body;
  name;
  code;
  email;
  desc;
  constructor(private http: HttpService, 
              private session : SessionService, 
              private spinner : Ng4LoadingSpinnerService) {}

  // if(this.role === "student")
  // {
  //   this.role = "Associate Software Engineer";
  
  // }else{
  //   this.role = "Trainer";
  // } 

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
        this.assignData();
        this.contact = this.records.contact;
        this.name = this.empname;
        this.code = this.empcode;
        this.desc = this.records.description;
        this.email = this.records.email;
      });   

  }
  assignData()
      {
      this.updateProfileForm = new FormGroup({
        empcode: new FormControl(null),
        empname: new FormControl(null, [Validators.required]),
        contact: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required])
      });
    }
  
  onSubmit() {  
    alert(this.updateProfileForm.value.empname);
    console.log(this.updateProfileForm.value);
    this.spinner.show();
    const header = new Headers({ 'Content-Type': 'text/plain' });
    this.http.post_api(Constants.UPDATE_PROFILE, this.updateProfileForm.value, header)
      .subscribe(data => {
        this.spinner.hide();
        this.data_body = data;
      });
  }
}
