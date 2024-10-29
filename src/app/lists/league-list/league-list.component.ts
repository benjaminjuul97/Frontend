import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { League } from '../../model/league';
import { LeagueComponent } from '../../objects/league/league.component';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [LeagueComponent],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeagueListComponent implements OnInit {

  constructor(private leagueService: LeagueService) { }

  leagues: League[] = [];

  ngOnInit(): void {
    this.leagueService.getLeagues().subscribe(listOfLeagues => {
      this.leagues = listOfLeagues;
      console.log("leagues", this.leagues)
    });
  }

}
