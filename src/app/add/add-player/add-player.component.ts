import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PlayerService } from '../../services/player.service';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [
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

  firstname: FormControl = new FormControl('', [Validators.required]);
  lastname: FormControl = new FormControl('', [Validators.required]);
  age: FormControl = new FormControl('', [Validators.required]);
  pposition: FormControl = new FormControl('', [Validators.required]);
  clubid: FormControl = new FormControl('', [Validators.required]);
  countryid: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', [Validators.required]);

  playerFormGroup: FormGroup = new FormGroup({
    firstname: this.firstname,
    lastname: this.lastname,
    age: this.age,
    pposition: this.pposition,
    clubid: this.clubid,
    countryid: this.countryid,
    image: this.image
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
      age: this.age.value,
      pposition: this.pposition.value,
      clubid: this.clubid.value,
      countryid: this.countryid.value,
      image: this.image.value,
      flag: '',
      logo: '',
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
  }

}

