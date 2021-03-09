import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../Item';
import { ItemSet } from '../ItemSet';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-itemset',
  templateUrl: './itemset.component.html',
  styleUrls: ['./itemset.component.css']
})
export class ItemsetComponent implements OnInit {

  @Input() itemSet : ItemSet;
  champSrc : string = " ";
  champName : string = " ";
  itemSrc1 : string = " ";
  itemSrc2 : string = " ";
  itemSrc3 : string = " ";
  itemSrc4 : string = " ";
  itemSrc5 : string = " ";
  itemSrc6 : string = " ";
  
  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
    this.itemSrc1 = this.getItemSrc(this.itemSet.itemIdList[0]);
    this.itemSrc2 = this.getItemSrc(this.itemSet.itemIdList[1]);
    this.itemSrc3 = this.getItemSrc(this.itemSet.itemIdList[2]);
    this.itemSrc4 = this.getItemSrc(this.itemSet.itemIdList[3]);
    this.itemSrc5 = this.getItemSrc(this.itemSet.itemIdList[4]);
    this.itemSrc6 = this.getItemSrc(this.itemSet.itemIdList[5]);

    this.champName = this.getChampName(this.itemSet.championId);
    this.champSrc = this.getChampSrc(this.itemSet.championId);
  }

  deleteItemSet(itemSetId : number) {
    confirm("Are you sure you want to delete this set?");
    this.service.deleteItemSet(itemSetId).subscribe((_) => {this.router.navigate(["/itemsetlist"])});
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

  getItemSrc(id : number) : string {

    let itemSrc = "./assets/images/items/";

    switch(id) {
      case 1 : {
        itemSrc += "Abyssal Mask.png";
        break;
      }
      case 2 : {
        itemSrc += "Aegis of the Legion.png";
        break;
      }
      case 3 : {
        itemSrc += "Aether Wisp.png";
        break;
      }
      case 4 : {
        itemSrc += "Amplifying Tome.png";
        break;
      }
      case 5 : {
        itemSrc += "Archangels Staff.png";
        break;
      }
      case 6 : {
        itemSrc += "Ardent Censer.png";
        break;
      }
      case 7 : {
        itemSrc += "B.F. Swaord.png";
        break;
      }
      case 8 : {
        itemSrc += "Bamis Cinder.png";
        break;
      }
      case 9 : {
        itemSrc += "Bandleglass Mirror.png";
        break;
      }
      case 10 : {
        itemSrc += "Banshess Veil.png";
        break;
      }
      case 11 : {
        itemSrc += "Berzerkers Greaves.png";
        break;
      }
      case 12 : {
        itemSrc += "Black Cleaver.png";
        break;
      }
      case 13 : {
        itemSrc += "Blade of the Ruined King.png";
        break;
      }
      case 14 : {
        itemSrc += "Bloodthirster.png";
        break;
      }
      case 15 : {
        itemSrc += "Boots of Swiftness.png";
        break;
      }
      case 16 : {
        itemSrc += "Bulwarkof the Mountain.png";
        break;
      }
      case 17 : {
        itemSrc += "Chempunk Chainsword.png";
        break;
      }
      case 18 : {
        itemSrc += "Chemtech Putrifier.png";
        break;
      }
      case 19 : {
        itemSrc += "Cosmic Drive.png";
        break;
      }
      case 20 : {
        itemSrc += "Dead Mans Plate.png";
        break;
      }
      case 21 : {
        itemSrc += "Deaths Dance.png";
        break;
      }
      case 22 : {
        itemSrc += "Demonic Embrace.png";
        break;
      }
      case 23 : {
        itemSrc += "Divine Sunderer.png";
        break;
      }
      case 24 : {
        itemSrc += "Duskblade of Draktharr.png";
        break;
      }
      case 25 : {
        itemSrc += "Eclipse.png";
        break;
      }
      case 26 : {
        itemSrc += "Edge of Night.png";
        break;
      }
      case 27 : {
        itemSrc += "Essence Reaver.png";
        break;
      }
      case 28 : {
        itemSrc += "Everfrost.png";
        break;
      }
      case 29 : {
        itemSrc += "Force of Nature.png";
        break;
      }
      case 30 : {
        itemSrc += "Frostfire Gauntlet.png";
        break;
      }
      case 31 : {
        itemSrc += "Frozen Heart.png";
        break;
      }
      case 32 : {
        itemSrc += "Galeforce.png";
        break;
      }
    }

    return itemSrc;

  }
}
