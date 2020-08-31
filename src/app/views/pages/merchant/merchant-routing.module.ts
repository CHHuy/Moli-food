import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MerchantComponent} from './merchant.component';
import {ItemsComponent} from './items/items.component';

const routes: Routes = [
  {path: '', component: MerchantComponent},
  {path: 'items/:merchantId', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule {
}
