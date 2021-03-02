import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ItemSet } from '../ItemSet';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-itemsetlist',
  templateUrl: './itemsetlist.component.html',
  styleUrls: ['./itemsetlist.component.css']
})
export class ItemsetlistComponent implements OnInit {

  itemSets : ItemSet[];

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getAllItemSets().subscribe(list => {
      this.itemSets = list;
    });
  }

}
