import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-show-student-list',
  templateUrl: './show-student-list.component.html',
  styleUrls: ['./show-student-list.component.scss']
})
export class ShowStudentListComponent implements OnInit {
  name : string;
  queryParamsSubscription: Subscription;
  students = [
    {name : 'sagar',score : '100'},
    {name : 'vishal',score : '100'},
    {name : 'preetika',score : '100'},
    {name : 'jaggu',score : '100'}
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
