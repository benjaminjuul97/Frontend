import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../../model/transfer';
import { TransferService } from '../../services/transfer.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-transfer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-transfer.component.html',
  styleUrl: './edit-transfer.component.css'
})
export class EditTransferComponent implements OnInit {

  @Input() id!: number;
  transfer!: Transfer;

  constructor(private transferService: TransferService, private router: Router) { }

  ngOnInit(): void {
    this.transferService.getTransfer(this.id).subscribe(transfer => {
      this.transfer = transfer;
    });
  }

  updateTransfer() {
    this.transferService.updateTransfer(this.transfer!).subscribe();
    this.router.navigate(['transfer']);
  }
}