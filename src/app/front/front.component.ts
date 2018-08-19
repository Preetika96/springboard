import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRegister(){
    document.getElementById("back_active").style.left = "350px";
  }

  onAbout(){
    document.getElementById("back_active").style.left = "450px";
  }

  onLogin(){
    document.getElementById("back_active").style.left = "244px";
  }
}
