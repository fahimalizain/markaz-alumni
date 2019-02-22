import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
