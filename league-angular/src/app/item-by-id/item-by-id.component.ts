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
  itemId : number;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void { }

  search() : void {
    this.leagueService.getItemById(this.itemId).subscribe( item => {
      this.item = item;
    });
  }

}
