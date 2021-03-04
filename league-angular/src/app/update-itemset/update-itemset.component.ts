import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemSet } from '../ItemSet';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-update-itemset',
  templateUrl: './update-itemset.component.html',
  styleUrls: ['./update-itemset.component.css']
})
export class UpdateItemsetComponent implements OnInit {

  constructor(private service : LeagueService, private router : Router) { }

  body : ItemSet;

  ngOnInit(): void {
  }

  updateItemSet() {
    // this.body = { itemSetId: 1, itemSetName}
    // this.service.deleteItemSet(this.itemSetId, this.body).subscribe((_) => {this.router.navigate(["/itemsetlist"])});
    // alert("Item Set Deleted!");
  }

}
