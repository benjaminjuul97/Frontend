import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TransferService } from '../../services/transfer.service';
import { Transfer } from '../../model/transfer';
import { TransferComponent } from '../../objects/transfer/transfer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-transfer-list',
  standalone: true,
  imports: [
    TransferComponent,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './transfer-list.component.html',
  styleUrl: './transfer-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransferListComponent implements OnInit {

  transfers: Transfer[] = [];
  pagedTransfers: Transfer[] = [];
  pageSize = 4;
  currentPage = 0;

  constructor(private transferService: TransferService, private router: Router) { }

  ngOnInit(): void {
    if(this.transferService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
    this.transferService.getTransfers().subscribe(listOfTransfers => {
      this.transfers = listOfTransfers;
      console.log("transfers", this.transfers);
      this.updatePagedTransfers();
    });
  }

  updatePagedTransfers(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedTransfers = this.transfers.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedTransfers();
  }

  trackByIndex(index: number): number {
    return index;
  }

}
