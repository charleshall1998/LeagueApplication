import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../Champion';
import { LeagueService } from '../league.service';
import { Rune } from '../Rune';
import { RuneSet } from '../RuneSet';

@Component({
  selector: 'app-update-runeset',
  templateUrl: './update-runeset.component.html',
  styleUrls: ['./update-runeset.component.css']
})
export class UpdateRunesetComponent implements OnInit {

  body : RuneSet;
  runeSetId : number;
  runeSetName : string;
  championId : number;
  runeIdList : number[];
  championsList : Champion[];
  runesList : Rune[];

  constructor(private service : LeagueService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void { 

    this.service.getAllChampions().subscribe(list => { 
      this.championsList = list;
    });

    this.service.getAllRunes().subscribe(list => { 
      this.runesList = list;
    });

    this.runeSetId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.service.getRuneSetById(this.runeSetId).subscribe( runeSet => {
      (document.getElementById("runeSetName") as HTMLInputElement).value = runeSet.runeSetName;
      this.setSelected(runeSet.championId, "championId");
      this.setSelected(runeSet.runeIdList[0], "rune1");
      this.setSelected(runeSet.runeIdList[1], "rune2");
      this.setSelected(runeSet.runeIdList[2], "rune3");
      this.setSelected(runeSet.runeIdList[3], "rune4");
    });
  }

  updateRuneSet() {

    if(this.runeSetName === undefined) {
      alert("Rune Set Name cannot be undefined.")
      return;
    }
    else {
      this.runeIdList = [];

      for(let i = 1; i < 5; i++) {
        let id = "rune" + i;
        let rune =  (document.getElementById(id) as HTMLInputElement).value;
        this.runeIdList.push(parseInt(rune));
      }

      this.championId = parseInt((document.getElementById("championId") as HTMLInputElement).value);

      this.body = {runeSetId:this.runeSetId, runeSetName: this.runeSetName, championId: this.championId, runeIdList: this.runeIdList }
      this.service.updateRuneSet(this.body).subscribe((_) => {this.router.navigate(["/runesetlist"])});
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
