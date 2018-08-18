import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-assessment',
  templateUrl: './add-assessment.component.html',
  styleUrls: ['./add-assessment.component.scss']
})
export class AddAssessmentComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  //filedata : any="";
  filedata:string|any=""; 
  subjects = ['html','css'];
  subject : string;
  constructor() { }

  ngOnInit() {
  }

  fileEvent(e){
    this.filedata = e.target.files[0];
    console.log(this.filedata.name);
    document.getElementById("name_sp").style.display = "flex";
  }

  onSubmit(){
    alert("submit")
  }

  showStudent(subject){
    this.subject = subject;
    alert(this.subject);
  }

}
