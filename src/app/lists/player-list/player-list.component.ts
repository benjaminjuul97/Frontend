import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerComponent } from '../../objects/player/player.component';
import { PlayerService } from '../../services/player.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    PlayerComponent,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],  // Fixed typo here
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayerListComponent implements OnInit {

  players: Player[] = [];
  pagedPlayers: Player[] = []; // Specify type as Player[]
  pageSize = 4; // Default page size
  currentPage = 0; // Current page index

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    if(this.playerService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
    this.playerService.getPlayers().subscribe((listOfPlayers) => {
      this.players = listOfPlayers;
      console.log("players", this.players);
      this.updatePagedPlayers();
    });
  }

  updatePagedPlayers(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedPlayers = this.players.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedPlayers();
  }

  trackByIndex(index: number): number {
    return index;
  }
}
