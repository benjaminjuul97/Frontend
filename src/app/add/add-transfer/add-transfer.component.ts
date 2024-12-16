import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TransferService } from '../../services/transfer.service';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-transfer',
  standalone: true,
  imports: [MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatSlideToggleModule,
    RouterModule
  ],
  templateUrl: './add-transfer.component.html',
  styleUrl: './add-transfer.component.css'
})
export class AddTransferComponent {

  constructor(private transferService: TransferService) {}

  transferfee: FormControl = new FormControl('', [Validators.required]);
  transferdate: FormControl = new FormControl('', [Validators.required]);
  toclubid: FormControl = new FormControl('', [Validators.required]);
  fromclubid: FormControl = new FormControl('', [Validators.required]);
  playerid: FormControl = new FormControl('', [Validators.required]);
  loan: FormControl = new FormControl('', [Validators.required]);



  transferFormGroup: FormGroup = new FormGroup({
    transferfee: this.transferfee.value,
    transferdate: this.transferdate.value,
    toclubid: this.toclubid.value,
    fromclubid: this.fromclubid.value,
    playerid: this.playerid.value,
    loan: this.loan.value
  });

  addTransfer(){
     if(!this.transferFormGroup.valid) {
       console.log("Data not valid");
       return;
    
     }
  
    this.transferService.createTransfer({
      id: 0,
      transferfee: this.transferfee.value,
      transferdate: this.transferdate.value,
      toclubid: this.toclubid.value,
      fromclubid: this.fromclubid.value,
      playerid: this.playerid.value,
      loan: this.loan.value
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
  }

}
