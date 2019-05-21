import { Component } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

   public getName(): string{

    return 'Wiliam Ferraciolli';
  }

  public getDate(): string{

    return 'Mon 01 2019';
  }

   public getEventsCount(): number{

    return 5;
  }

  public getSartDate(): Moment{
    
    return moment('2018-01-01');
  }

  public getEndDate(): Moment {

    return moment('2018-01-31');
  }
}


