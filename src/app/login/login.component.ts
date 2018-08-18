import { Router } from '@angular/router';
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
  errorMsg = "";
  constructor(private httpService: HttpService, private router:Router ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      empcode: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const header = new Headers({ 'Content-Type': 'text/plain' });
    this.httpService.post_api(Constants.LOGIN, this.loginForm.value, header)
      .subscribe(data => {
        console.log(data);
      });
      this.router.navigate(['/trainer/dashboard']);
  }
}
