import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Constants } from '../Constants';
import { Ng4LoadingSpinnerService } from '../../../node_modules/ng4-loading-spinner';

@Component({
  selector: 'app-show-by-students',
  templateUrl: './show-by-students.component.html',
  styleUrls: ['./show-by-students.component.scss']
})
export class ShowByStudentsComponent implements OnInit {
  students: string [];
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
      'req_type': 2
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    // Create an Object of Header specifying the content type and pass it to the method
  this.httpService.post_api(Constants.FETCH_STOCK_DATA, JSON.stringify(this.obj), headers)
    .subscribe(data => {
      this.response = data;
      this.students = this.response._body.split(',');
      this.students.pop();
      this.spinnerService.hide();
    });
  }

  showAssessment(student){
    //this.router.navigate(['../'], {relativeTo : this.route} );
    this.router.navigate(['assessment-list'], {relativeTo : this.route, queryParams : {name : student} } );
  }
}
