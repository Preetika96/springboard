import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Headers } from '@angular/http';
import { Constants } from '../Constants';
import { HttpService } from '../http.service';
import { SessionService } from '../session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message:string;
  data_body;
  objects=[];
  errorMsg = "";
  constructor(private httpService: HttpService, private router:Router, private Session:SessionService ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      empcode: new FormControl(null, [
        Validators.required,
      ]),
      password: new FormControl(null, [Validators.required])
    });
  }
  
  onSubmit() {
    let ele = document.getElementById('div_login');
      ele.style.opacity = '0';
      ele.parentElement.parentElement.classList.add('circle-login');
    setTimeout(function(){
      let ele = document.getElementById('div_login');
      ele.style.opacity = '1';
      ele.parentElement.parentElement.classList.remove('circle-login');
    },1000);

    const header = new Headers({ 'Content-Type': 'text/plain' });
    this.httpService.post_api(Constants.LOGIN, this.loginForm.value, header)
      .subscribe(data => {
        this.data_body=data;
        this.data_body=JSON.parse(this.data_body._body)['result'][0];
        // console.log(this.data_body);
        if(this.data_body['message'].toString() === "Login Successful" ){
          this.Session.setSession(this.data_body['name'],this.data_body['empcode'],this.data_body['role']);
          Swal({
            title:"Login Successful",
            type:'success',
            showConfirmButton: false,
            timer: 2000
          })
          this.Redirect();
        }
        else if(this.data_body['message'].toString() === "Password Incorrect" ) {
          Swal({
            title:"Password Incorrect",
            type:'error',
            showConfirmButton: false,
            timer: 2000
          })
        }
        else if(this.data_body['message'].toString() === "Employee Code does not exist" ){
          Swal({
            title:"Invalid",
            text:"Entered Employee Code doesn't exist",
            type:'warning',
            showConfirmButton: false,
            timer: 2000
          })
        }
      },
        (error)=>{
          Swal({
            title:"Error",
            type:'error',
            text:error,
            showConfirmButton: false,
            timer: 2000
          })
        }
      );
    
    // The response message is "Login Successful" if the user is valid and the emloyee id exists else "User not found" 
    // If the employee id is wrong the returned message is "Employee Code doesn't exist".
  
    ////  this.router.navigate(['/trainer/dashboard']); 
  }

  Redirect(){
    if(this.data_body['role']==="student"){
      this.router.navigate(['/student']);
    }
    else if(this.data_body['role']==="trainer"){
      this.router.navigate(['/trainer']);
    }
  }

}