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
  itemName : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    
  }

  search(): void {
    this.leagueService.getItemByName(this.itemName).subscribe( item => {
      this.item = item;
    });
  }

}
