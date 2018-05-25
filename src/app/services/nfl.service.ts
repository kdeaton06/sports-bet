import { Injectable } from '@angular/core';
import { Game } from '../models/game';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class NflService {
  //private gameUrl = '';
  private games: Game[]
  
  constructor(
    //private http: HttpClient
  ) { }

  getNflGames(): Game[] {
    let date: string = this.getTodaysDate();

    this.games = [
      {
          id: 1,
          sport: 'nfl',
          homeTeam: 'baltimore',
          awayTeam: 'pittsburgh',
          dateStamp: date,
          timeStamp: '1:00 PM',
          homeOdds: '+150',
          awayOdds: '-175'
      },
      {
          id: 2,
          sport: 'nfl',
          homeTeam: 'new england',
          awayTeam: 'atlanta',
          dateStamp: date,
          timeStamp: '1:00 PM',
          homeOdds: '+110',
          awayOdds: '-250'
      },
      {
          id: 3,
          sport: 'nfl',
          homeTeam: 'san francisco',
          awayTeam: 'miami',
          dateStamp: date,
          timeStamp: '4:30 PM',
          homeOdds: '+200',
          awayOdds: '-185'
      },
      {
          id: 4,
          sport: 'nfl',
          homeTeam: 'dallas',
          awayTeam: 'washington',
          dateStamp: date,
          timeStamp: '9:00 PM',
          homeOdds: '+401',
          awayOdds: '-275'
      }
    ];

    return this.games;
  }

  private getTodaysDate(): string {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        var day = '0'+dd;
    } else {
      var day = dd.toString();
    }

    if(mm<10) {
      var month = '0'+mm;
    } else {
      var month = mm.toString();
    }

    month = today.toLocaleString('en-us', { month: "long" });
    var todaysDate = month + ' ' + day + ', ' + yyyy;
    console.log(todaysDate);
    return todaysDate.toString();;
  }
}
