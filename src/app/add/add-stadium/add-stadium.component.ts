import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StadiumService } from '../../services/stadium.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-stadium',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './add-stadium.component.html',
  styleUrl: './add-stadium.component.css'
})
export class AddStadiumComponent {

  constructor(private stadiumService: StadiumService, private router: Router) {}

  sname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9\\s]+$')]);
  slocation: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9\\s]+$')]);
  capacity: FormControl = new FormControl('', [Validators.required]);
  clubid: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.png$')]);

  stadiumFormGroup: FormGroup = new FormGroup({
    sname: this.sname.value,
    slocation: this.slocation.value,
    capacity: this.capacity.value,
    clubid: this.clubid.value,
    image: this.image.value,
  });

  ngOnInit(): void {
    if(this.stadiumService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
  } 


  addStadium(){
    //  if(!this.stadiumFormGroup.valid) {
    //    console.log("Data not valid");
    //    return;
    
    //  }
  
    this.stadiumService.createStadium({
      id: 0,
      sname: this.sname.value,
      slocation: this.slocation.value,
      capacity: this.capacity.value,
      clubid: this.clubid.value,
      image: this.image.value,
      logo: ''
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
    this.router.navigate(['stadium']);
  }

}
