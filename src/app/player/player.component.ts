import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [PlayerService]

})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, points: number) {
    var newPlayer: Player = new Player(name, points);
    this.playerService.addPlayer(newPlayer);
  }

}
