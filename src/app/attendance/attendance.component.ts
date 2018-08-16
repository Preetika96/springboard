import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  constructor(private http: HttpClient) {}

  uploadForm = new FormGroup({
    field1: new FormControl(),
    field2: new FormControl(),
    field3: new FormControl(),
    field4: new FormControl()
  });

  onSubmit(): void {
    let f1 = this.uploadForm.get('field1').value;
    let f2 = this.uploadForm.get('field2').value;
    let f3 = this.uploadForm.get('field3').value;
    let f4 = this.uploadForm.get('field4').value;

    this.http
      .post(Constants.ATTENDANCE, "val")
      .subscribe(
        data => {
          console.log('Excel generated.: ', data);
        },
        error => {
          console.log('Error: ', error);
        }
      );
  }
}
