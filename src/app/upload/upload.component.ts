import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';

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

  constructor(private httpService: HttpService) {}

  fileEvent(e) {
    this.filedata = e.target.files[0];
    console.log(e);
  }

  onSubmit(): void {
    let _formData = new FormData();
    _formData.append('file', this.filedata);
    let body = _formData;

    this.httpService.cpost_api(Constants.UPLOAD_FILE, body, 'text').subscribe(
      data => {
        console.log('Received data from Backend: ', data);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }
}
