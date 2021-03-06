import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Champion } from '../Champion';
import { Item } from '../Item';
import { ItemSet } from '../ItemSet';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-create-itemset',
  templateUrl: './create-itemset.component.html',
  styleUrls: ['./create-itemset.component.css']
})
export class CreateItemsetComponent implements OnInit {

  itemSetName : string;
  championId : number;
  itemIdList : number[];
  championsList : Champion[];
  itemsList : Item[];

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
    this.service.getAllChampions().subscribe(list => { 
      this.championsList = list;
    });
  }

  createItemSet() {

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

      let toAdd : ItemSet = {itemSetName: this.itemSetName, championId: this.championId, itemIdList: this.itemIdList}
      this.service.createItemSet(toAdd).subscribe((_) => {this.router.navigate(["/itemsetlist"])});
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
