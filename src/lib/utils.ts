export function getDisplayDateTime() {
  const day = getDay();
  const month = getMonth();
  const d = new Date();
  const date = d.getDate();
  let hours = d.getHours().toString();
  let min = d.getMinutes().toString();

  if (hours.length < 2) {
    hours = `0${hours}`;
  }

  if (min.length < 2) {
    min = `0${min}`;
  }

  return {
    date: `${day} ${month} ${date}`,
    time: `${hours}:${min}`,
  };
}

export function getMonth() {
  const date = new Date();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[date.getMonth()].substring(0, 3);
}

export function getDay() {
  const date = new Date();
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sartuday', 'Sunday'
  ];
  return days[date.getDay() - 1].substring(0, 3);
}
