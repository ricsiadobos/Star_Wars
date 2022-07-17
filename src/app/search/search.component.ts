import { Component, OnInit } from '@angular/core';
import { MoviesTableComponent } from '../movies-table/movies-table.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  seachCharacters : string = "";
  constructor() { }

  ngOnInit(): void {
  }


  filmSearch(e: Event){
  console.log(e);
    this.seachCharacters = (<HTMLInputElement>e.target).value;
    console.log(this.seachCharacters);

    if(this.seachCharacters.length > 2){
    console.log("sikerült !!!");
   MoviesTableComponent.prototype.filmListFilter(this.seachCharacters);
    }
    
  }

}


