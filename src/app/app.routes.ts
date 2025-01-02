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
import { LoginComponent } from './objects/login/login.component';
import { AddPlayerComponent } from './add/add-player/add-player.component';
import { AddClubComponent } from './add/add-club/add-club.component';
import { AddLeagueComponent } from './add/add-league/add-league.component';
import { AddManagerComponent } from './add/add-manager/add-manager.component';
import { AddStadiumComponent } from './add/add-stadium/add-stadium.component';
import { AddTransferComponent } from './add/add-transfer/add-transfer.component';

export const routes: Routes = [
    { path: 'player', component: PlayerListComponent },
    { path: '', component: PlayerListComponent }, // '' redirets to player page
    { path: 'add-player', component: AddPlayerComponent},
    { path: 'edit-player/:id', component: EditPlayerComponent},
    { path: 'player', component: PlayerListComponent },
    { path: 'club', component: ClubListComponent},
    { path: 'add-club', component: AddClubComponent},
    { path: 'edit-club/:id', component: EditClubComponent},
    { path: 'league', component: LeagueListComponent},
    { path: 'add-league', component: AddLeagueComponent},
    { path: 'edit-league/:id', component: EditLeagueComponent},
    { path: 'manager', component: ManagerListComponent},
    { path: 'add-manager', component: AddManagerComponent},
    { path: 'edit-manager/:id', component: EditManagerComponent},
    { path: 'stadium', component: StadiumListComponent},
    { path: 'add-stadium', component: AddStadiumComponent},
    { path: 'edit-stadium/:id', component: EditStadiumComponent},
    { path: 'transfer', component: TransferListComponent},
    { path: 'add-transfer', component: AddTransferComponent},
    { path: 'edit-transfer/:id', component: EditTransferComponent},
    { path: 'login', component: LoginComponent}
    ];