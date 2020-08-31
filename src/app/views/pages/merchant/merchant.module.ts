import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {MerchantComponent} from './merchant.component';
import {ItemsComponent} from './items/items.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {SharedAppModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [MerchantComponent, ItemsComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule,
    InputNumberModule,
    SharedAppModule
  ]
})
export class MerchantModule {
}
