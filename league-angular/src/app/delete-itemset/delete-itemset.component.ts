import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-delete-itemset',
  templateUrl: './delete-itemset.component.html',
  styleUrls: ['./delete-itemset.component.css']
})
export class DeleteItemsetComponent implements OnInit {

  itemSetId : number;

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
  }

  deleteItemSet() {
    this.service.deleteItemSet(this.itemSetId).subscribe((_) => {this.router.navigate(["/itemsetlist"])});
    alert("Item Set Deleted!");
  }

}
