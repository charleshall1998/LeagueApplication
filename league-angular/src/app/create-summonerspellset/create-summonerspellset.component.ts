import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { SummonerSpellSet } from '../SummonerSpellSet';

@Component({
  selector: 'app-create-summonerspellset',
  templateUrl: './create-summonerspellset.component.html',
  styleUrls: ['./create-summonerspellset.component.css']
})
export class CreateSummonerspellsetComponent implements OnInit {

  summonerSpellSetName : string;
  championId : number;
  summonerSpellIdList : number[];

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
  }

  createSummonerSpellSet() {
    if(this.summonerSpellSetName === undefined) {
      alert("Summoner Spell Set Name cannot be undefined.");
      return;
    }
    else {
      this.summonerSpellIdList = [];

      for(let i = 1; i < 3; i++) {
        let id = "summonerSpell" + i;
        let rune =  (document.getElementById(id) as HTMLInputElement).value;
        this.summonerSpellIdList.push(parseInt(rune));
      }

      this.championId = parseInt((document.getElementById("championId") as HTMLInputElement).value);

      let toAdd : SummonerSpellSet = {summonerSpellSetName: this.summonerSpellSetName, championId: this.championId, summonerSpellIdList: this.summonerSpellIdList}
      this.service.createSummonerSpellSet(toAdd).subscribe((_) => {this.router.navigate(["/summonerspellsetlist"])});
    }
  }

}
