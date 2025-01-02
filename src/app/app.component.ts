import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterModule } from '@angular/router';
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
import { LoginComponent } from './objects/login/login.component';
// Material components
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink, 
    RouterModule,
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
    StadiumListComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FootballApplication';

  constructor(public authService: AuthService, private router: Router) {}

  get authenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login after logout
  }
}
