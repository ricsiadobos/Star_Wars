import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class SwDataService {

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Array<Film>>{
    return this.http.get<Array<Film>>('https://swapi.dev/api/films/')

  }

  getCharacters(): Observable<Array<People>>{
    return this.http.get<Array<People>>('https://swapi.dev/api/people/')

  }


}
