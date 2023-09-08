const currentDate = new Date();

const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const dayIndex = currentDate.getDay();

const particularDayOfTheWeek = daysOfTheWeek[dayIndex]

const getCurrentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
getCurrentDayOfTheWeek.innerText = `It's ${particularDayOfTheWeek} today!`;

const currentTime = currentDate.getTime();
const currentTimeInMilliseconds = document.querySelector('[data-testid="currentUTCTime"]');
currentTimeInMilliseconds.innerHTML = `It's ${currentTime} time in milliseconds`