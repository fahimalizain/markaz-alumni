import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./modules/home/home.module#HomeModule" },
  { path: "home", redirectTo: "" },
  { path: "login", loadChildren: "./modules/login/login.module#LoginModule" },
  { path: "profile", loadChildren: "./modules/profile/profile.module#ProfileModule" },
  {
    path: "register",
    loadChildren: "./modules/register/register.module#RegisterModule"
  },
  { path: "legal", loadChildren: "./modules/legal/legal.module#LegalModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
