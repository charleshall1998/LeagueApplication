import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { Rune } from '../Rune';

@Component({
  selector: 'app-runelist',
  templateUrl: './runelist.component.html',
  styleUrls: ['./runelist.component.css']
})
export class RunelistComponent implements OnInit {

  runes : Rune[];

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getAllRunes().subscribe(list => {
      this.runes = list;
    });
  }

}
