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
  src : string = " ";
  itemNameContainer : string;
  itemInfoContainer : string;
  itemsList : Item[];

  constructor(private service : LeagueService) { }

  ngOnInit(): void {
    this.service.getAllItems().subscribe(list => { 
      this.itemsList = list;
    });
  }

  search(): void {
    this.itemName = (document.getElementById("itemName") as HTMLInputElement).value;
    this.itemNameContainer = '<h1>'+this.itemName+'</h1>';

    this.service.getItemByName(this.itemName).subscribe( item => {
      this.item = item;

      this.src = "./assets/images/items/"+this.itemName+".png";

      this.itemInfoContainer = '<p>Description: '+this.item.itemDescription+'</p>'
      +'<p>Cost: '+item.itemCost+' gold</p>';

    });
  }

}
