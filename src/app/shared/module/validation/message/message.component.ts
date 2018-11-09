import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styles: []
})
export class MessageComponent implements OnInit {
  @Input()
  control: FormControl;
  constructor() {}

  ngOnInit() {}
}
