import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.scss']
})
export class ShowScoreComponent implements OnInit {
  scoreForm : FormGroup;
  shows = ['Show By Students','Show By Assessment'];
  constructor(private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
   this.scoreForm = new FormGroup({
    'show' : new FormControl('Show By Students')
   });
  }

  onSubmit(){
    
    if(this.scoreForm.value.show === 'Show By Students'){   
      this.router.navigate(['by-student'], {relativeTo : this.route});
    } else if (this.scoreForm.value.show === 'Show By Assessment'){
      this.router.navigate(['by-assessment'], {relativeTo : this.route});
    }
  }
}
