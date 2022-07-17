import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesTableComponent } from './movies-table/movies-table.component';
import { CharactersComponent } from './characters/characters.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from'@angular/common/http';

//service
import {SwDataService} from './services/sw-data.service';

//Data


//material
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, 
    MoviesTableComponent,
    CharactersComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule
    

    
  ],
  providers: [
    SwDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
