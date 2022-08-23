import { Component, Input, Output } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})

export class MoviesTableComponent {

  @Input() filmList: Array<Film> = [];
  filteredfilmList: Array<Film> = [];
  @Input() hidden_character : any;
  
  //#region Checkbox
  hidden_table : boolean = false;
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
  
}