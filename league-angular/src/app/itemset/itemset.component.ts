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

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
    
  }

  deleteItemSet(itemSetId : number) {
    confirm("Are you sure you want to delete this set?");
    this.service.deleteItemSet(itemSetId).subscribe((_) => {this.router.navigate(["/itemsetlist"])});
  }

}
