import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { SummonerSpellSet } from '../SummonerSpellSet';

@Component({
  selector: 'app-summonerspellsetlist',
  templateUrl: './summonerspellsetlist.component.html',
  styleUrls: ['./summonerspellsetlist.component.css']
})
export class SummonerspellsetlistComponent implements OnInit {

  summonerSpellSets : SummonerSpellSet[];

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getAllSummonerSpellSets().subscribe(list => {
      this.summonerSpellSets = list;
    });
  }

}
