import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { ManagerComponent } from '../../objects/manager/manager.component';
import { Manager } from '../../model/manager';

@Component({
  selector: 'app-manager-list',
  standalone: true,
  imports: [ManagerComponent],
  templateUrl: './manager-list.component.html',
  styleUrl: './manager-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManagerListComponent implements OnInit {

  constructor(private managerService: ManagerService) { }

  managers: Manager[] = [];

  ngOnInit(): void {
    this.managerService.getManagers().subscribe(listOfManagers => {
      this.managers = listOfManagers;
      console.log("managers", this.managers)
    });
  }

}
