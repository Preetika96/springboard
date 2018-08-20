import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';
import { Constants } from '../Constants';

@Component({
  selector: 'app-show-by-assessment',
  templateUrl: './show-by-assessment.component.html',
  styleUrls: ['./show-by-assessment.component.scss']
})
export class ShowByAssessmentComponent implements OnInit {
  subjects: string [];
  obj: any;
  response;
  constructor(  private router: Router,
                private route: ActivatedRoute,
                private httpService: HttpService,
                private spinnerService: Ng4LoadingSpinnerService) {

                  this.router.routeReuseStrategy.shouldReuseRoute = function(){
                    return false;
                 }
            
                 this.router.events.subscribe((evt) => {
                    if (evt instanceof NavigationEnd) {
                       // trick the Router into believing it's last link wasn't previously loaded
                       this.router.navigated = false;
                       // if you need to scroll back to top, here is the right place
                       window.scrollTo(0, 0);
                    }
                });
                }

  ngOnInit() {
    // Fetch SUbjects List from DB
    this.spinnerService.show();
    this.obj =
    {
      'req_type': 1
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
  this.httpService.post_api(Constants.FETCH_STOCK_DATA, JSON.stringify(this.obj), headers)
    .subscribe(data => {
      this.response = data;
      this.subjects = this.response._body.split(',');
      this.subjects.pop();
      this.spinnerService.hide();
    });
  }

  showStudent(subject){
    this.router.navigate(['student-list'], {relativeTo : this.route, queryParams : {name : subject}});
  }
}
