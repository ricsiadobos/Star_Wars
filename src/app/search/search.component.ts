import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input("searchFilmList") filmList: Array<Film> = [];
  @Output() updateFilmList = new EventEmitter<Array<Film>>();

  private searchCharacters: string = "";

  search(e: Event) {
    this.searchCharacters = (<HTMLInputElement>e.target).value;
    if (this.searchCharacters.length >= 2) {
      const filteredList = this.filmFilter(this.searchCharacters, this.filmList);
      this.updateFilmList.emit(filteredList);
    } else {
      this.updateFilmList.emit(this.filmList);
    }
  }

  filmFilter(searchCharacters: string, list: Array<Film>): Array<Film> {
    return list.filter((listItem) => {
      return listItem.title.includes(searchCharacters);  //logic  ha true bele kerül a return-be
    })
  }
}


