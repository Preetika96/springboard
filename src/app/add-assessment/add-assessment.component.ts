import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';
@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.scss']
})
export class AddAssessmentComponent implements OnInit {
  @ViewChild('f')
  loginForm: NgForm;
  filedata: string | any = '';
  subjects: string [];
  subject = '';
  selectedFile = '';
  obj: any;
  response;
  constructor(  private httpService: HttpService,
                private spinnerService: Ng4LoadingSpinnerService
             ) {}

  ngOnInit() {
    // Fetch SUbjects List from DB
    this.spinnerService.show();
    this.obj =
    {
      'req_type': 1
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
  this.httpService.post_api(Constants.FETCH_STOCK_DATA, JSON.stringify(this.obj), headers)
    .subscribe(data => {
      this.response = data;
      this.subjects = this.response._body.split(',');
      this.subjects.pop();
      this.spinnerService.hide();
    });
  }

  fileEvent(e) {
    this.filedata = e.target.files[0];
    switch (this.filedata.type) {
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
        this.selectedFile = 'You Selected: ' + this.filedata.name;
        break;
      }
      default: {
        this.selectedFile = 'Please select only Excel files...';
        this.filedata = '';
      }
    }
    document.getElementById('name_sp').style.display = 'flex';
  }

  showStudent(sub) {
    this.subject = sub;
    document.getElementById('sub_sp').style.display = 'flex';
  }

  onSubmit() {
    if (this.filedata === '' || this.subject === '') {
      alert('Please select a file to upload and select a subject too');
    } else {
      this.spinnerService.show();
      let _formData = new FormData();
    _formData.append('scoresFile', this.filedata);
    _formData.append('subjectName', this.subject);

      this.httpService.cpost_api(Constants.UPLOAD_SCORES, _formData, 'text')
        .subscribe(data => {
          this.spinnerService.hide();
        });
    }
  }
}
