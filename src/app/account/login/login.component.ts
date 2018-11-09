import { URL } from "./../../shared/constant/request.url";
import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import "rxjs/Rx";
import { NetworkManagerService } from "src/app/shared/services/network-manager.service";
import { NotificationsService } from "angular2-notifications";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private spinner: Ng4LoadingSpinnerService,
    private service: NetworkManagerService,
    private notification: NotificationsService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    const model = this.loginForm.value;
    this.spinner.show();
    const request = `<ebs:Input xmlns:ebs="http://xmlns.oracle.com/SOADev/ADPorts_EBS_LoginAuthentication/EBS_LoginAuthentication">
                        <ebs:Username>FOWZI@SGUARDME.AE</ebs:Username>
                        <ebs:Password>securigu@rd2017</ebs:Password>
                      </ebs:Input>`;
    this.service.post(URL.LOGIN, request).subscribe(
      response => {
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.notification.error("Error", "Something went wrong");
      }
    );
  }
}
