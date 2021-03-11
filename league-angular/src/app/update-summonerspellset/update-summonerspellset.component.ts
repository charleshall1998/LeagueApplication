import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../Champion';
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
  championsList : Champion[];

  constructor(private service : LeagueService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getAllChampions().subscribe(list => { 
      this.championsList = list;
    });

    this.summonerSpellSetId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.service.getSummonerSpellSetById(this.summonerSpellSetId).subscribe( summSpellSet => {
      (document.getElementById("summSpellSetName") as HTMLInputElement).value = summSpellSet.summonerSpellSetName;
      this.setSelected(summSpellSet.championId, "championId");
      this.setSelected(summSpellSet.summonerSpellIdList[0], "summonerSpell1");
      this.setSelected(summSpellSet.summonerSpellIdList[1], "summonerSpell2");
    });

  }

  updateSummonerSpellSet() {    
    if(this.summonerSpellSetName === undefined) {
      alert("Summoner Spell Set Name cannot be undefined.");
      return;
    }
    else {
      this.summonerSpellIdList = [];

      for(let i = 1; i < 3; i++) {
        let id = "summonerSpell" + i;
        let rune =  (document.getElementById(id) as HTMLInputElement).value;
        this.summonerSpellIdList.push(parseInt(rune));
      }

      this.championId = parseInt((document.getElementById("championId") as HTMLInputElement).value);

      this.body = {summonerSpellSetId: this.summonerSpellSetId, summonerSpellSetName: this.summonerSpellSetName, championId: this.championId, summonerSpellIdList: this.summonerSpellIdList }
      this.service.updateSummonerSpellSet(this.body).subscribe((_) => {this.router.navigate(["/summonerspellsetlist"])});
    }
  }

  setSelected(toSelectId : number, elementId : string) : void {
    let selectElement : HTMLSelectElement = document.querySelector("#"+elementId);

    for(let i = 0; i < selectElement.length; i++) {
      if(parseInt(selectElement.options[i].value) == toSelectId) {
        selectElement.selectedIndex = i;
        break;
      }
    }
  }

}
