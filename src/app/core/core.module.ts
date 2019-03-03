import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatProgressBarModule } from '@angular/material';
import { SpinnerService } from 'services/spinner.service';
import DialogService from 'services/dialog.service';
import GoogleService from 'services/google.service';
import FacebookService from 'services/facebook.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from 'services/request.interceptor';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ComingSoonComponent, SpinnerComponent],
  exports: [HeaderComponent, FooterComponent, ComingSoonComponent, SpinnerComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressBarModule
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService, SpinnerService, DialogService, GoogleService, FacebookService,
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
      ],
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
