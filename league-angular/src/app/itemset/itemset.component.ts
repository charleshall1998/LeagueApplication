import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private leagueService : LeagueService) { }

  ngOnInit(): void {
    
  }

}
