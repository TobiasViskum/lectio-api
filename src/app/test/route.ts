import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { load } from "cheerio";

const viewStateX = "0QAAAGlpZQstMTkxODIyNTM1MGlsAmsAgWwCaGlkbAJnA2lsAmsBZQNvZmZsAmcDaWRsBGcCaWRsAoFpZGwCZwlpZGwEgWlsAmsCZRZNYXJzZWxpc2JvcmcgR3ltbmFzaXVtZGcJaWRsAoFpZGwCgWlqaWwCawNwZGRkZGcEaWlsAmsEcGRkcgFlHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfX2wCZQxtJENob29zZVRlcm1lFm0kQ29udGVudCRBdXRvbG9naW5DYngFAAAAE1ZhbGlkYXRlUmVxdWVzdE1vZGUMYXV0b2NvbXBsZXRlCWlubmVyaHRtbAdDaGVja2VkB1Zpc2libGUA0PQir7q3TelaEm8bTT2qnq+67c4=";

const eventValidation = "3m1vgMdSiaIK5BOvwelHM1qFdAtGL6HC3ewNmG2DhA0ikABUsnUTFChRy+mgJ36AqXjb6eQnvISLFABX+C9HTFagxRA1BtkSRWSBdHnO1Y+OKUQhXA2QZ4ms1P7iEU/+h6E0+qDS1hzeKo9/JrAW55M0GwA52Yzj+K/2e5FKRcRxdmHseUto7TOrxxiDR0L/Hdn/Wfy+T0uw0NvQRjh8Iw==";

const formData = {
  time: "0",
  __EVENTTARGET: "m$Content$submitbtn2",
  __EVENTARGUMENT: "",
  __LASTFOCUS: "",
  __SCROLLPOSITION: "",
  __VIEWSTATEX: viewStateX,
  __VIEWSTATEY_KEY: "",
  __VIEWSTATE: "",
  __EVENTVALIDATION: eventValidation,
  m$Content$username: "tobi688c",
  m$Content$password: "10Elefanter!",
  m$Content$AutologinCbx: "on",
  masterfootervalue: "X1!ÆØÅ",
  LectioPostbackId: "",
};
const form = new FormData();
for (const [key, value] of Object.entries(formData)) {
  form.append(key, value);
}

export async function GET(req: NextRequest) {
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let formdata = new FormData();
  formdata.append("time", "0");
  formdata.append("__EVENTTARGET", "m$Content$submitbtn2");
  formdata.append("__EVENTARGUMENT", "");
  formdata.append("__LASTFOCUS", "");
  formdata.append("__SCROLLPOSITION", "");
  formdata.append("__VIEWSTATEX", "0QAAAGlpZQstMTkxODIyNTM1MGlsAmsAgWwCaGlkbAJnA2lsAmsBZQNvZmZsAmcDaWRsBGcCaWRsAoFpZGwCZwlpZGwEgWlsAmsCZRZNYXJzZWxpc2JvcmcgR3ltbmFzaXVtZGcJaWRsAoFpZGwCgWlqaWwCawNwZGRkZGcEaWlsAmsEcGRkcgFlHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfX2wCZQxtJENob29zZVRlcm1lFm0kQ29udGVudCRBdXRvbG9naW5DYngFAAAAE1ZhbGlkYXRlUmVxdWVzdE1vZGUMYXV0b2NvbXBsZXRlCWlubmVyaHRtbAdDaGVja2VkB1Zpc2libGUA0PQir7q3TelaEm8bTT2qnq+67c4=");
  formdata.append("__VIEWSTATEY_KEY", "");
  formdata.append("__VIEWSTATE", "");
  formdata.append("__EVENTVALIDATION", "3m1vgMdSiaIK5BOvwelHM1qFdAtGL6HC3ewNmG2DhA0ikABUsnUTFChRy+mgJ36AqXjb6eQnvISLFABX+C9HTFagxRA1BtkSRWSBdHnO1Y+OKUQhXA2QZ4ms1P7iEU/+h6E0+qDS1hzeKo9/JrAW55M0GwA52Yzj+K/2e5FKRcRxdmHseUto7TOrxxiDR0L/Hdn/Wfy+T0uw0NvQRjh8Iw==");
  formdata.append("m$Content$username", "tobi688c");
  formdata.append("m$Content$password", "10Elefanter!");
  formdata.append("m$Content$AutologinCbx", "on");
  formdata.append("masterfootervalue", "X1!ÆØÅ");
  formdata.append("LectioPostbackId", "");

  let bodyContent = formdata;

  let reqOptions = {
    url: "https://www.lectio.dk/lectio/243/login.aspx",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
  console.log(response.data);

  return NextResponse.json({ data: null });
}
