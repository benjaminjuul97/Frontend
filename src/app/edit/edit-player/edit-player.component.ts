import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-edit-player',
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
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPlayerComponent implements OnInit {

  @Input() id!: number;
  player!: Player;

  constructor(private playerService: PlayerService, private router: Router) { }

    firstname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]);
    lastname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]);
    pposition: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]);
    clubid: FormControl = new FormControl('', [Validators.required]);
    countryid: FormControl = new FormControl('', [Validators.required]);
    image: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.png$')]);
    dob: FormControl = new FormControl('', [Validators.required]);
  
    playerEditFormGroup: FormGroup = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      pposition: this.pposition,
      clubid: this.clubid,
      countryid: this.countryid,
      image: this.image,
      dob: this.dob
    });
  
  
  ngOnInit(): void {
    this.playerService.getPlayer(this.id).subscribe(player => {
      this.player = player;
    });
  }

  updatePlayer() {
    this.playerService.updatePlayer(this.player!).subscribe();
    this.router.navigate(['player']);
  }
}