import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { Stadium } from '../../model/stadium';
import { StadiumService } from '../../services/stadium.service';	
import { Router } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stadium',
  standalone: true,
  imports: [
    MatCardModule, 
    MatListModule,
    MatButtonModule,
    MatDialogModule],
  templateUrl: './stadium.component.html',
  styleUrl: './stadium.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StadiumComponent {

  constructor(private stadiumService: StadiumService, private router: Router, private dialog: MatDialog) { }

  @Input() stadium!: Stadium;
  dialogRef!: MatDialogRef<any>;

  openDialog(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef, {
      width: '300px',
    });
  }

  confirmDelete(): void {
    this.stadiumService.deleteStadium(this.stadium.id).subscribe(() => {
      console.log('Stadium deleted');
      this.dialogRef.close();
    });
  }
  
  editStadium(id: number) {
    this.router.navigate(['edit-stadium', id]);
  }

}
