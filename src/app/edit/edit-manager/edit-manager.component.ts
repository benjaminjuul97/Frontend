import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Manager } from '../../model/manager';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-manager',
  standalone: true,
  imports: [FormsModule],
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