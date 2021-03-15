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
  src : string = " ";
  runeNameContainer : string;
  runeInfoContainer : string;
  runesList : Rune[];

  constructor(private service : LeagueService) { }

  ngOnInit(): void { 
    this.service.getAllRunes().subscribe(list => { 
      this.runesList = list;
    });
  }

  search() : void {
    this.runeId = parseInt((document.getElementById("runeId") as HTMLInputElement).value);

    this.service.getRuneById(this.runeId).subscribe( rune => {
      this.rune = rune;
      this.runeNameContainer = '<h2>'+this.rune.runeName+'</h2>';

      this.src = "./assets/images/runes/"+this.rune.runeName+".png";

      this.runeInfoContainer = '<p>Description: '+this.rune.runeDescription+'</p>'
    });
  }

}
