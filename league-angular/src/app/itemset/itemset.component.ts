import { Component, Input, OnInit } from '@angular/core';
import { ItemSet } from '../ItemSet';

@Component({
  selector: 'app-itemset',
  templateUrl: './itemset.component.html',
  styleUrls: ['./itemset.component.css']
})
export class ItemsetComponent implements OnInit {

  @Input() itemSet : ItemSet;

  constructor() { }

  ngOnInit(): void {
  }

}
