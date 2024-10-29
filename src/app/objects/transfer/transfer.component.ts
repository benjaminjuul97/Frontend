import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Transfer } from '../../model/transfer';
import { TransferService } from '../../services/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransferComponent {

  constructor(private transferService: TransferService, private router: Router) { }

  @Input() transfer!: Transfer;

  deleteTransfer(transfer: Transfer): void {
    this.transferService.deleteTransfer(this.transfer.id).subscribe();
  }

  editTransfer(id: number) {
    this.router.navigate(['edit-transfer', id]);
  }

}
