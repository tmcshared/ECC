import { Component, AfterViewChecked } from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
declare var $;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent implements AfterViewChecked {
  public options = {
    position: ["bottom", "right"],
    timeOut: 2000,
    lastOnBottom: true,
    preventDuplicates: true,
    animate: "rotate"
  };

  ngAfterViewChecked() {
    // $(".back-to-top").on("click", function() {
    //   $("html, body").animate(
    //     {
    //       scrollTop: 0
    //     },
    //     "slow"
    //   );
    //   return false;
    // });
  }
  constructor(router: Router, private spinner: Ng4LoadingSpinnerService) {
    router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
      }
      if (event instanceof NavigationEnd) {
        this.spinner.hide();
      }
      if (event instanceof NavigationCancel) {
        this.spinner.hide();
      }
      if (event instanceof NavigationError) {
        this.spinner.hide();
      }
    });
  }
}
