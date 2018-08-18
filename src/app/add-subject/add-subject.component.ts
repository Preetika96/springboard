import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  subjectForm: FormGroup;
  name : string;
  code : string;
  subjects  : {name:string, code : string}[] = [];
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.subjectForm = new FormGroup({ 
      'name' : new FormControl(null , [Validators.required]),
      'code' : new FormControl(null , [Validators.required])
    });
  }

  onSubmit(){
      this.code = this.subjectForm.value.code;
      this.name = this.subjectForm.value.name;
     
      this.subjects.push({name : this.name , code : this.code});
   
  }

  showSubject(){
    this.router.navigate(['show-subjects'], {relativeTo : this.route});
  }
}
