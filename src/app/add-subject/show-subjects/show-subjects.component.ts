import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-subjects',
  templateUrl: './show-subjects.component.html',
  styleUrls: ['./show-subjects.component.scss']
})
export class ShowSubjectsComponent implements OnInit {
  subjects = [
    {name : 'html', code : 101},
    {name : 'css', code : 102}
  ]
  constructor() { }

  ngOnInit() {
  }

}
