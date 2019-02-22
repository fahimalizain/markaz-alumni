import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { MatStepperModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatStepperModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
