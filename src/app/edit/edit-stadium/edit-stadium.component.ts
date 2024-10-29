import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Stadium } from '../../model/stadium';
import { StadiumService } from '../../services/stadium.service';


@Component({
  selector: 'app-edit-stadium',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-stadium.component.html',
  styleUrl: './edit-stadium.component.css'
})
export class EditStadiumComponent implements OnInit {

  @Input() id!: number;
  stadium!: Stadium;

  constructor(private stadiumService: StadiumService, private router: Router) { }

  ngOnInit(): void {
    this.stadiumService.getStadium(this.id).subscribe(stadium => {
      this.stadium = stadium;
    });
  }

  updateStadium() {
    this.stadiumService.updateStadium(this.stadium!).subscribe();
    this.router.navigate(['stadium']);
  }

}