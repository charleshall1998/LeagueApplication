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
  runeId : number;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { }

  search() : void {
    this.leagueService.getRuneById(this.runeId).subscribe( rune => {
      this.rune = rune;
    });
  }

}
