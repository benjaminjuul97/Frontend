import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeagueService } from '../../services/league.service';
import { Router, RouterModule } from '@angular/router';
import { League } from '../../model/league';

import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-edit-league',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatLabel,
    RouterModule
  ],
  templateUrl: './edit-league.component.html',
  styleUrl: './edit-league.component.css'
})
export class EditLeagueComponent implements OnInit {

  @Input() id!: number;
  league!: League;

  constructor(private leagueService: LeagueService, private router: Router) { }

  ngOnInit(): void {
    this.leagueService.getLeague(this.id).subscribe(league => {
      this.league = league;
    });
  }

  updateLeague() {
    this.leagueService.updateLeague(this.league!).subscribe();
    this.router.navigate(['league']);
  }

}