import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

import { CoreCommitteeMembersComponent } from "./components/core-committee-members/core-committee-members.component";
import { HomeItemContainerComponent } from "./components/home-item-container/home-item-container.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeGalleryComponent } from "./components/home-gallery/home-gallery.component";
import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    HomeComponent,
    CoreCommitteeMembersComponent,
    HomeItemContainerComponent,
    HomeGalleryComponent
  ],
  imports: [SharedModule, CommonModule, HomeRoutingModule, CarouselModule]
})
export class HomeModule {}
