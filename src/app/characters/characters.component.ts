import { Component, Input, OnInit, Output } from '@angular/core';
import { People } from '../models/people';
import { TESTPEOPLE } from '../models/testPeople';
import { SearchComponent } from '../search/search.component';
import { SwDataService } from '../services/sw-data.service';
import { MoviesTableComponent } from '../movies-table/movies-table.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characterList: Array<People> = [];
  @Output() hidden_character :boolean = true;
  //@Input() showCharacters(e : any) : void;
  constructor(private swService: SwDataService) { }

  ngOnInit(): void {


    this.swService.getCharacters().subscribe(data => {
      this.characterList = data.results;
      console.log(this.characterList); 

    })
  }

}
