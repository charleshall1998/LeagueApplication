import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-delete-runeset',
  templateUrl: './delete-runeset.component.html',
  styleUrls: ['./delete-runeset.component.css']
})
export class DeleteRunesetComponent implements OnInit {

  runeSetId : number;

  constructor(private service : LeagueService) { }

  ngOnInit(): void {
  }

  deleteRuneSet() {
    this.service.deleteRuneSet(this.runeSetId).subscribe();
    alert("Rune Set Deleted!");
  }
}
