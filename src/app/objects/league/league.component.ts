import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { League } from '../../model/league';
import { LeagueService } from '../../services/league.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [
    MatCardModule, 
    MatListModule,
    MatButtonModule,
    MatDialogModule],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeagueComponent {

  constructor(private leagueService: LeagueService, private router: Router, private dialog: MatDialog) { }

  @Input() league!: League;
  dialogRef!: MatDialogRef<any>;

  openDialog(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef, {
      width: '300px',
    });
  }

  confirmDelete(): void {
    this.leagueService.deleteLeague(this.league.id).subscribe(() => {
      console.log('League deleted');
      this.dialogRef.close();
    });
  }

  editLeague(id: number) {
    this.router.navigate(['edit-league', id]);
  }
}
