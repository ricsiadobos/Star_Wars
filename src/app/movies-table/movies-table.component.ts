import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Film } from '../models/film';
import {People} from '../models/people';
import { SwDataService } from '../services/sw-data.service';
import {TESTLIST} from '../models/test';



@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})

export class MoviesTableComponent implements OnInit {

  filmList: Array<Film> = [];
  filmList2: any = [];
 
  
  constructor(private swService: SwDataService){

  }
  
  
  ngOnInit(): void {

   
    this.swService.getFilms().subscribe(data => {
      this.filmList= data.results;   //filmList is not Array. There is a obj.
      //this.filmList = TESTLIST;
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


}
