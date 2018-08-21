import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.scss']
})
export class AddMaterialsComponent implements OnInit {
  @ViewChild('f')
  loginForm: NgForm;
  filedata: string | any = '';
  subjects: string [];
  subject = '';
  selectedFile = '';
  obj: any;
  response;
  constructor(private httpService: HttpService, private spinnerService: Ng4LoadingSpinnerService) {}

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
    this.selectedFile = 'You Selected: ' + this.filedata.name;
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
    _formData.append('material', this.filedata);
    _formData.append('material_sub', this.subject);

      this.httpService.cpost_api(Constants.ADD_MATERIAL, _formData, 'text')
        .subscribe(data => {
          console.log(data);
          Swal({
            title:"Success",
            type:"success",
            text:"File Uploaded Successfully",
            showConfirmButton: false,
            timer: 2000
          })
          this.spinnerService.hide();
        });
    }
  }

}
