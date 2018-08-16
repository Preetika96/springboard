import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {Http,Headers} from '@angular/http';
import { Constants } from '../Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private http:Http) { }
  errorMsg = "";
  ngOnInit() {
    this.loginForm = new FormGroup({
      'empcode' : new FormControl(null, [Validators.required,,this.invalidempcode.bind(this)]),
      'password' : new FormControl(null, [Validators.required])
    });
  }

  invalidempcode(control:FormControl):{[s:string]: boolean}{

    if(isNaN(control.value)){
      return {'empcodeisnotnum' : true};
    }
    return null;
}

  message;
  onSubmit(){
    
    // if(this.loginForm.value.email === 'mishra.sagar25@gmail.com' && this.loginForm.value.password === 'sagar0987'){
    //   alert('login');
    //    document.getElementById("sp").style.display = "none";
    //    this.loginForm.reset();
    // }
    // else{
    //   this.errorMsg = "email or password is incorrect";
    //   document.getElementById("sp").style.display = "flex "
    // }
    const heade = new Headers({ "Content-Type": "text-plain" });
    this.http.post(Constants.LOGIN,this.loginForm.value,{headers : heade})
      .subscribe((data)=>{this.message=data;console.log(this.message)});
  }


}
