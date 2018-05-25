import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/game';
import { NflService } from '../../../services/nfl.service';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.scss']
})
export class TickerComponent implements OnInit {
  nflGames: Game[];

  constructor(private nflSerice: NflService) { }

  ngOnInit() {
    this.getNflGames();
  }

  getNflGames(): void {
    //this.nflSerice.getNflGames().subscribe(nflGames => this.nflGames = nflGames);
    this.nflGames = this.nflSerice.getNflGames();
  }
}