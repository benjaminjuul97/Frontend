import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerComponent } from '../../objects/player/player.component';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerListComponent implements OnInit{

  constructor(private playerService: PlayerService) { }

  players: Player[] = [];

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((listOfPlayers) => {
      this.players = listOfPlayers;
      console.log("players", this.players)
    });
  }

  
}
