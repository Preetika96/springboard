import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';
@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.scss']
})
export class AddAssessmentComponent implements OnInit {
  @ViewChild('f')
  loginForm: NgForm;
  filedata: string | any = '';
  subjects = ['html', 'css'];
  subject = '';
  selectedFile = '';
  constructor(private httpService: HttpService) {}

  ngOnInit() {}

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

      let _formData = new FormData();
    _formData.append('scoresFile', this.filedata);
    _formData.append('subjectName', this.subject);

      this.httpService.cpost_api(Constants.UPLOAD_SCORES, _formData, 'text')
        .subscribe(data => {
          console.log(data);
        });
    }
  }
}
