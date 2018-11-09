import { FooterModule } from "./../shared/module/footer/footer.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { VerifyComponent } from "./component/verify/verify.component";
import { CreateComponent } from "./component/create/create.component";
import { HeaderModule } from "../shared/module/header/header.module";

@NgModule({
  imports: [CommonModule, ProfileRoutingModule, HeaderModule, FooterModule],
  declarations: [VerifyComponent, CreateComponent]
})
export class ProfileModule {}
