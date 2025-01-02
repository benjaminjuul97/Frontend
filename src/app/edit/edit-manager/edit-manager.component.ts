import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Manager } from '../../model/manager';
import { ManagerService } from '../../services/manager.service';
import { Router, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-edit-manager',
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
    RouterModule
  ],
  templateUrl: './edit-manager.component.html',
  styleUrl: './edit-manager.component.css'
})
export class EditManagerComponent implements OnInit {

  @Input() id!: number;
  manager!: Manager;

  constructor(private managerService: ManagerService, private router: Router) { }

    firstname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')
    ]);
    lastname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')
    ]);
    countryid: FormControl = new FormControl('', [Validators.required]);
    clubid: FormControl = new FormControl('', [Validators.required]);
    image: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.png$')]);
    dob: FormControl = new FormControl('', [Validators.required]);
  
    managerEditFormGroup: FormGroup = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      countryid: this.countryid,
      clubid: this.clubid,
      image: this.image,
      dob: this.dob
    });

  ngOnInit(): void {
    if(this.managerService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    } else {
    this.managerService.getManager(this.id).subscribe(manager => {
      this.manager = manager;
    });
  }
  }

  updateManager() {
    this.managerService.updateManager(this.manager!).subscribe();
    this.router.navigate(['manager']);
  }

}