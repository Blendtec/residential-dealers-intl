import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { CountryService, DealerService, StateService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { APP_CONFIG, APP_DI_CONFIG } from './config/app-config.module';


describe('AppComponent', () => {

  beforeEach(async(() => {

    const stateSvc = jasmine.createSpyObj('StateService', ['getAll$']);
    stateSvc.getAll$.and.returnValue(Observable.of([]));

    const countrySvc = jasmine.createSpyObj('CountryService', ['getAll$']);
    countrySvc.getAll$.and.returnValue(Observable.of([]));

    const dealerSvc = jasmine.createSpyObj('DealerService', ['getAll$']);
    dealerSvc.getAll$.and.returnValue(Observable.of([]));

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        FormsModule,
        NgPipesModule,
        BrowserModule,
        HttpClientModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        StateService,
        CountryService,
        DealerService,
        {provide: APP_CONFIG, useValue: {}}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have no title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBeUndefined();
  }));

});
