import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from '../../../../node_modules/ng4-loading-spinner';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-show-subjects',
  templateUrl: './show-subjects.component.html',
  styleUrls: ['./show-subjects.component.scss']
})
export class ShowSubjectsComponent implements OnInit {
  subjects = []
  obj: any;
  response;
  constructor(  private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private spinnerService: Ng4LoadingSpinnerService) {}

    ngOnInit() {
      // Fetch SUbjects List from DB
      this.spinnerService.show();
      this.obj =
      {
        'req_type': 3
      }
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
      // Create an Object of Header specifying the content type and pass it to the method
    this.httpService.post_api(Constants.FETCH_STOCK_DATA, JSON.stringify(this.obj), headers)
      .subscribe(data => {
        this.response = data;
       this.subjects = JSON.parse(this.response._body)['records'];       
        this.spinnerService.hide();
      });
    }

}
