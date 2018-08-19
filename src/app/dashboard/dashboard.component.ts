import { Component, OnInit, Inject } from '@angular/core';

import { Constants } from '../Constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
// export interface DialogData {
//   animal: string;
//   name: string;
// }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  obj;
  training_materials;
  assessment_materials;
  client_side_score;
  server_side_score;
  database_score;

  constructor(public dialog: MatDialog, private http: HttpService ,private Session:SessionService) {}
  ngOnInit() {
      this.obj =
      {
        'req_type': 1,
        'empcode':this.Session.getEmployee_ID()
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
    this.http.post_api(Constants.DASHBOARD, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
        // console.log(this.response)

        this.training_materials = JSON.parse(this.response._body.split("=")[0])['materialrecords'];
        // this.assessment_materials = JSON.parse(this.response._body.split("=")[1])['assessmentrecords'];
        // this.client_side_score = JSON.parse(this.response._body.split("=")[2])['clientsidescore'];
        console.log(this.response);
        
     

      });

  }

}