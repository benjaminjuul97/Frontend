import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Manager } from '../../model/manager';
import { ManagerService } from '../../services/manager.service';
import { Router, RouterModule } from '@angular/router';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-edit-manager',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './edit-manager.component.html',
  styleUrl: './edit-manager.component.css'
})
export class EditManagerComponent implements OnInit {

  @Input() id!: number;
  manager!: Manager;

  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    this.managerService.getManager(this.id).subscribe(manager => {
      this.manager = manager;
    });
  }

  updateManager() {
    this.managerService.updateManager(this.manager!).subscribe();
    this.router.navigate(['manager']);
  }

}