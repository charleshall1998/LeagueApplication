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
  championId : number = 0;
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

  search() : void {
    this.championId = parseInt((document.getElementById("championId") as HTMLInputElement).value);

    this.service.getChampionById(this.championId).subscribe( champ => {
      this.champion = champ;
      
      this.src = "./assets/images/splash/"+this.champion.championName+".jpg";

      this.championNameContainer = '<h1>'+this.champion.championName+'</h1>';
      this.championInfoContainer = '<p>'+this.champion.championDescription+'</p>'
      +'<p> KDA: '+this.champion.avgKDA+'</p>'
      +'<p>Win Rate: '+this.champion.winRate+'%</p>'
      +'<p>Pick Rate: '+this.champion.pickRate+'%</p>'
      +'<p>Ban Rate: '+this.champion.banRate+'%</p>';
    });
  }

}
