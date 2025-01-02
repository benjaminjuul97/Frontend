import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
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
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule,
    MatListModule,
    MatDialogModule,
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlayerComponent {

  @Input() player!: Player;
  dialogRef!: MatDialogRef<any>;

  currentDate = new Date();

  constructor(private playerService: PlayerService, private router: Router, private dialog: MatDialog) { }

  openDialog(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef, {
      width: '300px',
    });
  }

  confirmDelete(): void {
    this.playerService.deletePlayer(this.player.id).subscribe(() => {
      console.log('Player deleted');
      this.dialogRef.close();
    });
  }

  editPlayer(id: number) {
    console.log("editplayer")
    this.router.navigate(['edit-player', id]);
  }
}
