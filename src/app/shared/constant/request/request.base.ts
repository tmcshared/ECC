export const BASE = {
  HEADER: input => {
    return `<soapenv:Envelope xmlns:cre="http://xmlns.oracle.com/apps/irc/soaprovider/plsql/irc_party_api/create_user/" xmlns:irc="http://xmlns.oracle.com/apps/irc/soaprovider/plsql/irc_party_api/" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
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
        ${input}
   </soapenv:Body>
</soapenv:Envelope>
`;
  }
};
