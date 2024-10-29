import { Component, Input,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Club } from '../../model/club';
import { ClubService } from '../../services/club.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-club',
  standalone: true,
  imports: [],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubComponent {

  constructor(private clubService: ClubService, private router: Router) { }

  @Input() club!: Club;

  deleteClub(club: Club): void {
    this.clubService.deleteClub(this.club.id).subscribe();
  }

  editClub(id: number) {
    this.router.navigate(['edit-club', id]);
  }

}
