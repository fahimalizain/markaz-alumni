import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

const routes: Routes = [
  { path: '', redirectTo: 'privacy-policy' },
  { path: 'privacy-policy', component: PrivacypolicyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalRoutingComponent { }
