import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemSet } from '../ItemSet';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-update-itemset',
  templateUrl: './update-itemset.component.html',
  styleUrls: ['./update-itemset.component.css']
})
export class UpdateItemsetComponent implements OnInit {

  constructor(private service : LeagueService, private router : Router, private route : ActivatedRoute) { }

  body : ItemSet;
  itemSetId : number;
  itemSetName : string;
  championId : number;
  itemIdList : number[];

  ngOnInit(): void { 
    this.itemSetId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  updateItemSet() {

    this.itemIdList = [];

    for(let i = 1; i < 7; i++) {
      let id = "item" + i;
      let item =  (document.getElementById(id) as HTMLInputElement).value;
      this.itemIdList.push(parseInt(item));
    }

    this.championId = parseInt((document.getElementById("championId") as HTMLInputElement).value);

    this.body = {itemSetId:this.itemSetId, itemSetName: this.itemSetName, championId: this.championId, itemIdList: this.itemIdList }
    this.service.updateItemSet(this.body).subscribe((_) => {this.router.navigate(["/itemsetlist"])});
  }

}
