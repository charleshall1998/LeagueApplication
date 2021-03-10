import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { SummonerSpell } from '../SummonerSpell';

@Component({
  selector: 'app-summonerspell-by-id',
  templateUrl: './summonerspell-by-id.component.html',
  styleUrls: ['./summonerspell-by-id.component.css']
})
export class SummonerspellByIdComponent implements OnInit {

  summonerSpell : SummonerSpell;
  summonerSpellId : number;
  src : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { }

  search() : void {
    this.summonerSpellId = parseInt((document.getElementById("summonerSpellId") as HTMLInputElement).value);

    this.leagueService.getSummonerSpellById(this.summonerSpellId).subscribe( summonerSpell => {
      this.summonerSpell = summonerSpell;
      this.src = "./assets/images/summonerspells/"+this.summonerSpell.summonerSpellName+".png";
    });
  }

}
