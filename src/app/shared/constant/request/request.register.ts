import { BASE } from "./request.base";
export const REGISTER = {
  INPUT: model => {
    return BASE.HEADER(`
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
  `);
  }
};
