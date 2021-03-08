import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { SummonerSpellSet } from '../SummonerSpellSet';

@Component({
  selector: 'app-summonerspellset',
  templateUrl: './summonerspellset.component.html',
  styleUrls: ['./summonerspellset.component.css']
})
export class SummonerspellsetComponent implements OnInit {

  @Input() summonerSpellSet : SummonerSpellSet;
  

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
  }

  deleteSummonerSpellSet(summonerSpellSetId : number) {
    confirm("Are you sure you want to delete this set?");
    this.service.deleteSummonerSpellSet(summonerSpellSetId).subscribe((_) => {this.router.navigate(["/summonerspellsetlist"])});
  }

}
