import { Component, Input, CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';
import { Manager } from '../../model/manager';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Material components
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
        MatCardModule, 
        MatButtonModule,
        MatListModule,
        MatDialogModule,
        FormsModule, 
        MatFormFieldModule, 
        MatInputModule, 
        MatSelectModule,
        MatSlideToggleModule,
        MatLabel,
        CommonModule
  ],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerComponent {

  @Input() manager!: Manager;
  dialogRef!: MatDialogRef<any>;

  constructor(private managerService: ManagerService, private router: Router, private dialog: MatDialog) { }

  openDialog(templateRef: TemplateRef<any>): void {
    this.dialogRef = this.dialog.open(templateRef, {
      width: '300px',
    });
  }

  confirmDelete(): void {
    this.managerService.deleteManager(this.manager.id).subscribe(() => {
      console.log('Manager deleted');
      this.dialogRef.close();
    });
  }

  editManager(id: number) {
    console.log("editmanger")
    this.router.navigate(['edit-manager', id]);
  }


}
