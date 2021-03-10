import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { Rune } from '../Rune';

@Component({
  selector: 'app-rune-by-id',
  templateUrl: './rune-by-id.component.html',
  styleUrls: ['./rune-by-id.component.css']
})
export class RuneByIdComponent implements OnInit {

  rune : Rune;
  runeId : number = 0;
  src : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { }

  search() : void {
    this.runeId = parseInt((document.getElementById("runeId") as HTMLInputElement).value);

    this.leagueService.getRuneById(this.runeId).subscribe( rune => {
      this.rune = rune;
      this.src = "./assets/images/runes/"+this.rune.runeName+".png";
    });
  }

}
