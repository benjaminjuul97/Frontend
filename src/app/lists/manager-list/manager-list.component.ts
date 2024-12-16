import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { ManagerComponent } from '../../objects/manager/manager.component';
import { Manager } from '../../model/manager';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-manager-list',
  standalone: true,
  imports: [
    ManagerComponent,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './manager-list.component.html',
  styleUrl: './manager-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerListComponent implements OnInit {

  managers: Manager[] = [];
  pagedManagers: Manager[] = []; // Specify type as Player[]
  pageSize = 4; // Default page size
  currentPage = 0; // Current page index

  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    if(this.managerService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
    this.managerService.getManagers().subscribe(listOfManagers => {
      this.managers = listOfManagers;
      console.log("managers", this.managers)
      this.updatePagedManagers();
    });
  }

    updatePagedManagers(): void {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      this.pagedManagers = this.managers.slice(start, end);
    }
  
    onPageChange(event: PageEvent): void {
      this.pageSize = event.pageSize;
      this.currentPage = event.pageIndex;
      this.updatePagedManagers();
    }
  
    trackByIndex(index: number): number {
      return index;
    }


}
