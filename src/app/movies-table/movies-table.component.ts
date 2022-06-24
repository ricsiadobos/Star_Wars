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

  filmList: Film[] = TESTLIST;
  filmList2: Array<Film> = [];
  characterList: Array<People> = [];
  
  
  constructor(private swService: SwDataService){

  }
  
  
  
 
  
  ngOnInit(): void {

    //test
    //this.filmList = TESTLIST;
    
    this.swService.getFilms().subscribe(data => {
      this.filmList = data;
      });

      /*
      this.filmList2.forEach(element => {
        let film: Film;
        this.filmList.push(film = {
          title : element.title, 
          episode_id: element.episode_id,
          opening_crawl:element.opening_crawl,
          director: element.director, 
          producer: element.producer,
          release_date: element.release_date
        })});
   */

      console.log(this.filmList); 


    this.swService.getCharacters().subscribe(data => {
      this.characterList = data;
      console.log(this.characterList); 

     
      
    })


    
    
    
  }

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
/*
   
  */
  

}
