import { Component, OnInit } from '@angular/core';
import { Champion } from '../Champion';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-champion-by-name',
  templateUrl: './champion-by-name.component.html',
  styleUrls: ['./champion-by-name.component.css']
})
export class ChampionByNameComponent implements OnInit {

  champion : Champion;
  championName : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.leagueService.getChampionByName(this.championName).subscribe( champ => {
      this.champion = champ;
    });
  }

}
