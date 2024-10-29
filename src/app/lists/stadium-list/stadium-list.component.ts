import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Stadium } from '../../model/stadium';
import { StadiumComponent } from '../../objects/stadium/stadium.component';
import { StadiumService } from '../../services/stadium.service';

@Component({
  selector: 'app-stadium-list',
  standalone: true,
  imports: [StadiumComponent],
  templateUrl: './stadium-list.component.html',
  styleUrl: './stadium-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StadiumListComponent implements OnInit {

  constructor(private stadiumService: StadiumService) { }

  stadiums: Stadium[] = [];

  ngOnInit(): void {
    this.stadiumService.getStadiums().subscribe(listOfStadiums => {
      this.stadiums = listOfStadiums;
    });
  }

}
