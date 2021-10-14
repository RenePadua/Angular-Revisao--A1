import { Component, OnInit } from '@angular/core';
import { ReneWalletService } from '../rene-wallet.service';

@Component({
  selector: 'app-rene-wallet',
  templateUrl: './rene-wallet.component.html',
  styleUrls: ['./rene-wallet.component.css']
})
export class ReneWalletComponent implements OnInit {

  constructor(public wallet: ReneWalletService) {
    
  }

  ngOnInit() {
  }

}