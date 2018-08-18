import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-assessment-list',
  templateUrl: './show-assessment-list.component.html',
  styleUrls: ['./show-assessment-list.component.scss']
})
export class ShowAssessmentListComponent implements OnInit {
  name : string;
  queryParamsSubscription: Subscription;
  assessments = [
    {name : 'html',score : '100'},
    {name : 'css',score : '100'}
  ]
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.
    subscribe(
      (qParams : Params ) => {
        this.name = qParams['name'];
      }
      )
  }

}
