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

    this.service.getItemSetById(this.itemSetId).subscribe( itemSet => {
      (document.getElementById("itemSetName") as HTMLInputElement).value = itemSet.itemSetName;
      this.setSelected(itemSet.championId, "championId");
      this.setSelected(itemSet.itemIdList[0], "item1");
      this.setSelected(itemSet.itemIdList[1], "item2");
      this.setSelected(itemSet.itemIdList[2], "item3");
      this.setSelected(itemSet.itemIdList[3], "item4");
      this.setSelected(itemSet.itemIdList[4], "item5");
      this.setSelected(itemSet.itemIdList[5], "item6");
    });
  }

  updateItemSet() {

    if(this.itemSetName === undefined) {
      alert("Item Set Name cannot be undefined.");
      return;
    }
    else {
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

  setSelected(toSelectId : number, elementId : string) : void {
    let selectElement : HTMLSelectElement = document.querySelector("#"+elementId);

    for(let i = 0; i < selectElement.length; i++) {
      if(parseInt(selectElement.options[i].value) == toSelectId) {
        selectElement.selectedIndex = i;
        break;
      }
    }
  }

}
