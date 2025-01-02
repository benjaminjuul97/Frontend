import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Stadium } from '../../model/stadium';
import { StadiumComponent } from '../../objects/stadium/stadium.component';
import { StadiumService } from '../../services/stadium.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stadium-list',
  standalone: true,
  imports: [
    StadiumComponent,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './stadium-list.component.html',
  styleUrl: './stadium-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StadiumListComponent implements OnInit {

  stadiums: Stadium[] = [];
  pagedStadiums: Stadium[] = [];
  pageSize = 4;
  currentPage = 0; 

  constructor(private stadiumService: StadiumService, private router: Router) { }

  ngOnInit(): void {
    if(this.stadiumService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
    this.stadiumService.getStadiums().subscribe(listOfStadiums => {
      this.stadiums = listOfStadiums;
      this.updatePagedStadiums();
    });
  }

  updatePagedStadiums(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedStadiums = this.stadiums.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedStadiums();
  }

  trackByIndex(index: number): number {
    return index;
  }

}
