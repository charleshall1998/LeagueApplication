import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RuneSet } from '../RuneSet';

@Component({
  selector: 'app-runeset',
  templateUrl: './runeset.component.html',
  styleUrls: ['./runeset.component.css']
})
export class RunesetComponent implements OnInit {

  @Input() runeSet : RuneSet;

  constructor() { }

  ngOnInit(): void {
  }

}
