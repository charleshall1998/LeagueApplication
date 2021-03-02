import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from './Champion';
import { Item } from './Item';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  baseUrl : string = "http://localhost:8080/api";
  httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(private http : HttpClient) { }


  //Champion methods
  getAllChampions() : Observable<Champion[]> {
    return this.http.get<Champion[]>(this.baseUrl + "/champions")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : Champion[] = [];
        return of(empty);
      })
      );
  }

  getChampionByName(name : string) : Observable<Champion> {
    return this.http.get<Champion>(this.baseUrl + "/champions/name/" + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getChampionById(id : number) : Observable<Champion> {
    return this.http.get<Champion>(this.baseUrl + "/champions/id/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  //Item Methods
  getAllItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl + "/items")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : Item[] = [];
        return of(empty);
      })
      );
  }

  getItemByName(name : string) : Observable<Item> {
    return this.http.get<Item>(this.baseUrl + "/items/name/" + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getItemById(id : number) : Observable<Item> {
    return this.http.get<Item>(this.baseUrl + "/items/id/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  //Rune Methods

  //Summoner Spell Methods
}
