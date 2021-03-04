import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';

@Component({
  selector: 'app-delete-runeset',
  templateUrl: './delete-runeset.component.html',
  styleUrls: ['./delete-runeset.component.css']
})
export class DeleteRunesetComponent implements OnInit {

  runeSetId : number;

  constructor(private service : LeagueService, private router : Router) { }

  ngOnInit(): void {
  }

  deleteRuneSet() {
    this.service.deleteRuneSet(this.runeSetId).subscribe((_) => {this.router.navigate(["/runesetlist"])});
    alert("Rune Set Deleted!");
  }
}
