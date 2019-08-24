import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule, ParticlesModule]
})
export class ProfileModule {}
