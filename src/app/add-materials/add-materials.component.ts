import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.scss']
})
export class AddMaterialsComponent implements OnInit {
  filedata:string|any=""; 
  subject : string;
  subjects = ['html','css'];
  @ViewChild('f') loginForm: NgForm;
  constructor() { }

  ngOnInit() {
  }

  fileEvent(e){
    this.filedata = e.target.files[0];
    console.log(e);
    document.getElementById("name_sp").style.display = "flex";
  }

  onSubmit(){
    alert("submit");
  }

  showStudent(subject){
    this.subject = subject;
  }

}
