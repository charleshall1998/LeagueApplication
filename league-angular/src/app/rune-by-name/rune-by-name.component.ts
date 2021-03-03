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
  runeName : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    
  }

  search(): void {
    this.leagueService.getRuneByName(this.runeName).subscribe( rune => {
      this.rune = rune;
    });
  }

}
