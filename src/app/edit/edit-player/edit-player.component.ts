import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css'
})
export class EditPlayerComponent implements OnInit {

  @Input() id!: number;
  player!: Player;

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.playerService.getPlayer(this.id).subscribe(player => {
      this.player = player;
    });
  }

  updatePlayer() {
    this.playerService.updatePlayer(this.player!).subscribe();
    this.router.navigate(['player']);
  }
}