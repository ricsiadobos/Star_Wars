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

  /*

  getFilms(): Observable<Array<Film>>{
    return this.http.get<Array<Film>>('https://swapi.dev/api/films/')
  }
    */

  getFilms(): Observable<any>{
    return this.http.get<any>('https://swapi.dev/api/films/')
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
  getCharacters(): Observable<any>{
    return this.http.get<any>('https://swapi.dev/api/people/')

  }


}
