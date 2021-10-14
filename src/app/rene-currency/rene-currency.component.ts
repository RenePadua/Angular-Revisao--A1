import { Component, OnInit } from '@angular/core';
import { ReneWalletService } from '../rene-wallet.service';

@Component({
  selector: 'app-rene-currency',
  templateUrl: './rene-currency.component.html',
  styleUrls: ['./rene-currency.component.css']
})
export class ReneCurrencyComponent implements OnInit {

  constructor(public wallet: ReneWalletService) {
    
   }

  ngOnInit() {
  }

}