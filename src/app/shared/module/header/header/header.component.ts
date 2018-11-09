import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string;
  constructor() {
    console.log(this.title);
  }

  ngOnInit() {}
}
