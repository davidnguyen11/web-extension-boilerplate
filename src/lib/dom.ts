import { getDisplayDateTime, getPalette } from './utils';

export function renderDateTime() {
  const { date, time, period } = getDisplayDateTime();
  const palette = getPalette(period);
  const root = document.getElementById('root');
  const headingDate = document.getElementById('date');
  const headingTime = document.getElementById('time');
  headingDate.innerText = date;
  headingTime.innerText = time;
  headingDate.style.color = palette;
  headingTime.style.color = palette;
  root.style.backgroundImage = `url('images/${period}.png')`;
}
