import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { Rune } from '../Rune';

@Component({
  selector: 'app-rune-by-name',
  templateUrl: './rune-by-name.component.html',
  styleUrls: ['./rune-by-name.component.css']
})
export class RuneByNameComponent implements OnInit {

  rune : Rune;
  runeName : string = " ";
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

  search(): void {
    this.runeName = (document.getElementById("runeName") as HTMLInputElement).value;

    this.service.getRuneByName(this.runeName).subscribe( rune => {
      this.rune = rune;
      this.runeNameContainer = '<h2>'+this.rune.runeName+'</h2>';

      this.src = "./assets/images/runes/"+this.rune.runeName+".png";

      this.runeInfoContainer = '<p>Description: '+this.rune.runeDescription+'</p>'
    });
  }

}
