import { Component } from '@angular/core';
import { Film } from './models/film';
import { SwDataService } from './services/sw-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StarWars';
  getFilmList: Array<Film> = [];
  filteredFilmList: Array<Film> = [];

  constructor(private swService: SwDataService) { }

  ngOnInit(): void {
    this.swService.getFilms().subscribe(data => {
      this.getFilmList = data.results;
    });
  }

  setFilmList($event: Array<Film>) {
    this.filteredFilmList = $event;
  }

}
