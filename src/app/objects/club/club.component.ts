import { Component, Input,CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { Club } from '../../model/club';
import { ClubService } from '../../services/club.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubComponent {

  constructor(private clubService: ClubService, private router: Router, private dialog: MatDialog) { }

  @Input() club!: Club;
  dialogRef!: MatDialogRef<any>;

  openDialog(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef, {
      width: '300px',
    });
  }

  confirmDelete(): void {
    this.clubService.deleteClub(this.club.id).subscribe(() => {
      console.log('Club deleted');
      this.dialogRef.close();
    });
  }

  editClub(id: number) {
    this.router.navigate(['edit-club', id]);
  }

}
