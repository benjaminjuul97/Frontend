import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Stadium } from '../../model/stadium';
import { StadiumService } from '../../services/stadium.service';	
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadium',
  standalone: true,
  imports: [],
  templateUrl: './stadium.component.html',
  styleUrl: './stadium.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StadiumComponent {

  constructor(private stadiumService: StadiumService, private router: Router) { }

  @Input() stadium!: Stadium;

  deleteStadium(stadium: Stadium): void {
    this.stadiumService.deleteStadium(this.stadium.id).subscribe();
  }

  editStadium(id: number) {
    this.router.navigate(['edit-stadium', id]);
  }

}
