import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeagueService } from '../../services/league.service';
import { Router } from '@angular/router';
import { League } from '../../model/league';

@Component({
  selector: 'app-edit-league',
  standalone: true,
  imports: [FormsModule],
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