import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';

import {SharedBoxLoadingComponent} from './components/box-loading/box-loading.component';
import {SharedBoxNoDataComponent} from './components/box-nodata/box-nodata.component';

import {SharedCardModule} from './components/card/card.module';
import {SharedNavTabModule} from './components/nav-tab/nav-tab.module';
import {SharedSplashScreenComponent} from './components/splash-screen/splash-screen.component';
import {SharedTableModule} from './components/table/table.module';

import {DirectivesModule} from './directives/directives.module';
import {PipesModule} from './pipes/pipes.module';

const sharedComponents = [
  SharedBoxLoadingComponent,
  SharedBoxNoDataComponent,
  SharedSplashScreenComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives
    DirectivesModule,

    // Pipe
    PipesModule,

    // 3rd party

  ],
  declarations: [
    ...sharedComponents
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

    // Directives
    DirectivesModule,

    // Pipe
    PipesModule,

    // 3rd party
    ToastModule,

    // modules
    SharedCardModule,
    SharedNavTabModule,
    SharedTableModule,

    ...sharedComponents
  ]
})
export class SharedAppModule {
}
