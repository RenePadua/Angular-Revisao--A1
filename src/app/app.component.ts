import { Component, VERSION } from '@angular/core';
import { ReneWalletService } from './rene-wallet.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(public wallet: ReneWalletService){}
}


