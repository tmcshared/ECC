import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HeaderModule } from "../shared/module/header/header.module";
import { FooterModule } from "../shared/module/footer/footer.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ValidationModule } from "../shared/module/validation/validation.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ValidationModule,
    AccountRoutingModule,
    FooterModule,
    HeaderModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AccountModule {}
