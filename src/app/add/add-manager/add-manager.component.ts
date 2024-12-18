import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { ManagerService } from '../../services/manager.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-manager',
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
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './add-manager.component.html',
  styleUrl: './add-manager.component.css'
})
export class AddManagerComponent {

  constructor(private managerService: ManagerService) {}

  firstname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')
  ]);
  lastname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')
  ]);
  countryid: FormControl = new FormControl('', [Validators.required]);
  clubid: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.png$')]);
  dob: FormControl = new FormControl('', [Validators.required]);

  managerFormGroup: FormGroup = new FormGroup({
    firstname: this.firstname.value,
    lastname: this.lastname.value,
    countryid: this.countryid.value,
    clubid: this.clubid.value,
    image: this.image.value,
    dob: this.dob.value
  });

  addManager(){
    this.managerService.createManager({
      id: 0,
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      countryid: this.countryid.value,
      clubid: this.clubid.value,
      image: this.image.value,
      dob: this.dob.value,
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
  }
}
