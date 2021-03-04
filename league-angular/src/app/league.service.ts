import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champion } from './Champion';
import { Item } from './Item';
import {tap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import { Rune } from './Rune';
import { SummonerSpell } from './SummonerSpell';
import { SummonerspellComponent } from './summonerspell/summonerspell.component';
import { ItemSet } from './ItemSet';
import { RuneSet } from './RuneSet';
import { SummonerSpellSet } from './SummonerSpellSet';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  baseUrl : string = "http://localhost:8080/api";
  httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})}

  constructor(private http : HttpClient) { }

  //************
  //Champion Methods
  //************
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


  //************
  //Item Methods
  //************ 
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


  //************
  //Item Set Methods
  //************
  createItemSet(toAdd : ItemSet) : Observable<ItemSet> {
    return this.http.post<ItemSet>(this.baseUrl + "/new/itemSet", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  getAllItemSets() : Observable<ItemSet[]> {
    return this.http.get<ItemSet[]>(this.baseUrl + "/itemSets")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : ItemSet[] = [];
        return of(empty);
      })
      );
  }

  getItemSetByName(name : string) : Observable<ItemSet> {
    return this.http.get<ItemSet>(this.baseUrl + "/itemSets/name/" + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getItemSetById(id : number) : Observable<ItemSet> {
    return this.http.get<ItemSet>(this.baseUrl + "/itemSets/id/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  updateItemSet(postData : Object) : Observable<ItemSet> {
    return this.http.put<ItemSet>(this.baseUrl + "/update/itemSet/", postData)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  deleteItemSet(toDelete : number) : Observable<ItemSet> {
    return this.http.delete<ItemSet>(this.baseUrl + "/delete/itemSet/id/" + toDelete)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }


  //************
  //Rune Methods
  //************
  getAllRunes() : Observable<Rune[]> {
    return this.http.get<Rune[]>(this.baseUrl + "/runes")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : Rune[] = [];
        return of(empty);
      })
      );
  }

  getRuneByName(name : string) : Observable<Rune> {
    return this.http.get<Rune>(this.baseUrl + "/runes/name/" + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getRuneById(id : number) : Observable<Rune> {
    return this.http.get<Rune>(this.baseUrl + "/runes/id/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }


  //************
  //Rune Set Methods
  //************
  createRuneSet(toAdd : RuneSet) : Observable<RuneSet> {
    return this.http.post<RuneSet>(this.baseUrl + "/new/runeSet", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  getAllRuneSets() : Observable<RuneSet[]> {
    return this.http.get<RuneSet[]>(this.baseUrl + "/runeSets")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : RuneSet[] = [];
        return of(empty);
      })
      );
  }

  getRuneSetByName(name : string) : Observable<RuneSet> {
    return this.http.get<RuneSet>(this.baseUrl + "/runeSets/name/" + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getRuneSetById(id : number) : Observable<RuneSet> {
    return this.http.get<RuneSet>(this.baseUrl + "/runeSets/id/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  deleteRuneSet(toDelete : number) : Observable<RuneSet> {
    return this.http.delete<RuneSet>(this.baseUrl + "/delete/runeSet/id/" + toDelete)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }
  


  //************
  //Summoner Spell Methods
  //************
  createSummonerSpellSet(toAdd : SummonerSpellSet) : Observable<SummonerSpellSet> {
    return this.http.post<SummonerSpellSet>(this.baseUrl + "/new/summonerSpellSet", toAdd, this.httpOptions)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  getAllSummonerSpells() : Observable<SummonerSpell[]> {
    return this.http.get<SummonerSpell[]>(this.baseUrl + "/summonerSpells")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : SummonerSpell[] = [];
        return of(empty);
      })
      );
  }

  getSummonerSpellByName(name : string) : Observable<SummonerSpell> {
    return this.http.get<SummonerSpell>(this.baseUrl + "/summonerSpells/name/" + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getSummonerSpellById(id : number) : Observable<SummonerSpell> {
    return this.http.get<SummonerSpell>(this.baseUrl + "/summonerSpells/id/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }


  //************
  //Summoner Spell Set Methods
  //************
  getAllSummonerSpellSets() : Observable<SummonerSpellSet[]> {
    return this.http.get<SummonerSpellSet[]>(this.baseUrl + "/summonerSpellSets")
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        let empty : SummonerSpellSet[] = [];
        return of(empty);
      })
      );
  }

  getSummonerSpellSetByName(name : string) : Observable<SummonerSpellSet> {
    return this.http.get<SummonerSpellSet>(this.baseUrl + "/summonerSpellSets/name/" + name)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  getSummonerSpellSetById(id : number) : Observable<SummonerSpellSet> {
    return this.http.get<SummonerSpellSet>(this.baseUrl + "/summonerSpells/id/" + id)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
      );
  }

  deleteSummonerSpellSet(toDelete : number) : Observable<SummonerSpellSet> {
    return this.http.delete<SummonerSpellSet>(this.baseUrl + "/delete/summonerSpellSet/id/" + toDelete)
    .pipe(
      tap(x => console.log(x)),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

}
