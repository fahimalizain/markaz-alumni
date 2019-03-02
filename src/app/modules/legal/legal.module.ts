import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { LegalRoutingComponent } from './legal-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PrivacypolicyComponent],
  imports: [
    CommonModule,
    LegalRoutingComponent,
    SharedModule
  ]
})
export class LegalModule { }
