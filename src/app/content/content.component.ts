import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public getName(): string{
    console.log('-----------------------------------get anme was called');
    return 'Wiliam Ferraciolli';
  }

  public getSartDate(): Moment{
       return moment('2018-01-01');
  }

  public getEndDate(): Moment {

    return moment('2018-01-31');
  }

}