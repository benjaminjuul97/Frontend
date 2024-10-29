import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlayerComponent } from './objects/player/player.component';
import { PlayerListComponent } from './lists/player-list/player-list.component';
import { ClubComponent } from './objects/club/club.component';
import { ClubListComponent } from './lists/club-list/club-list.component';
import { ManagerComponent } from './objects/manager/manager.component';
import { ManagerListComponent } from './lists/manager-list/manager-list.component';
import { LeagueComponent } from './objects/league/league.component';
import { LeagueListComponent } from './lists/league-list/league-list.component';
import { TransferComponent } from './objects/transfer/transfer.component';
import { TransferListComponent } from './lists/transfer-list/transfer-list.component';
import { StadiumComponent } from './objects/stadium/stadium.component';
import { StadiumListComponent } from './lists/stadium-list/stadium-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink, 
    PlayerComponent, 
    PlayerListComponent,
    ClubComponent,
    ClubListComponent,
    ManagerComponent,
    ManagerListComponent,
    LeagueComponent,
    LeagueListComponent,
    TransferComponent,
    TransferListComponent,
    StadiumComponent,
    StadiumListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FootballApplication';
}
