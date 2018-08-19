import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Constants } from '../Constants';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  obj;
  records:any;
  empcode=this.Session.getEmployee_ID();
  empname=this.Session.getUsername();
  constructor(private http: HttpService ,private Session:SessionService) {}
  ngOnInit() {

      this.obj =
      {

        'empcode':this.Session.getEmployee_ID()
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
    this.http.post_api(Constants.USER_PROFILE, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
        console.log(this.response)

        this.records = JSON.parse(this.response._body)['records'][0];
        console.log(this.records);
        
     

      });


}
