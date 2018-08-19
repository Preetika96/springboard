import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  filedata: any;
  uploadForm = new FormGroup({
    file1: new FormControl()
  });

  constructor(private httpService: HttpService, private spinner : Ng4LoadingSpinnerService) {}

  fileEvent(e) {
    this.filedata = e.target.files[0];
    console.log(e);
  }

  onSubmit(): void {
    this.spinner.show();
    let _formData = new FormData();
    _formData.append('file', this.filedata);
    let body = _formData;

    this.httpService.cpost_api(Constants.UPLOAD_FILE, body, 'text').subscribe(
      data => {
        this.spinner.hide();
        console.log('Received data from Backend: ', data);
      },
      error => {
        this.spinner.hide();
        console.log('Error: ', error);
      }
    );
  }
}
