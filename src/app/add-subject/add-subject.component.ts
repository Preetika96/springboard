import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  subjectForm: FormGroup;
  name: string;
  code: string;
  type="";
  types = ["Client-Side", "Server-side" , "Database"]
  subjects  : {name:string, type : string}[] = [];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subjectForm = new FormGroup({
      name: new FormControl(null, [Validators.required])      
    });
  }

  showType(type){
    this.type = type;
    alert(this.type);
  }

  onSubmit() {   
    this.name = this.subjectForm.value.name;
    if (this.type === "" || this.name === null) {
      alert('Values cannot be empty');
    } else {
      this.subjects.push({name : this.name ,type : this.type});
      alert(this.name);
    }
  }

  showSubject() {
    this.router.navigate(['show-subjects'], { relativeTo: this.route });
  }
}
