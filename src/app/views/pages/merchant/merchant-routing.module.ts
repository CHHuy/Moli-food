import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MerchantComponent} from './merchant.component';
import {ItemsComponent} from './items/items.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {AdminComponent} from '../admin/admin.component';
import {OrderMenuComponent} from './order-menu/order-menu.component';

const routes: Routes = [
  {path: '', component: MerchantComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'order-menu', component: OrderMenuComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'items/:merchantId', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule {
}
