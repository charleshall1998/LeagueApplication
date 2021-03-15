import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { SummonerSpell } from '../SummonerSpell';

@Component({
  selector: 'app-summonerspell-by-id',
  templateUrl: './summonerspell-by-id.component.html',
  styleUrls: ['./summonerspell-by-id.component.css']
})
export class SummonerspellByIdComponent implements OnInit {

  summonerSpell : SummonerSpell;
  summonerSpellOption : SummonerSpell;
  summonerSpellId : number;
  src : string = " ";
  summSpellNameContainer : string;
  summSpellInfoContainer : string;
  summonerSpellsList : SummonerSpell[];

  constructor(private service : LeagueService) { }

  ngOnInit(): void { 
    this.service.getAllSummonerSpells().subscribe(list => { 
      this.summonerSpellsList = list;
    });
  }

  search() : void {
    this.summonerSpellId = parseInt((document.getElementById("summonerSpellId") as HTMLInputElement).value);

    this.service.getSummonerSpellById(this.summonerSpellId).subscribe( summonerSpell => {
      this.summonerSpell = summonerSpell;
      this.summSpellNameContainer =  '<h2>'+this.summonerSpell.summonerSpellName+'</h2>';

      this.src = "./assets/images/summonerspells/"+this.summonerSpell.summonerSpellName+".png";

      this.summSpellInfoContainer = '<p>Description: '+this.summonerSpell.summonerSpellDescription+'</p>';
    });
  }

}
