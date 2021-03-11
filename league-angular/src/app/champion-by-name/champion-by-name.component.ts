import { Component, OnInit, Renderer2 } from '@angular/core';
import { Champion } from '../Champion';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-champion-by-name',
  templateUrl: './champion-by-name.component.html',
  styleUrls: ['./champion-by-name.component.css']
})
export class ChampionByNameComponent implements OnInit {

  champion : Champion;
  championName : string = " ";
  src : string = " ";
  championNameContainer : string;
  championInfoContainer : string;
  championsList : Champion[];

  constructor(private service : LeagueService) { }

  ngOnInit(): void {
    this.service.getAllChampions().subscribe(list => { 
      this.championsList = list;
    });
  }

  search(): void {
    this.championName = (document.getElementById("championName") as HTMLInputElement).value;
    this.championNameContainer = '<h1>'+this.championName+'</h1>';

    this.service.getChampionByName(this.championName).subscribe( champ => {
      this.champion = champ;
      
      this.src = "./assets/images/splash/"+this.championName+".jpg";

      this.championInfoContainer = '<p>'+this.champion.championDescription+'</p>'
      +'<p> KDA: '+this.champion.avgKDA+'</p>'
      +'<p>Win Rate: '+this.champion.winRate+'%</p>'
      +'<p>Pick Rate: '+this.champion.pickRate+'%</p>'
      +'<p>Ban Rate: '+this.champion.banRate+'%</p>';
    });
  }

}
