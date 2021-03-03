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

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { }

  search() : void {
    this.leagueService.getSummonerSpellById(this.summonerSpellId).subscribe( summonerSpell => {
      this.summonerSpell = summonerSpell;
    });
  }

}
