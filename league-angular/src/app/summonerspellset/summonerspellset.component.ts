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
  champSrc : string = " ";
  champName : string = " ";
  summonerSpellSrc1 : string = " ";
  summonerSpellSrc2 : string = " ";

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
    this.summonerSpellSrc1 = this.getSummSpellSrc(this.summonerSpellSet.summonerSpellIdList[0]);
    this.summonerSpellSrc2 = this.getSummSpellSrc(this.summonerSpellSet.summonerSpellIdList[1]);
    
    this.champSrc = this.getChampSrc(this.summonerSpellSet.championId);
  }

  deleteSummonerSpellSet(summonerSpellSetId : number) {
    confirm("Are you sure you want to delete this set?");
    this.service.deleteSummonerSpellSet(summonerSpellSetId).subscribe((_) => {this.router.navigate(["/summonerspellsetlist"])});
  }

  getChampSrc(id : number) : string {
    
    let champSrc = "./assets/images/champions/";
    
    switch(id) {
      case 1 : {
        this.champName = "Aatrox";
        champSrc += "Aatrox.png";
        break;
      }
      case 2 : {
        this.champName = "Ahri";
        champSrc += "Ahri.png";
        break
      }
      case 3 : {
        this.champName = "Akali";
        champSrc += "Akali.png";
        break;
      }
      case 4 : {
        this.champName = "Alistar";
        champSrc += "Alistar.png";
        break
      }
      case 5 : {
        this.champName = "Amumu";
        champSrc += "Amumu.png";
        break;
      }
      case 6 : {
        this.champName = "Anivia";
        champSrc += "Anivia.png";
        break
      }
      case 7 : {
        this.champName = "Annie";
        champSrc += "Annie.png";
        break;
      }
      case 8 : {
        this.champName = "Aphelios";
        champSrc += "Aphelios.png";
        break
      }
      case 9 : {
        this.champName = "Ashe";
        champSrc += "Ashe.png";
        break;
      }
      case 10 : {
        this.champName = "Aurelion Sol";
        champSrc += "Aurelion Sol.png";
        break
      }
      case 11 : {
        this.champName = "Azir";
        champSrc += "Azir.png";
        break;
      }
      case 12 : {
        this.champName = "Bard";
        champSrc += "Bard.png";
        break
      }
      case 13 : {
        this.champName = "Blitzcrank";
        champSrc += "Blitzcrank.png";
        break;
      }
      case 14 : {
        this.champName = "Brand";
        champSrc += "Brand.png";
        break
      }
      case 15 : {
        this.champName = "Braum";
        champSrc += "Caitlyn.png";
        break;
      }
      case 16 : {
        this.champName = "Caitlyn";
        champSrc += "Caitlyn.png";
        break
      }
      case 17 : {
        this.champName = "Camille";
        champSrc += "Camille.png";
        break
      }
      case 18 : {
        this.champName = "Cassiopeia";
        champSrc += "Cassiopeia.png";
        break;
      }
      case 19 : {
        this.champName = "Corki";
        champSrc += "Corki.png";
        break
      }
      case 20 : {
        this.champName = "Darius";
        champSrc += "Darius.png";
        break;
      }
      case 21 : {
        this.champName = "Diana";
        champSrc += "Diana.png";
        break
      }
      case 22 : {
        this.champName = "Dr. Mundo";
        champSrc += "Dr. Mundo.png";
        break;
      }
      case 23 : {
        this.champName = "Draven";
        champSrc += "Draven.png";
        break
      }
      case 24 : {
        this.champName = "Ekko";
        champSrc += "Ekko.png";
        break;
      }
      case 25 : {
        this.champName = "Elise";
        champSrc += "Elise.png";
        break
      }
      case 26 : {
        this.champName = "Evelynn";
        champSrc += "Evelynn.png";
        break;
      }
      case 27 : {
        this.champName = "Ezreal";
        champSrc += "Ezreal.png";
        break
      }
      case 28 : {
        this.champName = "Fiddlesticks";
        champSrc += "Fiddlesticks.png";
        break;
      }
      case 29 : {
        this.champName = "Fiora";
        champSrc += "Fiora.png";
        break
      }
      case 30 : {
        this.champName = "Fizz";
        champSrc += "Fizz.png";
        break;
      }
    }

    return champSrc;
  }

  getSummSpellSrc(id : number) : string {

    let summSpellSrc = "./assets/images/summonerspells/";

    switch(id) {
        case 1 : {
          summSpellSrc += "Heal.png";
          break;
        }
        case 2 : {
          summSpellSrc += "Ghost.png";
          break;
        }
        case 3 : {
          summSpellSrc += "Barrier.png";
          break;
        }
        case 4 : {
          summSpellSrc += "Exhaust.png";
          break;
        }
        case 5 : {
          summSpellSrc += "Flash.png";
          break;
        }
        case 6 : {
          summSpellSrc += "Teleport.png";
          break;
        }
        case 7 : {
          summSpellSrc += "Smite.png";
          break;
        }
        case 8 : {
          summSpellSrc += "Cleanse.png";
          break;
        }
        case 9 : {
          summSpellSrc += "Ignite.png";
          break;
        }
    }

    return summSpellSrc;
  }
}
