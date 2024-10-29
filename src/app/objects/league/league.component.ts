import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { League } from '../../model/league';
import { LeagueService } from '../../services/league.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeagueComponent {

  constructor(private leagueService: LeagueService, private router: Router) { }

  @Input() league!: League;

  deleteLeague(league: League): void {
    this.leagueService.deleteLeague(this.league.id).subscribe();
  }

  editLeague(id: number) {
    this.router.navigate(['edit-league', id]);
  }
}
