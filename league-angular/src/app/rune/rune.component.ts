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

  constructor() { }

  ngOnInit(): void {
  }

}
