import { getDisplayDateTime } from './utils';

export function renderDateTime() {
  const { date, time } = getDisplayDateTime();
  const headingDate = document.getElementById('date');
  const headingTime = document.getElementById('time');

  headingDate.innerText = date;
  headingTime.innerText = time;
}
