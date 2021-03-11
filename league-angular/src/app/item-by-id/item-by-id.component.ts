import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-item-by-id',
  templateUrl: './item-by-id.component.html',
  styleUrls: ['./item-by-id.component.css']
})
export class ItemByIdComponent implements OnInit {

  item : Item;
  itemId : number = 0;
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

  search() : void {
    this.itemId = parseInt((document.getElementById("itemId") as HTMLInputElement).value);

    this.service.getItemById(this.itemId).subscribe( item => {
      this.item = item;
      this.itemNameContainer = '<h1>'+this.item.itemName+'</h1>';

      this.src = "./assets/images/items/"+this.item.itemName+".png";

      this.itemInfoContainer = '<p>Description: '+this.item.itemDescription+'</p>'
      +'<p>Cost: '+item.itemCost+' gold</p>';
    });
  }

}
