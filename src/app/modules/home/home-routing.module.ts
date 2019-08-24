import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "coming-soon", component: ComingSoonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
