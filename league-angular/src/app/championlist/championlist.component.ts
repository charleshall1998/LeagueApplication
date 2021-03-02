import { Component, OnInit } from '@angular/core';
import { Champion } from '../Champion';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-championlist',
  templateUrl: './championlist.component.html',
  styleUrls: ['./championlist.component.css']
})
export class ChampionlistComponent implements OnInit {

  champions : Champion[];

  constructor(private leagueService : LeagueService) { 
  }

  ngOnInit(): void {
    this.leagueService.getAllChampions().subscribe(list => {
      this.champions = list;
    });
  }

}
