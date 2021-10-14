import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReneCurrencyComponent } from './rene-currency/rene-currency.component';
import { ReneWalletComponent } from './rene-wallet/rene-wallet.component';
import { RouterModule } from '@angular/router';
import { ReneWalletService } from './rene-wallet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    HttpClientModule,
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
      [
        {path: 'currency', component: ReneCurrencyComponent},
        {path: 'wallet', component: ReneWalletComponent},
      ]
    )
  ],
  declarations: [ AppComponent, HelloComponent, ReneCurrencyComponent, ReneWalletComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ReneWalletService]
})
export class AppModule { }
