import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatLabel,
    RouterModule
  ],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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