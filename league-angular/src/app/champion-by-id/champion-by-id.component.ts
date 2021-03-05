import { Component, OnInit } from '@angular/core';
import { Champion } from '../Champion';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-champion-by-id',
  templateUrl: './champion-by-id.component.html',
  styleUrls: ['./champion-by-id.component.css']
})
export class ChampionByIdComponent implements OnInit {

  champion : Champion;
  championId : number;
  src : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { }

  search() : void {
    this.leagueService.getChampionById(this.championId).subscribe( champ => {
      this.champion = champ;
      this.src = "./assets/images/splash/"+this.champion.championName+".jpg";
    });
  }

}
