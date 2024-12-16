import { Component, Input,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Club } from '../../model/club';
import { ClubService } from '../../services/club.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [],
  templateUrl: './club.component.html',
  styleUrl: './club.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubComponent {
  dialogRef: MatDialogRef<any> | null = null;

  constructor(private clubService: ClubService, private router: Router, private dialog: MatDialog) { }

  @Input() club!: Club;

  openDeleteDialog(templateRef: any): void {
    this.dialogRef = this.dialog.open(templateRef);
  }

  closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  confirmDelete(): void {
    this.closeDialog();
    this.deleteClub(); // Call the delete logic
  }

  deleteClub(): void {
    this.clubService.deleteClub(this.club.id).subscribe();
  }

  editClub(id: number) {
    this.router.navigate(['edit-club', id]);
  }

}
