import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Headers } from '@angular/http';
import { Constants } from '../Constants';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      empcode: new FormControl(null, [
        Validators.required,
        this.invalidempcode.bind(this)
      ]),
      password: new FormControl(null, [Validators.required])
    });
  }

  invalidempcode(control: FormControl): { [s: string]: boolean } {
    if (isNaN(control.value)) {
      return { empcodeisnotnum: true };
    }
    return null;
  }

  onSubmit() {
    const header = new Headers({ 'Content-Type': 'text-plain' });
    this.httpService.post_api(Constants.LOGIN, this.loginForm.value, header)
      .subscribe(data => {
        console.log(data);
      });
  }
}
