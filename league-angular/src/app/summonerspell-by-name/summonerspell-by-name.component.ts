import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';
import { SummonerSpell } from '../SummonerSpell';

@Component({
  selector: 'app-summonerspell-by-name',
  templateUrl: './summonerspell-by-name.component.html',
  styleUrls: ['./summonerspell-by-name.component.css']
})
export class SummonerspellByNameComponent implements OnInit {

  summonerSpell : SummonerSpell;
  summonerSpellName : string;
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
  search(): void {
    this.summonerSpellName = (document.getElementById("summonerSpellName") as HTMLInputElement).value;

    this.service.getSummonerSpellByName(this.summonerSpellName).subscribe( summonerSpell => {
      this.summonerSpell = summonerSpell;
      this.summSpellNameContainer =  '<h2>'+this.summonerSpell.summonerSpellName+'</h2>';

      this.src = "./assets/images/summonerspells/"+this.summonerSpellName+".png";
      this.summSpellInfoContainer = '<p>Description: '+this.summonerSpell.summonerSpellDescription+'</p>';
    });
  }

}
