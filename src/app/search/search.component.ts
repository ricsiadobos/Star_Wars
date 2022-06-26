import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  filmSearch(e: any): void{
    let szoveg = "sfvsaf"
    let textbox = document.getElementById("searchTb");
    if(e.searchTb.value < 1){
    console.log("sikerült !!!");
    }
  }

}
