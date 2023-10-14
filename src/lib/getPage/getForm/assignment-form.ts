type Props = {
  __VIEWSTATEX: string;
  __EVENTVALIDATION: string;
  masterFooterValue: string;
};

export function getAssignmentsForm({ __VIEWSTATEX, __EVENTVALIDATION, masterFooterValue }: Props) {
  let form = new FormData();
  form.append("time", "0");
  form.append("__EVENTTARGET", "s$m$Content$Content$CurrentExerciseFilterCB");
  form.append("__EVENTARGUMENT", "");
  form.append("__LASTFOCUS", "");
  form.append("__SCROLLPOSITION", "");
  form.append("__VIEWSTATEX", __VIEWSTATEX);
  form.append("__VIEWSTATEY_KEY", "");
  form.append("__VIEWSTATE", "");
  form.append("__VIEWSTATEENCRYPTED", "");
  form.append("__EVENTVALIDATION", __EVENTVALIDATION);
  form.append("s$m$ChooseTerm$term", "2023");
  form.append("s$m$searchinputfield", "");
  form.append("s$m$Content$Content$ShowHoldElementDD", "");
  form.append("s$m$Content$Content$ShowThisTermOnlyCB", "on");
  form.append("masterfootervalue", masterFooterValue);
  form.append("LectioPostbackId", "");

  return form;
}
