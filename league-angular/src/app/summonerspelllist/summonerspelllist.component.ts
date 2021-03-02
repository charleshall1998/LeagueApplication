import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { SummonerSpell } from '../SummonerSpell';

@Component({
  selector: 'app-summonerspelllist',
  templateUrl: './summonerspelllist.component.html',
  styleUrls: ['./summonerspelllist.component.css']
})
export class SummonerspelllistComponent implements OnInit {

  summonerSpells : SummonerSpell[];

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getAllSummonerSpells().subscribe(list => {
      this.summonerSpells = list;
    });
  }

}
