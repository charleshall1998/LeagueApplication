import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from '../Champion';
import { LeagueService } from '../league.service';
import { RuneSet } from '../RuneSet';

@Component({
  selector: 'app-create-runeset',
  templateUrl: './create-runeset.component.html',
  styleUrls: ['./create-runeset.component.css']
})
export class CreateRunesetComponent implements OnInit {

  runeSetName : string;
  championId : number;
  runeIdList : number[];
  championsList : Champion[];

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
    this.service.getAllChampions().subscribe(list => { 
      this.championsList = list;
    });
  }

  createRuneSet() {

    if(this.runeSetName === undefined) {
      alert("Rune Set Name cannot be undefined.");
      return;
    }
    else {
      this.runeIdList = [];

      for(let i = 1; i < 5; i++) {
        let id = "rune" + i;
        let rune =  (document.getElementById(id) as HTMLInputElement).value;
        this.runeIdList.push(parseInt(rune));
      }

      this.championId = parseInt((document.getElementById("championId") as HTMLInputElement).value);

      let toAdd : RuneSet = {runeSetName: this.runeSetName, championId: this.championId, runeIdList: this.runeIdList}
      this.service.createRuneSet(toAdd).subscribe((_) => {this.router.navigate(["/runesetlist"])});
    }
  }

}
