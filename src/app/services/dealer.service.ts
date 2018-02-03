import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {IDealer} from '../models';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, AppConfig} from '../config';

@Injectable()
export class DealerService {

  private _resource = 'international-dealers.json';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
  }

  public getAll$(): Observable<IDealer[]> {
    return this.http.get<IDealer[]>(`${this.config.s3}/${this._resource}`)
      .map(dealers => dealers.filter(dealer => dealer.type === '1'));
  }
}
