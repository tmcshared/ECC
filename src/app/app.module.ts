import { HttpClientModule } from "@angular/common/http";
import { NetworkManagerService } from "./shared/services/network-manager.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Ng4LoadingSpinnerModule } from "ng4-loading-spinner";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SimpleNotificationsModule } from "angular2-notifications";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [NetworkManagerService],

  bootstrap: [AppComponent]
})
export class AppModule {}
