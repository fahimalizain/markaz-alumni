import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ComingSoonComponent],
  exports: [HeaderComponent, FooterComponent, ComingSoonComponent],
  imports: [
    CommonModule,
    SharedModule
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
