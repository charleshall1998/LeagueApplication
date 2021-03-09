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

  itemName1 : string = " ";
  itemName2 : string = " ";
  itemName3 : string = " ";
  itemName4 : string = " ";
  itemName5 : string = " ";
  itemName6 : string = " ";

  itemSrc1 : string = " ";
  itemSrc2 : string = " ";
  itemSrc3 : string = " ";
  itemSrc4 : string = " ";
  itemSrc5 : string = " ";
  itemSrc6 : string = " ";
  
  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
    this.itemName1 = this.getItemName(this.itemSet.itemIdList[0]);
    this.itemName2 = this.getItemName(this.itemSet.itemIdList[1]);
    this.itemName3 = this.getItemName(this.itemSet.itemIdList[2]);
    this.itemName4 = this.getItemName(this.itemSet.itemIdList[3]);
    this.itemName5 = this.getItemName(this.itemSet.itemIdList[4]);
    this.itemName6 = this.getItemName(this.itemSet.itemIdList[5]);

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
        itemSrc += "B.F. Sword.png";
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
        itemSrc += "Banshees Veil.png";
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
        itemSrc += "Bulwark of the Mountain.png";
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

  getItemName(id : number) : string {

    let itemName = " ";

    switch(id) {
      case 1 : {
        itemName = "Abyssal Mask";
        break;
      }
      case 2 : {
        itemName = "Aegis of the Legion";
        break;
      }
      case 3 : {
        itemName = "Aether Wisp";
        break;
      }
      case 4 : {
        itemName = "Amplifying Tome";
        break;
      }
      case 5 : {
        itemName = "Archangel's Staff";
        break;
      }
      case 6 : {
        itemName = "Ardent Censer";
        break;
      }
      case 7 : {
        itemName = "B.F. Sword";
        break;
      }
      case 8 : {
        itemName = "Bami's Cinder";
        break;
      }
      case 9 : {
        itemName = "Bandleglass Mirror";
        break;
      }
      case 10 : {
        itemName = "Banshee's Veil";
        break;
      }
      case 11 : {
        itemName = "Berzerker's Greaves";
        break;
      }
      case 12 : {
        itemName = "Black Cleaver";
        break;
      }
      case 13 : {
        itemName = "Blade of the Ruined King";
        break;
      }
      case 14 : {
        itemName = "Bloodthirster";
        break;
      }
      case 15 : {
        itemName = "Boots of Swiftness";
        break;
      }
      case 16 : {
        itemName = "Bulwark of the Mountain";
        break;
      }
      case 17 : {
        itemName = "Chempunk Chainsword";
        break;
      }
      case 18 : {
        itemName = "Chemtech Putrifier";
        break;
      }
      case 19 : {
        itemName = "Cosmic Drive";
        break;
      }
      case 20 : {
        itemName = "Dead Man's Plate";
        break;
      }
      case 21 : {
        itemName = "Death's Dance";
        break;
      }
      case 22 : {
        itemName = "Demonic Embrace";
        break;
      }
      case 23 : {
        itemName = "Divine Sunderer";
        break;
      }
      case 24 : {
        itemName = "Duskblade of Draktharr";
        break;
      }
      case 25 : {
        itemName = "Eclipse";
        break;
      }
      case 26 : {
        itemName = "Edge of Night";
        break;
      }
      case 27 : {
        itemName = "Essence Reaver";
        break;
      }
      case 28 : {
        itemName = "Everfrost";
        break;
      }
      case 29 : {
        itemName = "Force of Nature";
        break;
      }
      case 30 : {
        itemName = "Frostfire Gauntlet";
        break;
      }
      case 31 : {
        itemName = "Frozen Heart";
        break;
      }
      case 32 : {
        itemName = "Galeforce";
        break;
      }
    }

    return itemName;

  }
}
