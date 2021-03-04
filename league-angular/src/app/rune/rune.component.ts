import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Rune } from '../Rune';

@Component({
  selector: 'app-rune',
  templateUrl: './rune.component.html',
  styleUrls: ['./rune.component.css']
})
export class RuneComponent implements OnInit {

  @Input() rune : Rune;
  src : string;

  constructor() { }

  ngOnInit(): void {
    this.src = "./assets/images/runes/" + this.rune.runeName + ".png";
    console.log(this.src);
  }

}
