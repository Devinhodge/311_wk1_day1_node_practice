// import moment here; use this package in each function

const moment = require("moment");
moment().format();

const today = () => {
  // write code for dates.today
return moment().format('dddd');

}

const calendar = () => {
  // write code for dates.calendar
  return moment().format('MMM DD, YYYY');
}

const currentTime = () => {
  // write code for dates.currentTime
return moment().format('HH:MM:SS A');
}

module.exports = {
  today,
  calendar,
  currentTime
}