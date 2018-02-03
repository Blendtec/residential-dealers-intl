import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService, StateService, DealerService } from './services';
import { AppConfigModule } from './config';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppConfigModule,
    BrowserModule,
    HttpClientModule,
    NgPipesModule,
    FormsModule
  ],
  providers: [
    CountryService,
    StateService,
    DealerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
