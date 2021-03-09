import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { RuneSet } from '../RuneSet';

@Component({
  selector: 'app-runeset',
  templateUrl: './runeset.component.html',
  styleUrls: ['./runeset.component.css']
})
export class RunesetComponent implements OnInit {

  @Input() runeSet : RuneSet;
  champSrc : string = " ";
  champName : string = " ";
  runeSrc1 : string = " ";
  runeSrc2 : string = " ";
  runeSrc3 : string = " ";
  runeSrc4 : string = " ";


  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {

    this.runeSrc1 = this.getRuneSrc(this.runeSet.runeIdList[0]);
    this.runeSrc2 = this.getRuneSrc(this.runeSet.runeIdList[1]);
    this.runeSrc3 = this.getRuneSrc(this.runeSet.runeIdList[2]);
    this.runeSrc4 = this.getRuneSrc(this.runeSet.runeIdList[3]);

    this.champSrc = this.getChampSrc(this.runeSet.championId);

  }

  deleteRuneSet(runeSetId : number) : void {
    confirm("Are you sure you want to delete this set?");
    this.service.deleteRuneSet(runeSetId).subscribe((_) => {this.router.navigate(["/runesetlist"])});
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

  getRuneSrc(id : number) : string {

    let runeSrc = "./assets/images/runes/";

    switch(id) {
        case 1 : {
          runeSrc += "Press the Attack.png";
          break;
        }
        case 2 : {
          runeSrc += "Lethal Tempo.png";
          break;
        }
        case 3 : {
          runeSrc += "Fleet Footwork.png";
          break;
        }
        case 4 : {
          runeSrc += "Conqueror.png";
          break;
        }
        case 5 : {
          runeSrc += "Overheal.png";
          break;
        }
        case 6 : {
          runeSrc += "Triumph.png";
          break;
        }
        case 7 : {
          runeSrc += "Presence of Mind.png";
          break;
        }
        case 8 : {
          runeSrc += "Alacrity.png";
          break;
        }
        case 9 : {
          runeSrc += "Tenacity.png";
          break;
        }
        case 10 : {
          runeSrc += "Bloodline.png";
          break;
        }
        case 11: {
          runeSrc += "Coup de Grace.png";
          break;
        }
        case 12: {
          runeSrc += "Cutdown.png";
          break;
        }
        case 13: {
          runeSrc += "Last Stand.png";
          break;
        }
        case 14: {
          runeSrc += "Electrocute.png";
          break;
        }
        case 15: {
          runeSrc += "Predator.png";
          break;
        }
        case 16: {
          runeSrc += "Dark Harvest.png";
          break;
        }
        case 17: {
          runeSrc += "Hail of Blades.png";
          break;
        }
        case 18: {
          runeSrc += "Cheap Shot.png";
          break;
        }
        case 19: {
          runeSrc += "Taste of Blood.png";
          break;
        }
        case 20: {
          runeSrc += "Sudden Impact.png";
          break;
        }
        case 21: {
          runeSrc += "Zombie Ward.png";
          break;
        }
        case 22: {
          runeSrc += "Ghost Poro.png";
          break;
        }
        case 23: {
          runeSrc += "Eyeball Collection.png";
          break;
        }
        case 24: {
          runeSrc += "Ravenous Hunter.png";
          break;
        }
        case 25: {
          runeSrc += "Ingenious Hunter.png";
          break;
        }
        case 26: {
          runeSrc += "Relentless Hunter.png";
          break;
        }
        case 27: {
          runeSrc += "Ultimate Hunter.png";
          break;
        }
      
    }

    return runeSrc;
  }
  

}
