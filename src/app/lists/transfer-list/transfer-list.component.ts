import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TransferService } from '../../services/transfer.service';
import { Transfer } from '../../model/transfer';
import { TransferComponent } from '../../objects/transfer/transfer.component';

@Component({
  selector: 'app-transfer-list',
  standalone: true,
  imports: [TransferComponent],
  templateUrl: './transfer-list.component.html',
  styleUrl: './transfer-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransferListComponent implements OnInit {

  constructor(private transferService: TransferService) { }

  transfers: Transfer[] = [];

  ngOnInit(): void {
    this.transferService.getTransfers().subscribe(listOfTransfers => {
      this.transfers = listOfTransfers;
    });
  }

}
