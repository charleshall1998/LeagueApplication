import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
  }

  createRuneSet() {
    this.runeIdList = [];

    for(let i = 1; i < 7; i++) {
      let id = "rune" + i;
      let rune =  (document.getElementById(id) as HTMLInputElement).value;
      this.runeIdList.push(parseInt(rune));
    }

    let toAdd : RuneSet = {runeSetName: this.runeSetName, championId: this.championId, runeIdList: this.runeIdList}
    this.service.createRuneSet(toAdd).subscribe((_) => {this.router.navigate([""])});
  }

}
