import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LeagueService } from '../../services/league.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-league',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './add-league.component.html',
  styleUrl: './add-league.component.css'
})
export class AddLeagueComponent {

  constructor(private leagueService: LeagueService, private router: Router) {}

  lname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9\\s]+$')]);
  countryid: FormControl = new FormControl('', [Validators.required]);
  logo: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.svg$')]);


  leagueFormGroup: FormGroup = new FormGroup({
    lname: this.lname.value,
    countryid: this.countryid.value,
    logo: this.logo.value
  });

  ngOnInit(): void {
    if(this.leagueService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
  }

  addLeague(){
    //  if(!this.leagueFormGroup.valid) {
    //    console.log("Data not valid");
    //    return;
    
    //  }
  
    this.leagueService.createLeague({
      id: 0,
      lname: this.lname.value,
      countryid: this.countryid.value,
      logo: this.logo.value,
      flag: ''
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
    this.router.navigate(['league']);
  }

}
