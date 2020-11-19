import { getDisplayDateTime } from './utils';

export function renderDateTime() {
  const headingDatetime = document.getElementById('datetime');
  headingDatetime.innerText = getDisplayDateTime();
}
