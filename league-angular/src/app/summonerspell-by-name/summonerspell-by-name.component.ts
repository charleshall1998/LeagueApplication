import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { SummonerSpell } from '../SummonerSpell';

@Component({
  selector: 'app-summonerspell-by-name',
  templateUrl: './summonerspell-by-name.component.html',
  styleUrls: ['./summonerspell-by-name.component.css']
})
export class SummonerspellByNameComponent implements OnInit {

  summonerSpell : SummonerSpell;
  summonerSpellName : string;
  src : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { }

  search(): void {
    this.summonerSpellName = (document.getElementById("summonerSpellName") as HTMLInputElement).value;

    this.leagueService.getSummonerSpellByName(this.summonerSpellName).subscribe( summonerSpell => {
      this.summonerSpell = summonerSpell;
      this.src = "./assets/images/summonerspells/"+this.summonerSpellName+".png";
    });
  }

}
