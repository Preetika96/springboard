import { Component, OnInit, Inject } from '@angular/core';
import { Constants } from '../Constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';


@Component({
  selector: 'app-training-material',
  templateUrl: './training-material.component.html',
  styleUrls: ['./training-material.component.scss']
})
export class TrainingMaterialComponent implements OnInit {
  obj;
  response;
  materialrecords;
  constructor(private http: HttpService, 
              private session : SessionService,
              private spinnerServ : Ng4LoadingSpinnerService) {}

  ngOnInit() {
    this.spinnerServ.show();
      this.obj =
      {
        'req_type': 9,
        'empcode': this.session.getEmployee_ID()
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
    this.http.post_api(Constants.DASHBOARD, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
        this.materialrecords = JSON.parse(this.response._body)['materialrecords'];
        this.spinnerServ.hide();
      });

  }

}