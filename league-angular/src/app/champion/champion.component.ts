import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../Champion';
import { LeagueService } from '../league.service';



@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  @Input() champion : Champion;
  src : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { 
    this.src = "./assets/images/champions/" + this.champion.championName + ".png";
  }

}
