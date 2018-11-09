import { VerifyComponent } from "./component/verify/verify.component";
import { CreateComponent } from "./component/create/create.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "create"
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "verify",
    component: VerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
