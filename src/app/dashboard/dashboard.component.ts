import { Component, OnInit, Inject } from '@angular/core';

import { Constants } from '../Constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';
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
  response;
  materialrecords;
  assessmentrecords;
  clientsidescore;
  serversidescore;
  databasescore;
  constructor(public dialog: MatDialog, 
              private http: HttpService, 
              private session : SessionService,
              private spinnerService : Ng4LoadingSpinnerService) {}

  ngOnInit() {
    this.spinnerService.show();
      this.obj =
      {
        'req_type': 1,
        'empcode': this.session.getEmployee_ID()
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
    this.http.post_api(Constants.DASHBOARD, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
        this.materialrecords = JSON.parse((this.response._body).split('=')[0])['materialrecords'];
        this.assessmentrecords = JSON.parse((this.response._body).split('=')[1])['assessmentrecords'];
        this.clientsidescore = JSON.parse((this.response._body).split('=')[2])['clientsidescore'];
        this.serversidescore = JSON.parse((this.response._body).split('=')[3])['serversidescore'];
        this.databasescore = JSON.parse((this.response._body).split('=')[4])['databasescore'];
        this.spinnerService.hide();
      });
    

  }

}