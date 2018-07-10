import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { NflService } from '../../services/nfl.service';

@Component({
  selector: 'app-todays-games',
  templateUrl: './todays-games.component.html',
  styleUrls: ['./todays-games.component.scss']
})
export class TodaysGamesComponent implements OnInit {
  nflGames: Game[];

  constructor(private nflSerice: NflService) { }

  ngOnInit() {
    this.getNflGames();
  }

  getNflGames(): void {
    this.nflGames = this.nflSerice.getNflGames();
  }
}
