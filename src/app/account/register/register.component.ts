import { REGISTER } from "./../../shared/constant/request/request.register";
import { URL } from "./../../shared/constant/request.url";
import { ValidatorService } from "./../../shared/services/validator.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NetworkManagerService } from "src/app/shared/services/network-manager.service";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { NotificationsService } from "angular2-notifications";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: []
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private spinner: Ng4LoadingSpinnerService,
    private service: NetworkManagerService,
    private notification: NotificationsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        familyName: new FormControl(null, Validators.required),
        firstName: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
        confirmPassword: new FormControl(null)
      },
      { validators: ValidatorService.validate.bind(this) }
    );
  }
  onSubmit() {
    const model = this.registerForm.value;
    this.spinner.show();
    model.date = new Date();
    const request = `<soapenv:Envelope xmlns:cre="http://xmlns.oracle.com/apps/irc/soaprovider/plsql/irc_party_api/create_user/" xmlns:irc="http://xmlns.oracle.com/apps/irc/soaprovider/plsql/irc_party_api/" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soapenv:Header>
       <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
          <wsse:UsernameToken wsu:Id="UsernameToken-8F2A9B10132F6BAA4815362095954571">
             <wsse:Username>hrms user</wsse:Username>
             <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">adpc123</wsse:Password>
             <wsse:Nonce EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">dIkinosCKGs56W3RBjlIyQ==</wsse:Nonce>
             <wsu:Created>2018-09-06T04:53:15.454Z</wsu:Created>
          </wsse:UsernameToken>
       </wsse:Security>
       <irc:SOAHeader>
          
          <irc:Responsibility>SYSTEM_ADMINISTRATOR</irc:Responsibility>
          
          <irc:RespApplication>SYSADMIN</irc:RespApplication>
          
          <irc:SecurityGroup>STANDARD</irc:SecurityGroup>
          
          <irc:NLSLanguage>AMERICAN</irc:NLSLanguage>
          
          <irc:Org_Id/>
       </irc:SOAHeader>
    </soapenv:Header>
    <soapenv:Body>
         <cre:InputParameters>
          
         <cre:P_USER_NAME>${model.email}</cre:P_USER_NAME>
           
         <cre:P_PASSWORD>${model.password}</cre:P_PASSWORD>
         
         <cre:P_START_DATE>${model.date}</cre:P_START_DATE>
         
         <cre:P_RESPONSIBILITY_ID>23350</cre:P_RESPONSIBILITY_ID>
         
         <cre:P_RESP_APPL_ID>800</cre:P_RESP_APPL_ID>
         
         <cre:P_SECURITY_GROUP_ID>0</cre:P_SECURITY_GROUP_ID>
         
         <cre:P_EMAIL>${model.email}</cre:P_EMAIL>
         
         <cre:P_LANGUAGE></cre:P_LANGUAGE>
         
         <cre:P_LAST_NAME>${model.familyName}</cre:P_LAST_NAME>
         
         <cre:P_FIRST_NAME>${model.firstName}</cre:P_FIRST_NAME>
          
          <cre:P_ALLOW_ACCESS></cre:P_ALLOW_ACCESS>
          
          <cre:P_PER_INFORMATION_CATEGORY></cre:P_PER_INFORMATION_CATEGORY>
          
          <cre:P_PER_INFORMATION1></cre:P_PER_INFORMATION1>
          
          <cre:P_PER_INFORMATION2></cre:P_PER_INFORMATION2>
          
          <cre:P_PER_INFORMATION3></cre:P_PER_INFORMATION3>
          
          <cre:P_PER_INFORMATION4></cre:P_PER_INFORMATION4>
          
          <cre:P_PER_INFORMATION5></cre:P_PER_INFORMATION5>
          
          <cre:P_PER_INFORMATION6></cre:P_PER_INFORMATION6>
          
          <cre:P_PER_INFORMATION7></cre:P_PER_INFORMATION7>
          
          <cre:P_PER_INFORMATION8></cre:P_PER_INFORMATION8>
          
          <cre:P_PER_INFORMATION9></cre:P_PER_INFORMATION9>
          
          <cre:P_PER_INFORMATION10></cre:P_PER_INFORMATION10>
          
          <cre:P_PER_INFORMATION11></cre:P_PER_INFORMATION11>
          
          <cre:P_PER_INFORMATION12></cre:P_PER_INFORMATION12>
          
          <cre:P_PER_INFORMATION13></cre:P_PER_INFORMATION13>
          
          <cre:P_PER_INFORMATION14></cre:P_PER_INFORMATION14>
          
          <cre:P_PER_INFORMATION15></cre:P_PER_INFORMATION15>
          
          <cre:P_PER_INFORMATION16></cre:P_PER_INFORMATION16>
          
          <cre:P_PER_INFORMATION17></cre:P_PER_INFORMATION17>
          
          <cre:P_PER_INFORMATION18></cre:P_PER_INFORMATION18>
          
          <cre:P_PER_INFORMATION19></cre:P_PER_INFORMATION19>
          
          <cre:P_PER_INFORMATION20></cre:P_PER_INFORMATION20>
          
          <cre:P_PER_INFORMATION21></cre:P_PER_INFORMATION21>
          
          <cre:P_PER_INFORMATION22></cre:P_PER_INFORMATION22>
          
          <cre:P_PER_INFORMATION23></cre:P_PER_INFORMATION23>
          
          <cre:P_PER_INFORMATION24></cre:P_PER_INFORMATION24>
          
          <cre:P_PER_INFORMATION25></cre:P_PER_INFORMATION25>
          
          <cre:P_PER_INFORMATION26></cre:P_PER_INFORMATION26>
          
          <cre:P_PER_INFORMATION27></cre:P_PER_INFORMATION27>
          
          <cre:P_PER_INFORMATION28></cre:P_PER_INFORMATION28>
          
          <cre:P_PER_INFORMATION29></cre:P_PER_INFORMATION29>
          
          <cre:P_PER_INFORMATION30></cre:P_PER_INFORMATION30>
       </cre:InputParameters>
    </soapenv:Body>
 </soapenv:Envelope>
 `;
    this.service.post(URL.REGISTER, request).subscribe(
      response => {
        this.spinner.hide();
        this.router.navigateByUrl("/profile/verify");
      },
      error => {
        this.spinner.hide();
        this.notification.error("Error", "Something went wrong");
      }
    );
  }
}
