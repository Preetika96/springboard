import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-by-students',
  templateUrl: './show-by-students.component.html',
  styleUrls: ['./show-by-students.component.scss']
})
export class ShowByStudentsComponent implements OnInit {
  students = ['sagar','vishal','preetika','jaggu'];
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  showAssessment(student){
    this.router.navigate(['assessment-list'], {relativeTo : this.route, queryParams : {name : student} } );
  }
}
