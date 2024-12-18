import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { LeagueService } from '../../services/league.service';
import { Router, RouterModule } from '@angular/router';
import { League } from '../../model/league';

import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-edit-league',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatLabel,
    RouterModule
  ],
  templateUrl: './edit-league.component.html',
  styleUrl: './edit-league.component.css'
})
export class EditLeagueComponent implements OnInit {

  @Input() id!: number;
  league!: League;

  constructor(private leagueService: LeagueService, private router: Router) { }

    lname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9\\s]+$')]);
    countryid: FormControl = new FormControl('', [Validators.required]);
    logo: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.svg$')]);
  
  
    leagueEditFormGroup: FormGroup = new FormGroup({
      lname: this.lname,
      countryid: this.countryid,
      logo: this.logo
    });

  ngOnInit(): void {
    this.leagueService.getLeague(this.id).subscribe(league => {
      this.league = league;
    });
  }

  updateLeague() {
    this.leagueService.updateLeague(this.league!).subscribe();
    this.router.navigate(['league']);
  }

}