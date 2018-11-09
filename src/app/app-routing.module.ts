import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "account",
    pathMatch: "full"
  },
  {
    path: "account",
    loadChildren: "./account/account.module#AccountModule"
  },
  {
    path: "profile",
    loadChildren: "./profile/profile.module#ProfileModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
