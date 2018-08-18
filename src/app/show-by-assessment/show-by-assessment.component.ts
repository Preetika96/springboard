import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-by-assessment',
  templateUrl: './show-by-assessment.component.html',
  styleUrls: ['./show-by-assessment.component.scss']
})
export class ShowByAssessmentComponent implements OnInit {
  subjects = ['html','css'];
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  showStudent(subject){
    this.router.navigate(['student-list'], {relativeTo : this.route, queryParams : {name : subject}});
  }
}
