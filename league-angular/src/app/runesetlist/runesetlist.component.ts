import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { RuneSet } from '../RuneSet';

@Component({
  selector: 'app-runesetlist',
  templateUrl: './runesetlist.component.html',
  styleUrls: ['./runesetlist.component.css']
})
export class RunesetlistComponent implements OnInit {

  runeSets : RuneSet[];

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getAllRuneSets().subscribe(list => {
      this.runeSets = list;
    });
  }

}
