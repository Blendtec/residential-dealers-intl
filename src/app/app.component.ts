import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {ICountry, IDealer} from './models';
import {CountryService, DealerService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnDestroy {

  public dealers: Observable<IDealer[]>;
  public countries: Observable<ICountry[]>;
  public country = 'default';

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(dealerService: DealerService, countryService: CountryService) {
    this.dealers = dealerService.getAll$();
    this.countries = countryService.getAll$();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
