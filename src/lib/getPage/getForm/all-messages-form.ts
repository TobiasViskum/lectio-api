type Props = {
  __VIEWSTATEY_KEY: string;
  masterFooterValue: string;
};

export function getAllMessagesForm({ __VIEWSTATEY_KEY, masterFooterValue }: Props) {
  let form = new FormData();
  form.append("__LASTFOCUS", "");
  form.append("time", "0");
  form.append("__EVENTTARGET", "s$m$Content$Content$threadGV$ctl01$ctl04");
  form.append("__EVENTARGUMENT", "");
  form.append("__SCROLLPOSITION", "");
  form.append("__VIEWSTATEY_KEY", __VIEWSTATEY_KEY);
  form.append("__VIEWSTATEX", "");
  form.append("__VIEWSTATE", "");
  form.append("__VIEWSTATEENCRYPTED", "");
  form.append("s$m$ChooseTerm$term", "2023");
  form.append("s$m$searchinputfield", "");
  form.append("s$m$Content$Content$ListGridSelectionTree$folders", "-30");
  form.append("s$m$Content$Content$SPSearchText$tb", "");
  form.append("s$m$Content$Content$MarkChkDD", "-1");
  form.append("masterfootervalue", masterFooterValue);
  form.append("LectioPostbackId", "");

  return form;
}
