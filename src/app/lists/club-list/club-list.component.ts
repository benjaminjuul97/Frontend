import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClubComponent } from '../../objects/club/club.component';
import { ClubService } from '../../services/club.service';
import { Club } from '../../model/club';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-club-list',
  standalone: true,
  imports: [
    ClubComponent,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './club-list.component.html',
  styleUrl: './club-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubListComponent implements OnInit {

   clubs: Club[] = [];
   pagedClubs: Club[] = []; // Specify type as Player[]
   pageSize = 4; // Default page size
   currentPage = 0; // Current page index

  constructor(private clubService: ClubService, private router: Router) { }

  ngOnInit(): void {
    if(this.clubService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
    this.clubService.getClubs().subscribe(listOfClubs => {
      this.clubs = listOfClubs;
      console.log("clubs", this.clubs);
      this.updatePagedClubs();
    });
  }

    updatePagedClubs(): void {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      this.pagedClubs = this.clubs.slice(start, end);
    }
  
    onPageChange(event: PageEvent): void {
      this.pageSize = event.pageSize;
      this.currentPage = event.pageIndex;
      this.updatePagedClubs();
    }
  
    trackByIndex(index: number): number {
      return index;
    }
 

}