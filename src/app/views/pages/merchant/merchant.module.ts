import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {MerchantComponent} from './merchant.component';
import {ItemsComponent} from './items/items.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import {SharedAppModule} from '../../../shared/shared.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { OrderMenuComponent } from './order-menu/order-menu.component';
import {DropdownModule} from 'primeng/dropdown';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MerchantComponent, ItemsComponent, ConfirmComponent, OrderMenuComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    InputNumberModule,
    SharedAppModule,
    DialogModule,
    DropdownModule,
    NgbDropdownModule
  ],
  providers: [
    DatePipe
  ]
})
export class MerchantModule {
}
