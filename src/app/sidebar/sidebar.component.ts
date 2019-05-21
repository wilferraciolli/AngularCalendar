import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public startDate: moment.Moment;

  @Input()
  public endDate: moment.Moment;

  public date: string;

  constructor() { }

  ngOnInit() {
  }

  //Handles on changes events to work out date
  ngOnchanges(changes: SimpleChanges): void{
     if(changes.startDate && changes.endDate){
       this.date = this._resolveDate(this.startDate, this.endDate);
     } 
  }

  //checks that the start and end date are the same and format
  private _resolveDate(startDate: moment.Moment, endDate: moment.Moment): string {
    if(startDate && endDate){
      const DAY_FORMAT: string = 'ddd DD';
      const TODAY_FORMAT: string = 'DD MMM YYYY';
      const FULL_DAY_FORMAT: string = 'ddd DD MMM YYYY';

      if(startDate.isSame(endDate)){

        return startDate.format(TODAY_FORMAT);
      }else{

        return [startDate.format(DAY_FORMAT), endDate.format(FULL_DAY_FORMAT)].join(' - ');
      }
    }

    return '';
  }

}