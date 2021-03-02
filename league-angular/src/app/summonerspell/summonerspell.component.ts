import { Component, Input, OnInit } from '@angular/core';
import { SummonerSpell } from '../SummonerSpell';

@Component({
  selector: 'app-summonerspell',
  templateUrl: './summonerspell.component.html',
  styleUrls: ['./summonerspell.component.css']
})
export class SummonerspellComponent implements OnInit {

  @Input() summonerSpell : SummonerSpell;

  constructor() { }

  ngOnInit(): void {
  }

}
