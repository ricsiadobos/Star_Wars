import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Film } from '../models/film';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class SwDataService {

  constructor(private http: HttpClient) {}

  
  getFilms(): Observable<Array<Film>>{
    return this.http.get<Array<Film>>('https://swapi.dev/api/films/1')
  }
  /*
  getFilms(): Observable<Array<Film>>{
    return this.http.get<Array<Film>>('https://swapi.dev/api/films/').pipe(
      map((res: any) =>
        res.map((data: Film) => {
        return {
    title : data.title,
    episode_id: data.episode_id,
    opening_crawl: data.opening_crawl,
    director: data.director,
    producer: data.producer,
    release_date: data.release_date

        }
    })))

  }
*/
  getCharacters(): Observable<Array<People>>{
    return this.http.get<Array<People>>('https://swapi.dev/api/people/')

  }


}
