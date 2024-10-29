import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Manager } from '../../model/manager';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerComponent {

  @Input() manager!: Manager;

  constructor(private managerService: ManagerService, private router: Router) { }

  deleteManager() {
    this.managerService.deleteManager(this.manager.id).subscribe();
  }

  editManager(id: number) {
    this.router.navigate(['edit-manager', id]);
  }


}
