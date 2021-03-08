import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { SummonerSpellSet } from '../SummonerSpellSet';

@Component({
  selector: 'app-update-summonerspellset',
  templateUrl: './update-summonerspellset.component.html',
  styleUrls: ['./update-summonerspellset.component.css']
})
export class UpdateSummonerspellsetComponent implements OnInit {

  body : SummonerSpellSet;
  summonerSpellSetId : number;
  summonerSpellSetName : string;
  championId : number;
  summonerSpellIdList : number[];

  constructor(private service : LeagueService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.summonerSpellSetId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  updateSummonerSpellSet() {
    
    this.summonerSpellIdList = [];

    for(let i = 1; i < 3; i++) {
      let id = "summonerSpell" + i;
      let rune =  (document.getElementById(id) as HTMLInputElement).value;
      this.summonerSpellIdList.push(parseInt(rune));
    }

    this.body = {summonerSpellSetId: this.summonerSpellSetId, summonerSpellSetName: this.summonerSpellSetName, championId: this.championId, summonerSpellIdList: this.summonerSpellIdList }
    this.service.updateSummonerSpellSet(this.body).subscribe((_) => {this.router.navigate(["/summonerspellsetlist"])});
  }

}
