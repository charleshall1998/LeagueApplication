import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { RuneSet } from '../RuneSet';

@Component({
  selector: 'app-runeset',
  templateUrl: './runeset.component.html',
  styleUrls: ['./runeset.component.css']
})
export class RunesetComponent implements OnInit {

  @Input() runeSet : RuneSet;

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
  }

  deleteRuneSet(runeSetId : number) {
    confirm("Are you sure you want to delete this set?");
    this.service.deleteRuneSet(runeSetId).subscribe((_) => {this.router.navigate(["/runesetlist"])});
  }

}
