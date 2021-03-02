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

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    // this.leagueService.getChampionByName("Aatrox").subscribe( champ => {
    //   this.champion = champ;
    // });

    // this.leagueService.getChampionById(2).subscribe( champ => {
    //   this.champion = champ;
    // });
  }

}
