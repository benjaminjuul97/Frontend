import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ClubComponent } from '../../objects/club/club.component';
import { ClubService } from '../../services/club.service';
import { Club } from '../../model/club';

@Component({
  selector: 'app-club-list',
  standalone: true,
  imports: [ClubComponent],
  templateUrl: './club-list.component.html',
  styleUrl: './club-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubListComponent implements OnInit {

  constructor(private clubService: ClubService) { }

  clubs: Club[] = [];

  ngOnInit(): void {
    this.clubService.getClubs().subscribe(listOfClubs => {
      this.clubs = listOfClubs;
      console.log("clubs", this.clubs)
    });
  }

}