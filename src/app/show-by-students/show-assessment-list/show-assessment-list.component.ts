import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-show-assessment-list',
  templateUrl: './show-assessment-list.component.html',
  styleUrls: ['./show-assessment-list.component.scss']
})
export class ShowAssessmentListComponent implements OnInit {
  name: string;
  queryParamsSubscription: Subscription;
  assessments = [];
  response;
  obj: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private spinnerService: Ng4LoadingSpinnerService
  ) {}

  ngOnInit() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (qParams: Params) => {
        this.name = qParams['name'];
      }
    );
    
    // Fetch Students List from DB
    this.spinnerService.show();
    this.obj = {
      req_type: 5,
      student_name: this.name
    };
    const headers = new Headers();
    headers.append(
      'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'
    );

    // Create an Object of Header specifying the content type and pass it to the method
    this.httpService
      .post_api(Constants.FETCH_STOCK_DATA, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
        this.assessments = JSON.parse(this.response._body)['records'];
        this.spinnerService.hide();
      });
  }
}
