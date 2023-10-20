type Props = {
  __VIEWSTATEX: string;
  __EVENTVALIDATION: string;
  masterFooterValue: string;
  username: string;
  password: string;
};

export function getLoginForm({
  __VIEWSTATEX,
  __EVENTVALIDATION,
  masterFooterValue,
  username,
  password,
}: Props) {
  let form = new FormData();

  form.append("time", "0");
  form.append("__EVENTTARGET", "m$Content$submitbtn2");
  form.append("__EVENTARGUMENT", "");
  form.append("__LASTFOCUS", "");
  form.append("__SCROLLPOSITION", "");
  form.append("__VIEWSTATEX", __VIEWSTATEX);
  form.append("__VIEWSTATEY_KEY", "");
  form.append("__VIEWSTATE", "");
  form.append("__EVENTVALIDATION", __EVENTVALIDATION);
  form.append("m$Content$username", username);
  form.append("m$Content$password", password);
  form.append("m$Content$AutologinCbx", "on");
  form.append("masterfootervalue", masterFooterValue);
  form.append("LectioPostbackId", "");

  return form;
}
