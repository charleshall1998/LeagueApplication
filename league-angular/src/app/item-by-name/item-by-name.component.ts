import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-item-by-name',
  templateUrl: './item-by-name.component.html',
  styleUrls: ['./item-by-name.component.css']
})
export class ItemByNameComponent implements OnInit {

  item : Item;
  itemName : string = " ";
  src : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    
  }

  search(): void {
    this.itemName = (document.getElementById("itemName") as HTMLInputElement).value;

    this.leagueService.getItemByName(this.itemName).subscribe( item => {
      this.item = item;
      this.src = "./assets/images/items/"+this.itemName+".png";
    });
  }

}
