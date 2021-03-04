import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-delete-summonerspellset',
  templateUrl: './delete-summonerspellset.component.html',
  styleUrls: ['./delete-summonerspellset.component.css']
})
export class DeleteSummonerspellsetComponent implements OnInit {

  summonerSpellSetId : number;

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
  }

  deleteSummonerSpellSet() {
    this.service.deleteSummonerSpellSet(this.summonerSpellSetId).subscribe((_) => {this.router.navigate(["/summonerspellsetlist"])});
    alert("Summoner Spell Set Deleted!");
  }

}
