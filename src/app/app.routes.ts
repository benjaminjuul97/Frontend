import { Routes } from '@angular/router';
import { PlayerListComponent } from './lists/./player-list/player-list.component';
import { EditPlayerComponent } from './edit/edit-player/edit-player.component';
import { ClubListComponent } from './lists/./club-list/club-list.component';
import { EditClubComponent } from './edit/edit-club/edit-club.component';
import { StadiumListComponent } from './lists/./stadium-list/stadium-list.component';
import { EditStadiumComponent } from './edit/edit-stadium/edit-stadium.component';
import { TransferListComponent } from './lists/./transfer-list/transfer-list.component';
import { EditTransferComponent } from './edit/edit-transfer/edit-transfer.component';
import { ManagerListComponent } from './lists/./manager-list/manager-list.component';
import { EditManagerComponent } from './edit/edit-manager/edit-manager.component';
import { LeagueListComponent } from './lists/league-list/league-list.component';
import { EditLeagueComponent } from './edit/./edit-league/edit-league.component';

export const routes: Routes = [
    { path: 'player', component: PlayerListComponent },
    { path: 'edit-player/:id', component: EditPlayerComponent},
    // { path: '', component: PlayerListComponent },
    { path: 'club', component: ClubListComponent},
    { path: 'edit/club/:id', component: EditClubComponent},
    { path: 'league', component: LeagueListComponent},
    { path: 'edit/league/:id', component: EditLeagueComponent},
    { path: 'manager', component: ManagerListComponent},
    { path: 'edit/manager/:id', component: EditManagerComponent},
    { path: 'stadium', component: StadiumListComponent},
    { path: 'edit/stadium/:id', component: EditStadiumComponent},
    { path: 'transfer', component: TransferListComponent},
    { path: 'edit/transfer/:id', component: EditTransferComponent},
    ];