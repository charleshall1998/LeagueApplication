import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-delete-itemset',
  templateUrl: './delete-itemset.component.html',
  styleUrls: ['./delete-itemset.component.css']
})
export class DeleteItemsetComponent implements OnInit {

  itemSetId : number;

  constructor(private service : LeagueService) { }

  ngOnInit(): void {
  }

  deleteItemSet() {
    this.service.deleteItemSet(this.itemSetId).subscribe();
    alert("Item Set Deleted!");
  }

}
