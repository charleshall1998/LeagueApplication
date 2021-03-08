import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeagueService } from '../league.service';
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

  constructor(private service : LeagueService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void { 
    this.runeSetId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  updateRuneSet() {

    this.runeIdList = [];

    for(let i = 1; i < 5; i++) {
      let id = "rune" + i;
      let rune =  (document.getElementById(id) as HTMLInputElement).value;
      this.runeIdList.push(parseInt(rune));
    }

    this.body = {runeSetId:this.runeSetId, runeSetName: this.runeSetName, championId: this.championId, runeIdList: this.runeIdList }
    this.service.updateRuneSet(this.body).subscribe((_) => {this.router.navigate(["/runesetlist"])});
  }
}
