import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [AuthService]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    /* We are declaring header and footer in this module which requires importing in other modules..
    if (parentModule) {
      throw new Error('CoreModule is already loaded');
    }
    */
  }
}
