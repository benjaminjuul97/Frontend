import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ManagerService } from '../../services/manager.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-manager',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './add-manager.component.html',
  styleUrl: './add-manager.component.css'
})
export class AddManagerComponent {

  constructor(private managerService: ManagerService) {}

  firstname: FormControl = new FormControl('', [Validators.required]);
  lastname: FormControl = new FormControl('', [Validators.required]);
  age: FormControl = new FormControl('', [Validators.required]);
  experienceyears: FormControl = new FormControl('', [Validators.required]);
  countryid: FormControl = new FormControl('', [Validators.required]);
  clubid: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', [Validators.required]);

  managerFormGroup: FormGroup = new FormGroup({
    firstname: this.firstname.value,
    lastname: this.lastname.value,
    age: this.age.value,
    experienceyears: this.experienceyears.value,
    countryid: this.countryid.value,
    clubid: this.clubid.value,
    image: this.image.value
  });

  addManager(){
    this.managerService.createManager({
      id: 0,
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      age: this.age.value,
      experienceyears: this.experienceyears.value,
      countryid: this.countryid.value,
      clubid: this.clubid.value,
      image: this.image.value
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
  }
}
