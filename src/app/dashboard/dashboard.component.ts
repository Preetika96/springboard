import { Component, OnInit, Inject } from '@angular/core';
import {Constants} from '../Constants'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpService } from '../http.service';
export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog , private http:HttpService) {}

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



  data_body;

  

  ngOnInit() {
    const header = new Headers({ 'Content-Type': 'text-plain' });
    this.http.post_api(Constants.DASHBOARD,1, header)
      .subscribe(data => {
        this.data_body=data;
        this.data_body=JSON.parse(this.data_body._body)['material_records'];
        // console.log(this.data_body);
        // this.Session.setSession(this.data_body['name'],this.data_body['empcode'],this.data_body['role']);
        // this.Redirect();
      },
        (error)=>{console.log("Bye",error)}
      );
  
  }

}

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