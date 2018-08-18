import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  subjectForm: FormGroup;
  name: string;
  type = '<click>';
  types = ['Client Side', 'Server side', 'Database'];
  subjects: { name: string; type: string }[] = [];
  output: JSON;
  obj: any;

  constructor(  private router: Router, 
                private route: ActivatedRoute,
                private httpService: HttpService,
                private spinnerService: Ng4LoadingSpinnerService) {}

  ngOnInit() {
    this.subjectForm = new FormGroup({
      name: new FormControl(null, [Validators.required])
    });
  }

  showType(type) {
    this.type = type;
    document.getElementById('sub_type').style.display = 'flex';
  }

  onSubmit() {
    this.name = this.subjectForm.value.name;
    if (this.type === '' || this.name === null) {
      alert('Values cannot be empty');
    } else {
      // this.subjects.push({ name: this.name, type: this.type });
      // Send the data to server
      this.spinnerService.show();
      this.obj =
      {
        'subject_name' : this.subjectForm.value.name,
        'subject_type' : this.type
      }
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

      // Create an Object of Header specifying the content type and pass it to the method
    this.httpService.post_api(Constants.ADD_SUBJECT, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        console.log(data);
        this.spinnerService.hide();
      });
  }
}

  showSubject() {
    this.router.navigate(['show-subjects'], { relativeTo: this.route });
  }
}
