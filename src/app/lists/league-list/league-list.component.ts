import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { League } from '../../model/league';
import { LeagueComponent } from '../../objects/league/league.component';
import { LeagueService } from '../../services/league.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [
    LeagueComponent,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeagueListComponent implements OnInit {

  leagues: League[] = [];
  pagedLeagues: League[] = []; // Specify type as Player[]
  pageSize = 4; // Default page size
  currentPage = 0; // Current page index

  constructor(private leagueService: LeagueService, private router: Router) { }

  ngOnInit(): void {
    if(this.leagueService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
    this.leagueService.getLeagues().subscribe(listOfLeagues => {
      this.leagues = listOfLeagues;
      console.log("leagues", this.leagues)
    });
  }

  updatePagedLeagues(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedLeagues = this.leagues.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedLeagues();
  }

  trackByIndex(index: number): number {
    return index;
  }

}
