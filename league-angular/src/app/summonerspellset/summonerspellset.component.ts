import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SummonerSpellSet } from '../SummonerSpellSet';

@Component({
  selector: 'app-summonerspellset',
  templateUrl: './summonerspellset.component.html',
  styleUrls: ['./summonerspellset.component.css']
})
export class SummonerspellsetComponent implements OnInit {

  @Input() summonerSpellSet : SummonerSpellSet;

  constructor() { }

  ngOnInit(): void {
  }

}
