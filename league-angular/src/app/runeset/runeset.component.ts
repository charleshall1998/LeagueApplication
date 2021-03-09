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

  runeName1 : string = " ";
  runeName2 : string = " ";
  runeName3 : string = " ";
  runeName4 : string = " ";

  runeSrc1 : string = " ";
  runeSrc2 : string = " ";
  runeSrc3 : string = " ";
  runeSrc4 : string = " ";


  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {

    this.runeName1 = this.getRuneName(this.runeSet.runeIdList[0]);
    this.runeName2 = this.getRuneName(this.runeSet.runeIdList[1]);
    this.runeName3 = this.getRuneName(this.runeSet.runeIdList[2]);
    this.runeName4 = this.getRuneName(this.runeSet.runeIdList[3]);

    this.runeSrc1 = this.getRuneSrc(this.runeSet.runeIdList[0]);
    this.runeSrc2 = this.getRuneSrc(this.runeSet.runeIdList[1]);
    this.runeSrc3 = this.getRuneSrc(this.runeSet.runeIdList[2]);
    this.runeSrc4 = this.getRuneSrc(this.runeSet.runeIdList[3]);

    this.champName = this.getChampName(this.runeSet.championId);
    this.champSrc = this.getChampSrc(this.runeSet.championId);

  }

  deleteRuneSet(runeSetId : number) : void {
    confirm("Are you sure you want to delete this set?");
    this.service.deleteRuneSet(runeSetId).subscribe((_) => {this.router.navigate(["/runesetlist"])});
    window.location.reload();
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

  getChampName(id : number) : string {
    
    let champName = " ";

    switch(id) {
      case 1 : {
        champName = "Aatrox";
        break;
      }
      case 2 : {
        champName = "Ahri";
        break
      }
      case 3 : {
        champName = "Akali";
        break;
      }
      case 4 : {
        champName = "Alistar";
        break;
      }
      case 5 : {
        champName = "Amumu";
        break;
      }
      case 6 : {
        champName = "Anivia";
        break;
      }
      case 7 : {
        champName = "Annie";
        break;
      }
      case 8 : {
        champName = "Aphelios";
        break;
      }
      case 9 : {
        champName = "Ashe";
        break;
      }
      case 10 : {
        champName = "Aurelion Sol";
        break;
      }
      case 11 : {
        champName = "Azir";
        break;
      }
      case 12 : {
        champName = "Bard";
        break;
      }
      case 13 : {
        champName = "Blitzcrank";
        break;
      }
      case 14 : {
        champName = "Brand";
        break;
      }
      case 15 : {
        champName = "Braum";
        break;
      }
      case 16 : {
        champName = "Caitlyn";
        break;
      }
      case 17 : {
        champName = "Camille";
        break;
      }
      case 18 : {
        champName = "Cassiopeia";
        break;
      }
      case 19 : {
        champName = "Corki";
        break
      }
      case 20 : {
        champName = "Darius";
        break;
      }
      case 21 : {
        champName = "Diana";
        break;
      }
      case 22 : {
        champName = "Dr. Mundo";
        break;
      }
      case 23 : {
        champName = "Draven";
        break;
      }
      case 24 : {
        champName = "Ekko";
        break;
      }
      case 25 : {
        champName = "Elise";
        break;
      }
      case 26 : {
        champName = "Evelynn";
        break;
      }
      case 27 : {
        this.champName = "Ezreal";
        break
      }
      case 28 : {
        champName = "Fiddlesticks";
        break;
      }
      case 29 : {
        champName = "Fiora";
        break
      }
      case 30 : {
        champName = "Fizz";
        break;
      }
    }

    return champName;
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

  getRuneName(id : number) : string {

    let runeName = " ";

    switch(id) {
        case 1 : {
          runeName = "Press the Attack";
          break;
        }
        case 2 : {
          runeName = "Lethal Tempo";
          break;
        }
        case 3 : {
          runeName = "Fleet Footwork";
          break;
        }
        case 4 : {
          runeName = "Conqueror";
          break;
        }
        case 5 : {
          runeName = "Overheal";
          break;
        }
        case 6 : {
          runeName = "Triumph";
          break;
        }
        case 7 : {
          runeName = "Presence of Mind";
          break;
        }
        case 8 : {
          runeName = "Alacrity";
          break;
        }
        case 9 : {
          runeName = "Tenacity";
          break;
        }
        case 10 : {
          runeName = "Bloodline";
          break;
        }
        case 11: {
          runeName = "Coup de Grace";
          break;
        }
        case 12: {
          runeName = "Cutdown";
          break;
        }
        case 13: {
          runeName = "Last Stand";
          break;
        }
        case 14: {
          runeName = "Electrocute";
          break;
        }
        case 15: {
          runeName = "Predator";
          break;
        }
        case 16: {
          runeName = "Dark Harvest";
          break;
        }
        case 17: {
          runeName = "Hail of Blades";
          break;
        }
        case 18: {
          runeName = "Cheap Shot";
          break;
        }
        case 19: {
          runeName = "Taste of Blood";
          break;
        }
        case 20: {
          runeName = "Sudden Impact";
          break;
        }
        case 21: {
          runeName = "Zombie Ward";
          break;
        }
        case 22: {
          runeName = "Ghost Poro";
          break;
        }
        case 23: {
          runeName = "Eyeball Collection";
          break;
        }
        case 24: {
          runeName = "Ravenous Hunter";
          break;
        }
        case 25: {
          runeName = "Ingenious Hunter";
          break;
        }
        case 26: {
          runeName = "Relentless Hunter";
          break;
        }
        case 27: {
          runeName = "Ultimate Hunter";
          break;
        }
      
    }

    return runeName;
  }
  

}
