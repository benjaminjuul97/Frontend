import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Club } from '../../model/club';
import { ClubService } from '../../services/club.service';
import { Router, RouterModule } from '@angular/router';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-edit-club',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    RouterModule],
  templateUrl: './edit-club.component.html',
  styleUrl: './edit-club.component.css'
})
export class EditClubComponent implements OnInit {

  @Input() id!: number;
  club!: Club;

  constructor(private clubService: ClubService, private router: Router) { }

    cname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9\\s]+$')]);
    leagueid: FormControl = new FormControl('', [Validators.required]);
    managerid: FormControl = new FormControl('', [Validators.required]);
    stadiumid: FormControl = new FormControl('', [Validators.required]);
    logo: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.svg$')
    ]);
  
    clubEditFormGroup: FormGroup = new FormGroup({
      cname: this.cname,
      leagueid: this.leagueid,
      managerid: this.managerid,
      stadiumid: this.stadiumid,
      logo: this.logo
    });

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
