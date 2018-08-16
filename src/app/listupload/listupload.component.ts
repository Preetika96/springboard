import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';

@Component({
  selector: 'app-listupload',
  templateUrl: './listupload.component.html',
  styleUrls: ['./listupload.component.css']
})
export class ListuploadComponent {

  constructor(private httpService: HttpService) {}

  uploadForm = new FormGroup({
    file1: new FormControl()
  });

  filedata: any;
  fileEvent(e) {
    this.filedata = e.target.files[0];
    console.log(e);
  }
  onSubmit(): void {
    let _formData = new FormData();
    _formData.append('scoresFile', this.filedata);
    let body = _formData;

    this.httpService.get_api(Constants.UPLOAD_SCORES, body, 'text').subscribe(
      data => {
        console.log('Scores Uploaded to DB successfully: ', data);
      },
      error => {
        console.log('Error: ', error);
      }
    );
  }

}
