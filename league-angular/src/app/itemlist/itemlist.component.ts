import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  items : Item[];

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getAllItems().subscribe(list => {
      this.items = list;
    });
  }

}
