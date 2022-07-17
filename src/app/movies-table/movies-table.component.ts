import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, Output } from '@angular/core';
import { data } from 'jquery';
import { Film } from '../models/film';
import {People} from '../models/people';
import { SwDataService } from '../services/sw-data.service';
import {TESTLIST} from '../models/test';
import { CharactersComponent } from '../characters/characters.component';
import { SearchComponent } from '../search/search.component';
import { CloseScrollStrategy } from '@angular/cdk/overlay';


@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})

export class MoviesTableComponent implements OnInit {

  filmList: Array<Film> = [];
  filteredfilmList: Array<Film> = [];
  @Input() hidden_character : any;
  
  
  constructor(private swService: SwDataService){
    
  }
  
  
  ngOnInit(): void {

   
    this.swService.getFilms().subscribe(data => {
      this.filmList= data.results;   //filmList is not Array. There is a obj.
    });


    
  }

//#region Checkbox
  checkBoxs=false;
  checkAll=false;

checkBoxFunction(e:any): void{
    this.checkBoxs = true;
    if(e.target.checked){
      this.checkBoxs= true;
    }else{
      this.checkBoxs= false;
    }
  }
  //#endregion

  filmListFilter(searchCharacters: string){
   
    //itt kéne a film címek alapján szűrni
    
  }
  


  
  //#region showCharacters

  hidden_table : boolean = false;
  @Output() showCharacters(e : any) : void{
   if (!this.hidden_table) {
    var majom = "nagy majom";
    {{console.log(majom); }}
    this.hidden_table = true;
    this.hidden_character = false; 
    } 
       else{
        this.hidden_table = false;
        this.hidden_character = true;
       }


  }
  
  //#endregion

  movieCastList(){
    
  }
  
}