import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerComponent {

  @Input() player!: Player;

  constructor(private playerService: PlayerService, private router: Router) { }

  deletePlayer() {
    this.playerService.deletePlayer(this.player.id).subscribe();
  }

  editPlayer(id: number) {
    this.router.navigate(['edit-player', id]);
  }


}
