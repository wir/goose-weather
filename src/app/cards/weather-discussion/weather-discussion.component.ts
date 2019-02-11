import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data/weather-data';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-weather-discussion',
  templateUrl: './weather-discussion.component.html',
  styleUrls: ['./weather-discussion.component.css']
})
export class WeatherDiscussionComponent implements OnInit {

  data = new WeatherData();

  // @Input()
  // set weatherData(weatherData: WeatherData) {
  //   this.data = weatherData || null;
  // }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // subscribe to the observable here
    this.store
      .subscribe(state => this.data = state.weather.weatherData);
  }

}
