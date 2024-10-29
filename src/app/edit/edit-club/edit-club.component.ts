import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Club } from '../../model/club';
import { ClubService } from '../../services/club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-club',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-club.component.html',
  styleUrl: './edit-club.component.css'
})
export class EditClubComponent implements OnInit {

  @Input() id!: number;
  club!: Club;

  constructor(private clubService: ClubService, private router: Router) { }

  ngOnInit(): void {
    this.clubService.getClub(this.id).subscribe(club => {
      this.club = club;
    });
  }

  updateClub() {
    this.clubService.updateClub(this.club!).subscribe();
    this.router.navigate(['club']);
  }

}
