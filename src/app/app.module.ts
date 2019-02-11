import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { WeatherComponent } from './weather/weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurrentConditionsComponent } from './cards/current-conditions/current-conditions.component';
import { WeatherDiscussionComponent } from './cards/weather-discussion/weather-discussion.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxdModule } from '@ngxd/core';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { WeeklyForecastComponent } from './cards/weekly-forecast/weekly-forecast.component';
import { HourlyForecastComponent } from './cards/hourly-forecast/hourly-forecast.component';
import { AboutMobileComponent } from './cards/about-mobile/about-mobile.component';
import { AboutDesktopComponent } from './cards/about-desktop/about-desktop.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    PageNotFoundComponent,
    CurrentConditionsComponent,
    WeatherDiscussionComponent,
    WeeklyForecastComponent,
    HourlyForecastComponent,
    AboutMobileComponent,
    AboutDesktopComponent
  ],
  entryComponents: [
    CurrentConditionsComponent,
    WeatherDiscussionComponent,
    WeeklyForecastComponent,
    HourlyForecastComponent,
    AboutDesktopComponent,
    AboutMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    LayoutModule,
    HttpClientModule,
    NgxdModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
