import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClubService } from '../../services/club.service';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-club',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './add-club.component.html',
  styleUrl: './add-club.component.css'
})
export class AddClubComponent {

  constructor(private clubService: ClubService) {}

  cname: FormControl = new FormControl('', [Validators.required]);
  leagueid: FormControl = new FormControl('', [Validators.required]);
  managerid: FormControl = new FormControl('', [Validators.required]);
  stadiumid: FormControl = new FormControl('', [Validators.required]);
  logo: FormControl = new FormControl('', [Validators.required]);

  clubFormGroup: FormGroup = new FormGroup({
    cname: this.cname.value,
    leagueid: this.leagueid.value,
    managerid: this.managerid.value,
    stadiumid: this.stadiumid.value,
    logo: this.logo.value,
  });

  addClub(){
    //  if(!this.clubFormGroup.valid) {
    //    console.log("Data not valid");
    //    return;
    
    //  }
  
    this.clubService.createClub({
      id: 0,
      cname: this.cname.value,
      leagueid: this.leagueid.value,
      managerid: this.managerid.value,
      stadiumid: this.stadiumid.value,
      logo: this.logo.value
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
  }

}
