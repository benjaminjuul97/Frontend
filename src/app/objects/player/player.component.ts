import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


// Material components
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatSlideToggleModule,
    MatLabel,
    CommonModule
  ],
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
    console.log("editplayer")
    this.router.navigate(['edit-player', id]);
  }
}
