import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { PlayerService } from '../../services/player.service';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-player',
  standalone: true,
  providers: [provideMomentDateAdapter(
    {
      parse: {
        dateInput: ['DD-MM-YYYY'],
      },
      display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      },
    },
    { useUtc: true })
  ],
  imports: [
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIcon, 
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.css'
})
export class AddPlayerComponent {

  constructor(private playerService: PlayerService) {}

  firstname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]);
  lastname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]);
  pposition: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]);
  clubid: FormControl = new FormControl('', [Validators.required]);
  countryid: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.png$')]);
  dob: FormControl = new FormControl('', [Validators.required]);

  playerFormGroup: FormGroup = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    pposition: this.pposition,
    clubid: this.clubid,
    countryid: this.countryid,
    image: this.image,
    dob: this.dob
  });

  addPlayer(){
     if(!this.playerFormGroup.valid) {
       console.log("Data not valid");
       return;
    
     }
  
    this.playerService.createPlayer({
      id: 0,
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      pposition: this.pposition.value,
      clubid: this.clubid.value,
      countryid: this.countryid.value,
      image: this.image.value,
      dob: this.dob.value,
      flag: '',
      logo: '',
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
  }

}

