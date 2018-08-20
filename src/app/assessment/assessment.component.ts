import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Constants } from '../Constants';


@Component({
  selector: 'app-table-list',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  constructor( 
    private http: HttpService, 
    private session : SessionService) {}
obj;
response;
assessmentrecords;
ngOnInit() {

this.obj =
{
'req_type': 10,
'empcode': this.session.getEmployee_ID()
}
const headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

// Create an Object of Header specifying the content type and pass it to the method
this.http.post_api(Constants.DASHBOARD, JSON.stringify(this.obj), headers)
.subscribe(data => {
this.response = data;
console.log(data);
this.assessmentrecords = JSON.parse((this.response._body).split('=')[0])['assessmentrecords'];

});


}
}

