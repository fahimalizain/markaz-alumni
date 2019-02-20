import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import {MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class SharedModule { }
