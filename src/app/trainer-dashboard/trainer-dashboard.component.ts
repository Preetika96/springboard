import { Component, OnInit, Inject } from '@angular/core';

import { Constants } from '../Constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';


@Component({
  selector: 'app-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.scss']
})
export class TrainerDashboardComponent implements OnInit {
  obj;
  response;
  materialrecords;
  clientside;
  serverside;
  database;
  constructor(public dialog: MatDialog, 
              private http: HttpService, 
              private session : SessionService,
              private spinnerService : Ng4LoadingSpinnerService) {}

  ngOnInit() {
      this.obj =
      {
        'req_type': 6,
        'empcode': this.session.getEmployee_ID()
      }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      
    this.spinnerService.show();
    // Create an Object of Header specifying the content type and pass it to the method
    this.http.post_api(Constants.DASHBOARD, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
        this.clientside = JSON.parse((this.response._body).split('=')[0])['clientside'][0];
        this.serverside = JSON.parse((this.response._body).split('=')[1])['serverside'][0];
        this.database = JSON.parse((this.response._body).split('=')[2])['database'][0];
        this.materialrecords = JSON.parse((this.response._body).split('=')[3])['materialrecords'];
        this.spinnerService.hide();
      });

  }

}

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

  // @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dashboard-modal.component.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }