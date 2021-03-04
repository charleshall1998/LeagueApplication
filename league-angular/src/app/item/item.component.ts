import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item : Item;
  src : string;

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    this.src = "./assets/images/items/" + this.item.itemName + ".png";
  }

}
